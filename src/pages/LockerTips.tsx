import Content from "../components/LockerTipsComponents/Content"

function LockerTips() {
    return (
        <div className="flex flex-col min-h-screen pt-16 md:pt-20">
            <div
                className="hero h-52"
                style={{
                    background: `url(/thumbnail_home.avif)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-5xl font-bold text-white">Tips Loker</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Tips Loker</li>
                </ul>
            </div>

            <Content
                title="Haris Yuliyanto: Tentang Perjalanan Menjadi Filmmaker yang Sangat Personal"
            />

            <Content
                title="Ketahui 5 Persepsi yang Bisa Menghambat Kesuksesan Karir"
            />

            <Content
                title="Cara Mengetahui Keahlian Diri Untuk Mendapatkan Pekerjaan yang Cocok"
            />

            <Content
                title="Tips Membangun Debat yang Positif di Lingkungan Kerja"
            />
        </div>
    )
}

export default LockerTips