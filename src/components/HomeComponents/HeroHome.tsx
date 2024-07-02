
function Hero() {
    return (
        <div
            className="hero h-[500px]"
            style={{
                background: `url(/thumbnail_home.avif)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md mx-auto">
                    <h1 className="mb-5 text-5xl font-bold text-white">Cari Lowongan Kerja</h1>
                    <p className="mb-5 font-semibold text-white">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Cari Posisi atau Perusahaan"
                            className="input input-bordered w-full md:w-72 bg-white text-black"
                        />
                        <select className="select select-bordered w-40 max-w-xs bg-white text-black">
                            <option selected>Semua Lokasi</option>
                            <option>Banda Aceh</option>
                            <option>Medan</option>
                            <option>Jakarta</option>
                            <option>Riau</option>
                        </select>
                        <button className="btn btn-primary text-white w-full md:w-auto">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
