

function Content({ title }: { title: string }) {
    return (
        <div className="hero">
            <div className="hero-content flex flex-col lg:flex-row items-center justify-center max-w-screen-xl mx-auto px-8 my-8 md:mt-8">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    className="w-full max-w-full lg:w-52 rounded-lg mb-8 lg:mb-0 lg:mr-8" alt="Search Jobs" />
                <div className="text-center lg:text-left">
                    <a href="#" className="text-xl font-bold text-primary">{title}</a>
                    <p className="text-gray-600 py-6 text-md">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor commodi nulla nesciunt quam distinctio,
                        perferendis necessitatibus consectetur nihil dicta debitis nostrum id a rem impedit, maxime molestiae at,
                        veniam atque ad delectus sint. Possimus recusandae ullam temporibus. Repellat dolore sit odit quidem error
                        magnam assumenda nobis dignissimos ducimus in ut temporibus natus voluptate aspernatur cumque iste facere qui
                        saepe quisquam quos, eveniet sint neque quibusdam? Nulla corporis et cumque, saepe eveniet voluptatem velit
                        ullam! Corporis ullam aspernatur doloremque? Dicta soluta eveniet ratione alias quis culpa quae repudiandae,
                        itaque vitae neque quam, beatae dolorem at veritatis harum. Eius error perspiciatis voluptate?
                    </p>
                    <button className="btn btn-primary text-white">Baca Selengkapnya</button>
                </div>
            </div>
        </div>
    )
}

export default Content