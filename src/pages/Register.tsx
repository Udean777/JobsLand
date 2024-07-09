import React from 'react';

function Register() {
    return (
        <div className="flex flex-col min-h-screen pt-16 md:pt-20">
            <div
                className="hero h-52"
                style={{
                    background: `url(/thumbnail_home.avif)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md mx-auto">
                        <h1 className="mb-5 text-5xl font-bold text-white">Register</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center mt-4">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Register</li>
                </ul>
            </div>

            <div className="flex flex-col md:flex-row flex-grow">
                <div
                    className="flex-1 flex items-center justify-center"
                    style={{
                        background: `url(/path-to-image1.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="bg-primary bg-opacity-75 p-8 text-center text-white">
                        <h2 className="text-2xl md:text-4xl font-bold">TEMUKAN PEKERJAAN IMPIANMU</h2>
                        <p className="mb-4">Buat resume online Gratis untuk peroleh peluang kerja lebih baik.</p>
                        <a href='/register-for-job-seekers' className="my-6 bg-white text-gray-800 px-4 py-2 rounded">REGISTRASI PENCARI KERJA</a>
                    </div>
                </div>
                <div
                    className="flex-1 flex items-center justify-center"
                    style={{
                        background: `url(/path-to-image2.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="bg-secondary bg-opacity-75 p-8 text-center text-white">
                        <h2 className="text-2xl md:text-4xl font-bold">TEMUKAN KANDIDAT POTENSIAL</h2>
                        <p className="mb-4">Pasang iklan lowongan agar terhubung dengan pencari kerja yang paling potensial.</p>
                        <a href='/register-for-company' className="my-6 bg-white text-gray-800 px-4 py-2 rounded">REGISTRASI PERUSAHAAN</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
