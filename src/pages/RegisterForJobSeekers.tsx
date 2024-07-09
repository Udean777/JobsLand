import React, { useState } from 'react';

function RegisterForJobSeekers() {
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
                        <h1 className="mb-5 text-5xl font-bold text-white">Register for Job Seekers</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center mt-4">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Register for Job Seekers</li>
                </ul>
            </div>

            <div className="flex justify-center mt-8">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4">Daftar sebagai Pencari Kerja</h2>
                    <h3 className="text-lg font-semibold mb-2">Login Information</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password <span className="text-red-500">*</span></label>
                            <input type={showPassword ? "text" : "password"} className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password Verify <span className="text-red-500">*</span></label>
                            <input type={showPassword ? "text" : "password"} className="w-full px-3 py-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label className="inline-flex items-center">
                                <input type="checkbox" className="form-checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                                <span className="ml-2">Show Password</span>
                            </label>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">REGISTER</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForJobSeekers;
