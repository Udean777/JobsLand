import React, { useState } from 'react';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                        <h1 className="mb-5 text-5xl font-bold text-white">Login</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center mt-4">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Login</li>
                </ul>
            </div>

            <div className="flex justify-center items-center">
                <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
                    <div className="flex">
                        <div className="w-full md:w-1/2 border-r pr-8">
                            <h2 className="text-xl font-semibold mb-4">Masuk Ke JobsLand</h2>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">
                                    Alamat Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border rounded px-3 py-2 mt-1"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700">
                                    Kata Sandi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full border rounded px-3 py-2 mt-1"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="checkbox"
                                    id="show-password"
                                    className="mr-2"
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                <label htmlFor="show-password" className="text-gray-700">
                                    Tampilkan Kata Sandi
                                </label>
                            </div>
                            <div className="mb-4">
                                <a href="#" className="text-blue-500 hover:underline">
                                    Lupa kata sandi? Klik disini!
                                </a>
                            </div>
                            <button className="btn btn-primary text-white">
                                LOGIN
                            </button>
                        </div>

                        <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
                            <h2 className="text-xl font-semibold mb-4">Pengguna Baru</h2>
                            <p className="mb-4">
                                Jika Anda belum memiliki akun, silakan mendaftar terlebih dahulu sebagai Pencari Kerja atau Perusahaan.
                            </p>
                            <a href='/register' className="btn btn-primary text-white">
                                BUAT AKUN BARU
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
