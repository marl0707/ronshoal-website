#!/usr/bin/env python3
"""
フッターから特定のサービスリンクを削除するスクリプト
"""

import os
import re
from pathlib import Path

def remove_services_from_footer(content):
    """フッターから指定されたサービスを削除"""
    
    # 削除するサービスのパターン
    services_to_remove = [
        r'<a href="/services/health-passport/medical-diet\.html">医療ダイエット</a>\s*',
        r'<a href="/services/health-passport/sleep-apnea\.html">睡眠時無呼吸症候群治療</a>\s*',
        r'<a href="/services/health-passport/mens-health\.html">男性ヘルスケア</a>\s*',
        r'<a href="/services/health-passport/exosome-treatment\.html">エクソソーム治療</a>\s*'
    ]
    
    # 各パターンを削除
    for pattern in services_to_remove:
        content = re.sub(pattern, '', content)
    
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
        
        # サービスを削除
        original_content = content
        content = remove_services_from_footer(content)
        
        # 変更があった場合のみ保存
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
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
    
    # HTMLファイルを検索
    html_files = find_html_files(base_dir)
    print(f"Found {len(html_files)} HTML files")
    
    # 更新カウンター
    updated_count = 0
    
    # 各ファイルを更新
    for file_path in html_files:
        if update_file(file_path):
            updated_count += 1
    
    print(f"\nSummary:")
    print(f"Total files: {len(html_files)}")
    print(f"Updated: {updated_count}")
    print(f"Skipped: {len(html_files) - updated_count}")

if __name__ == "__main__":
    main()