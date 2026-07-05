import { MetadataRoute } from 'next';

// ドメイン直下 www.ronshoal.com/robots.txt。
// Google はここに書かれた Sitemap を自動発見する（Search Console への手動登録を代替）。
// 追加のみ・既存ページや rewrites（/pickleball 等の proxy）には非干渉。
// 認証保護ページは robots ではなく各アプリの認証で守られているため Allow: / で問題ない。
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: [
            'https://www.ronshoal.com/pickleball/sitemap.xml',
            'https://www.ronshoal.com/malaysia/sitemap.xml',
        ],
    };
}
