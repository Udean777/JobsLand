function Navbar() {
    return (
        <div className="navbar bg-gray-100 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a style={{ fontSize: 18 }} href="/">Beranda</a></li>
                        <li><a style={{ fontSize: 18 }} href="/pasang-lowongan-pekerjaan">Pasang Lowongan Kerja</a></li>
                        <li><a style={{ fontSize: 18 }} href="/cari-pekerjaan">Cari Lowongan Kerja</a></li>
                        <li><a style={{ fontSize: 18 }} href="/tips-loker">Tips Loker</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold" href="#home"><span className="text-blue-300">Jobs</span>Land</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 items-center">
                    <li><a style={{ fontSize: 18 }} href="/">Beranda</a></li>
                    <li><a style={{ fontSize: 18 }} href="/pasang-lowongan-pekerjaan">Pasang Lowongan Kerja</a></li>
                    <li><a style={{ fontSize: 18 }} href="/cari-pekerjaan">Cari Lowongan Kerja</a></li>
                    <li><a style={{ fontSize: 18 }} href="/tips-loker">Tips Loker</a></li>
                    <div className="menu-horizontal gap-3">
                        <li><a href="/login" className="btn btn-primary text-white w-20">Login</a></li>
                        <li><a href="/register" className="btn btn-secondary text-white w-20">Register</a></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
