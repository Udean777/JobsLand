import SearchJobsHome from "../components/HomeComponents/SearchJobsHome"

function Vacancy() {
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
                        <h1 className="mb-5 text-5xl font-bold text-white">Pasang Lowongan Kerja</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Pasang Lowongan Kerja</li>
                </ul>
            </div>

            <SearchJobsHome />

            <div className="px-4 md:px-20 lg:px-48 text-center pb-8">
                <p className="text-base md:text-lg">
                    Layanan pasang iklan lowongan kerja gratis, silahkan isi form dibawah dan pastikan informasi sudah benar untuk memudahkan pencari lowongan pekerjaan. Anda tidak memiliki hak akses untuk memasang iklan lowongan kerja. Silahkan Login ke akun anda atau jika anda belum memiliki akun, silakan registrasi terlebih dahulu.
                </p>

                <div className="flex flex-col md:flex-row gap-5 justify-center mt-5">
                    <button className="btn btn-primary text-white w-full md:w-80">Login</button>
                    <button className="btn btn-secondary text-white w-full md:w-80">Register</button>
                </div>
            </div>
        </div>
    )
}

export default Vacancy
