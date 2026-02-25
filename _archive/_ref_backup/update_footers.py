#!/usr/bin/env python3
"""
すべてのHTMLファイルのフッターを一括更新するスクリプト
"""

import os
import re
from pathlib import Path

# 新しいフッターのHTML
NEW_FOOTER_HTML = '''  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h4>医療サービス</h4>
        <div class="footer-links">
          <a href="/services/kenshin-plus.html">健診プラス</a>
          <a href="/services/health-passport.html">健康パスポート</a>
          <a href="/services/workplace-clinic.html">職場 de クリニック</a>
          <a href="/ashisuku-navi/index.html">足育ナビ</a>
          <a href="/services/health-passport/medical-diet.html">医療ダイエット</a>
          <a href="/services/health-passport/sleep-apnea.html">睡眠時無呼吸症候群治療</a>
          <a href="/services/health-passport/mens-health.html">男性ヘルスケア</a>
          <a href="/services/health-passport/exosome-treatment.html">エクソソーム治療</a>
        </div>
      </div>
      <div class="footer-section">
        <h4>ビジネスサービス</h4>
        <div class="footer-links">
          <a href="/services/ai-web-development.html">AIバーガー</a>
          <a href="/services/social-insurance/index.html">個人事業主向け社会保険</a>
          <a href="/services/consulting.html">医療介護経営コンサルティング</a>
          <a href="/services/high-school-business.html">高校企業部</a>
          <a href="/services/agi-step.html">AGIステップ</a>
        </div>
      </div>
      <div class="footer-section">
        <h4>会社情報</h4>
        <div class="footer-links">
          <a href="/index.html">ホーム</a>
          <a href="/about.html">会社情報</a>
          <a href="/contact.html">お問い合わせ</a>
          <a href="/privacy.html">プライバシーポリシー</a>
        </div>
      </div>
      <div class="footer-copy">©️2021 Ronshoal.llc | Good Small Company</div>
    </div>
  </footer>'''

# 新しいフッターのCSS
NEW_FOOTER_CSS = '''    footer {
      background: #1a1a2e;
      padding: 4rem 2rem 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
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
    
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
    
    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.95rem;
    }
    
    .footer-links a:hover {
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
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .footer-section {
        text-align: center;
      }
      
      .footer-links {
        align-items: center;
      }
    }'''

def update_footer_in_file(file_path):
    """HTMLファイルのフッターを更新"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # フッターが存在しない場合はスキップ
        if '<footer' not in content:
            print(f"Skipping {file_path} - No footer found")
            return False
        
        # 既存のフッターを見つけて置換
        # Pattern 1: <footer>...</footer>
        footer_pattern = r'<footer[^>]*>.*?</footer>'
        new_content = re.sub(footer_pattern, NEW_FOOTER_HTML, content, flags=re.DOTALL)
        
        # フッターが更新されたかチェック
        if new_content == content:
            print(f"Skipping {file_path} - Footer already updated or pattern not matched")
            return False
        
        # CSSを更新（既存のfooterスタイルがある場合）
        if 'footer {' in new_content:
            # 既存のfooterスタイルブロックを探して置換
            css_pattern = r'footer\s*{[^}]*}'
            if re.search(css_pattern, new_content):
                # 既存のスタイルを保持しつつ、必要な部分のみ追加
                print(f"Note: {file_path} has existing footer CSS. Manual review recommended.")
        
        # ファイルを保存
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated: {file_path}")
        return True
        
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

def find_html_files(directory):
    """指定されたディレクトリ内のすべてのHTMLファイルを検索"""
    html_files = []
    for root, dirs, files in os.walk(directory):
        # 除外するディレクトリ
        if any(skip in root for skip in ['node_modules', '.git', 'out', 'build', 'dist']):
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
        if update_footer_in_file(file_path):
            updated_count += 1
    
    print(f"\nSummary:")
    print(f"Total files: {len(html_files)}")
    print(f"Updated: {updated_count}")
    print(f"Skipped: {len(html_files) - updated_count}")

if __name__ == "__main__":
    main()