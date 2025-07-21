export interface PriceProps {
    plan: string;
    plan_id: number;
    account_balance: number;
    product_type: string;
    product_type_id: number;
    platform: string;
    platform_id: number;
    price: string;
    link_register: string;
}


// i have an object json of language base on english, and i want to translate to indonesia, japanese and Chinese (Simplified), but sometime the language have tag html. i want you translate that without remove tag html.

// here is the example,
// english
// "title": "Where do I track the progress of my account?",
//             "description": [
//                 "<p>Upon purchasing an Assessment, you will receive access to a trader dashboard where you can monitor your Assessment and Funded Accounts. The dashboard is updated every time we calculate metrics, which occurs roughly every 60 seconds. It is your responsibility to monitor your breach levels.</p>"
//             ]

// translate result of indonesia
// "title": "Dimana saya bisa melacak perkembangan akun saya?",
//             "description": [
//                 "<p>Setelah membeli Assessment, Anda akan mendapatkan akses ke dashboard trader di mana Anda dapat memantau Assessment dan Akun yang Didanai Anda. Dashboard ini diperbarui setiap kali kami menghitung metrik, yang dilakukan kira-kira setiap 60 detik. Anda bertanggung jawab untuk memantau level pelanggaran Anda.</p>"
//             ]

// translate result of japan
// "title": "自分のアカウントの進捗はどこで確認できますか？",
//             "description": [
//                 "<p>アセスメントを購入すると、アセスメントおよびファンド付きアカウントの進捗を確認できるトレーダーダッシュボードにアクセスできるようになります。ダッシュボードは約60秒ごとにメトリクスの計算が行われるたびに更新されます。違反レベルの管理はご自身の責任となります。</p>"
//             ]

// translate result of Chinese (Simplified)
// "title": "我在哪里可以查看我的账户进度？",
//             "description": [
//                 "<p>购买评估后，您将获得访问交易员仪表板的权限，可以在其中监控您的评估进度和实盘账户。该仪表板在我们每次计算指标时更新，大约每60秒更新一次。您有责任自行监控违规水平。</p>"
//             ]