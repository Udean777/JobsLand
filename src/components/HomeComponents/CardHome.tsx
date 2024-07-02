function CardHome({ title, desc, image }: {
    title: string,
    desc: string,
    image: string,
}) {
    return (
        <div className="card bg-white/10 w-full md:w-96 shadow-md">
            <figure>
                <img width="100" height="100" src={image} alt="Lokasi Populer" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{desc}</p>
                <div className="card-actions">
                    <button className="btn btn-primary w-full text-white">Lihat Semua</button>
                </div>
            </div>
        </div>
    );
}

export default CardHome;
