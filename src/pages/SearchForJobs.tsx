import { useState } from 'react';

// Define a type for the job object
type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
};

function SearchForJobs() {
    const jobList: Job[] = [
        {
            id: 1,
            title: 'Staff Accounting',
            company: 'PT GIFFARI UTAMA TRANSINDO',
            location: 'Bogor',
            salary: 'Rp.4 – 5 Juta',
            description: 'Kami dari PT Giffari sedang membutuhkan staff accounting yang berpengalaman. Sebagai Accounting Staff, Anda akan bertanggung jawab memeriksa dan melakukan verifikasi transaksi keuangan perusahaan, melakukan pencatatan dan dokumentasi, serta bertugas ...',
        },
        {
            id: 2,
            title: 'Host Live Streaming',
            company: 'PT SEJAHTERAH ANUGRAH HARAPAN',
            location: 'Tangerang Selatan',
            salary: 'Rp.3 – 4 Juta',
            description: 'PT SEJAHTERAH ANUGRAH HARAPAN bergerak dibidang manufaktur kecantikan membutuhkan beberapa staff Host Live Streaming yang dapat membawakan acara secara online melalui beberapa platform streaming. Dapat berinteraksi dengan penonton selama siaran ...',
        },
    ];

    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
                        <h1 className="mb-5 text-5xl font-bold text-white">Cari Lowongan Pekerjaan</h1>
                    </div>
                </div>
            </div>

            <div className="breadcrumbs text-sm flex justify-center">
                <ul>
                    <li className="text-lg"><a href="/">Beranda</a></li>
                    <li className="text-lg">Cari Lowongan Pekerjaan</li>
                </ul>
            </div>

            <div className="flex flex-col md:flex-row lg:px-80 md:px-20">
                <div className="w-full md:w-1/3 p-4">
                    {jobList.map(job => (
                        <div
                            key={job.id}
                            className="card bg-white/30 shadow-md mb-4 cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                        >
                            <div className="card-body">
                                <h2 className="card-title">{job.title}</h2>
                                <p>{job.company}</p>
                                <p>{job.location}</p>
                                <p>{job.salary}</p>
                                <p>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-2/3 p-4">
                    {selectedJob ? (
                        <div className="card bg-white/30 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title">{selectedJob.title}</h2>
                                <p>{selectedJob.company}</p>
                                <p>{selectedJob.location}</p>
                                <p>{selectedJob.salary}</p>
                                <div className="divider"></div>
                                <p>{selectedJob.description}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="card bg-white/30 shadow-md">
                            <div className="card-body justify-center items-center">
                                <h2 className="card-title">Anda belum memilih iklan lowongan kerja</h2>
                                <p>Pilih iklan di sebelah kiri untuk melihat detailnya di sini.</p>
                                <img src="/searching.png" alt="searching" className='w-[600px]' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchForJobs;
