#!/usr/bin/env python3
"""
フッターのスタイルを修正するスクリプト
既存のCSSを保持しながら、新しいフッター構造に必要なスタイルを追加
"""

import os
import re
from pathlib import Path

def add_footer_styles(content):
    """フッターに必要なCSSスタイルを追加"""
    
    # フッター用の追加CSS
    additional_css = """
    /* Footer Grid Layout */
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 3rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h4 {
      color: #00d4ff;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      font-weight: 700;
    }
    
    .footer-section .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-section .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }
    
    .footer-section .footer-links a:hover {
      color: #00d4ff;
    }
    
    .footer-copy {
      grid-column: 1 / -1;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-section {
        text-align: center;
      }
      
      .footer-section .footer-links {
        align-items: center;
      }
    }"""
    
    # </style>タグの前に追加
    if '</style>' in content:
        # 既にfooter-contentのスタイルがある場合はスキップ
        if '.footer-content {' not in content:
            content = content.replace('</style>', additional_css + '\n  </style>')
    
    return content

def update_file(file_path):
    """ファイルを更新"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # フッターが存在しない場合はスキップ
        if '<footer' not in content:
            print(f"Skipping {file_path} - No footer found")
            return False
        
        # CSSを追加
        updated_content = add_footer_styles(content)
        
        if updated_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print(f"Updated styles in: {file_path}")
            return True
        else:
            print(f"No changes needed: {file_path}")
            return False
            
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

def find_html_files(directory):
    """HTMLファイルを検索"""
    html_files = []
    for root, dirs, files in os.walk(directory):
        # 除外するディレクトリ
        if any(skip in root for skip in ['node_modules', '.git', 'out', 'build', 'dist', '.next']):
            continue
        
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    return html_files

def main():
    """メイン処理"""
    base_dir = "/Users/sejimakazuki/Documents/Obsidian Vault/web_sites/ronshoal-website"
    
    # 重要なファイルのみ更新
    priority_files = [
        "index.html",
        "about.html", 
        "contact.html",
        "medical-services.html",
        "other-services.html",
        "privacy.html",
        "business.html"
    ]
    
    updated_count = 0
    
    # 優先ファイルを処理
    for file_name in priority_files:
        file_path = os.path.join(base_dir, file_name)
        if os.path.exists(file_path):
            if update_file(file_path):
                updated_count += 1
    
    print(f"\nSummary:")
    print(f"Total priority files: {len(priority_files)}")
    print(f"Updated: {updated_count}")

if __name__ == "__main__":
    main()