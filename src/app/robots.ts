import { MetadataRoute } from 'next';

// ドメイン直下 www.ronshoal.com/robots.txt。
// Google はここに書かれた Sitemap を自動発見する（Search Console への手動登録を代替）。
// 追加のみ・既存ページや rewrites（/pickleball 等の proxy）には非干渉。
// 認証保護ページは robots ではなく各アプリの認証で守られているため Allow: / で問題ない。
// /docs/meetings/ は顧問先向け非公開議事録(ランダムslug)。検索エンジン非掲載のため明示的にdisallow。
// /malaysia 配下の除外は /malaysia/robots.txt に書いてあるが、クローラーはドメイン直下の
// robots.txt しか読まないため、ここにも同じ指定を置く（2026-09-24 サイトレビュー）。
// 記事画像・広告バナー・掲示板画像は /malaysia/api/ 配下から配信されるので、
// そのパスだけは Allow で残す（より長い一致の規則が優先される）。
// Pickleball の子 robots.ts と同じ除外を同期する。AI検索用クローラーも * の公開許可に従う。
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: [
                '/',
                '/pickleball/api/og',
                '/malaysia/api/articles/image/',
                '/malaysia/api/advertise/banner/',
                '/malaysia/api/classifieds/image/',
            ],
            disallow: [
                '/docs/meetings/',
                '/pickleball/api/',
                '/pickleball/admin/',
                '/pickleball/mypage/',
                '/pickleball/login',
                '/pickleball/facilities/submit',
                '/pickleball/join/',
                '/pickleball/r/',
                '/malaysia/*/admin/',
                '/malaysia/*/classifieds/post',
                '/malaysia/api/',
            ],
        },
        sitemap: [
            // 2026-09-02 追加。コーポレート面7ページはどの sitemap にも載っていなかった。
            'https://www.ronshoal.com/sitemap.xml',
            'https://www.ronshoal.com/pickleball/sitemap.xml',
            'https://www.ronshoal.com/malaysia/sitemap.xml',
        ],
    };
}
