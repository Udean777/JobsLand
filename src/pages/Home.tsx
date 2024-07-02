import CardHome from '../components/HomeComponents/CardHome'
import Hero from '../components/HomeComponents/HeroHome'
import SearchJobsHome from '../components/HomeComponents/SearchJobsHome'
import CompanyHome from '../components/HomeComponents/CompanyHome'

function Home() {
    return (
        <div className="flex flex-col min-h-screen pt-16 md:pt-20">
            <Hero />

            <div className="flex flex-col items-center my-8">
                <span className="text-2xl font-bold text-gray-500 mb-8">Jelajahi Peluang Kerja</span>
                <div className="flex flex-col gap-5 md:flex-row md:gap-5">
                    <CardHome
                        title="Lokasi Populer"
                        desc="Jakarta, Bandung, Surabaya, Semarang, Tangerang, Bekasi, Bogor, Bali, Jogja, Medan"
                        image="https://img.icons8.com/ios/100/marker--v1.png"
                    />

                    <CardHome
                        title="Kategori Populer"
                        desc="Administrasi, Akuntansi, Sales / Penjualan, Human Resources, Teknik, Konstruksi, IT, Marketing / Pemasaran"
                        image="https://img.icons8.com/ios/100/diversity.png"
                    />

                    <CardHome
                        title="Tipe Pekerjaan"
                        desc="Fresh Graduate, Freelance, Magang, Supervisor, Manager, Sarjana, Diploma, SMA / SMK / STM"
                        image="https://img.icons8.com/ios/100/networking-manager.png"
                    />
                </div>
            </div>

            <SearchJobsHome />

            <CompanyHome />

            <div className="flex flex-col items-center my-8">
                <span className="text-2xl font-bold text-primary mb-8">Lowongan Premium</span>
                <div className="flex flex-col gap-5 md:flex-row md:gap-5">
                    <div className="card bg-white/10 w-96 shadow-md">
                        <div className="card-body">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="card-title">Company Name</h2>
                                    <p>PT Company Name</p>
                                </div>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti provident
                                aperiam doloremque unde ullam, accusamus officiis magni fugit aut placeat.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-full text-white">Lihat Semua</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-white/10 w-96 shadow-md">
                        <div className="card-body">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="card-title">Company Name</h2>
                                    <p>PT Company Name</p>
                                </div>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti provident
                                aperiam doloremque unde ullam, accusamus officiis magni fugit aut placeat.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-full text-white">Lihat Semua</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-white/10 w-96 shadow-md">
                        <div className="card-body">
                            <div className="flex flex-row gap-3 items-center">
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="card-title">Company Name</h2>
                                    <p>PT Company Name</p>
                                </div>
                            </div>
                            <p className="my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti provident
                                aperiam doloremque unde ullam, accusamus officiis magni fugit aut placeat.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-full text-white">Lihat Semua</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home