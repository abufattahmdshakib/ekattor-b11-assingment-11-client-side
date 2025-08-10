import CountUp from "react-countup";


const stats = [
    {
        title: "Community Impact",
        image: "https://i.ibb.co.com/PGHMvY3K/istockphoto-693322828-612x612.jpg",
        count: 1280,
        suffix: " + "
    },
    {
        title: "Successful Events",
        image: "https://i.ibb.co.com/6JVdxrYN/download-3.jpg",
        count: 845,
        suffix: " + "
    },
    {
        title: "Volunteer Participation",
        image: "https://i.ibb.co.com/hxNGgK0d/tree-plantation-vbd-1200x900-1725881468-b0q-LQIg3b.webp",
        count: 24500,
        suffix: " + "
    },
    {
        title: " Happy Beneficiaries",
        image: "https://i.ibb.co.com/hxWQ72kM/images-9.jpg",
        count: 390,
        suffix: " + "
    },
];


export default function ExtraSectionsTow() {
    return (

        <div className="px-2 bg-green-100 lg:p-5">
            {/* Section Header */}
            <div className="text-center  mb-12 rounded-xl lg:w-6/12 mx-auto py-2  mt-6">
                <h2 className="text-2xl font-bold text-green-800">Impressive Community Reviews</h2>
                <p className="text-black text-xl mt-2">See how our initiatives are positively impacting lives through glowing reviews and feedback.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4  mb-12 lg:container lg:mx-auto">
                {stats.map((stat, index) => (

                    <div
                        key={index}
                        className=" rounded-2xl w-60 mx-auto bg-green-700 shadow-md flex items-center gap-4">
                        <div>
                            <div className="w-full object-fill p-2">
                                <img className="rounded-lg" src={stat.image} alt="" />
                            </div>
                            <div className="text-2xl text-white my-2 text-center font-bold">
                                <CountUp
                                    end={stat.count}
                                    duration={5}
                                    separator=","
                                    suffix={stat.suffix || " "}
                                    enableScrollSpy
                                    scrollSpyDelay={300}
                                />
                            </div>
                            <div className="text-white text-center mb-4 font-medium text-xl">{stat.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}