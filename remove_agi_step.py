#!/usr/bin/env python3
import os
import re

def remove_agi_step_from_html(file_path):
    """Remove AGI Step service link from HTML file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Pattern to match AGI Step link
        pattern = r'<a href="/services/agi-step\.html">AGIステップ</a>\s*'
        
        # Check if pattern exists
        if re.search(pattern, content):
            # Remove the AGI Step link
            new_content = re.sub(pattern, '', content)
            
            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def process_directory(root_dir):
    """Process all HTML files in directory and subdirectories"""
    updated_files = []
    skipped_files = []
    
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Skip node_modules and hidden directories
        dirnames[:] = [d for d in dirnames if not d.startswith('.') and d != 'node_modules']
        
        for filename in filenames:
            if filename.endswith('.html'):
                file_path = os.path.join(dirpath, filename)
                if remove_agi_step_from_html(file_path):
                    updated_files.append(file_path)
                else:
                    skipped_files.append(file_path)
    
    return updated_files, skipped_files

def main():
    root_dir = '/Users/sejimakazuki/Documents/Obsidian Vault/web_sites/ronshoal-website'
    
    print("Removing AGI Step service from all footers...")
    print("=" * 50)
    
    updated_files, skipped_files = process_directory(root_dir)
    
    print(f"\nUpdated {len(updated_files)} files:")
    for f in sorted(updated_files):
        print(f"  ✓ {os.path.relpath(f, root_dir)}")
    
    print(f"\nSkipped {len(skipped_files)} files (no AGI Step link found)")
    
    print("\nDone!")

if __name__ == "__main__":
    main()