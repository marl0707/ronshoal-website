#!/bin/bash

# 静的エクスポート設定を一時的に有効化
cat > next.config.tmp.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
EOF

# 設定ファイルを入れ替え
mv next.config.ts next.config.backup.ts
mv next.config.tmp.ts next.config.ts

# ビルド実行
npm run build

# 設定を元に戻す
mv next.config.backup.ts next.config.ts

# 静的ファイルを開く
open out/index.html