#!/bin/bash

echo "アシスクナビをビルド中..."

cd insole-src

# 依存関係をインストール（必要な場合）
if [ ! -d "node_modules" ]; then
    echo "依存関係をインストール中..."
    npm install
fi

# ビルド
npm run build

# outディレクトリをinsoleに移動
cd ..
rm -rf insole
mv insole-src/out insole

echo "ビルド完了！"
echo "ローカルで確認: python3 -m http.server 8080"
echo "URL: http://localhost:8080/insole/"