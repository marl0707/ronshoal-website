import { MetadataRoute } from 'next';

// ドメイン直下 www.ronshoal.com/sitemap.xml。
//
// 2026-09-02 追加。それまで **ルートに sitemap.xml が無く 404** だった。
// robots.ts はサブアプリ（/pickleball・/malaysia）の sitemap しか指しておらず、
// コーポレート面7ページはサイトマップのどこにも載っていなかった。
// AdSense の審査対象は `ronshoal.com` ドメインなので、審査側が最初に見る面が
// クロール導線を持っていない状態だった。
//
// サブアプリは各自の sitemap を持つ（rewrites で別プロジェクトへプロキシしている）ので
// ここには入れない。robots.ts の sitemap 配列がそれらを指している。
const BASE = 'https://www.ronshoal.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1.0 },
        { url: `${BASE}/secret`, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/ai-team`, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE}/services/kenshin-plus`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services/ai-burger`, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/contact`, changeFrequency: 'yearly', priority: 0.6 },
        { url: `${BASE}/operator`, changeFrequency: 'yearly', priority: 0.5 },
        { url: `${BASE}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    ];
}
