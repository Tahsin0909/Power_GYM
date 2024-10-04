/* eslint-disable @next/next/no-img-element */
'use client'
const WhyChooseUs = () => {

    interface Feature {
        title: string;
        subtitle: string;
        imgSrc: string;
    }

    const features: Feature[] = [
        {
            title: "Personalized Training Programs",
            subtitle: "Get access to custom workout plans tailored to your fitness goals and experience level.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/2548/2548440.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid",
        },
        {
            title: "State-of-the-Art Equipment",
            subtitle: "Train with the latest equipment designed to maximize your performance and minimize injury.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/7678/7678724.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid",
        },
        {
            title: "Expert Trainers",
            subtitle: "Work with certified trainers who will guide and motivate you to reach your peak fitness potential.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/384/384226.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid",
        },
        {
            title: "Community Support",
            subtitle: "Join a thriving fitness community that keeps you motivated and accountable to your goals.",
            imgSrc: "https://cdn-icons-png.freepik.com/256/3475/3475847.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid",
        },
    ];



    return (
        <div className="lg:my-28 md:my-16 my-10 lg:flex justify-between items-center body_padding">
            {/* title and subtitle  */}
            <div className="lg:space-y-4 space-y-2">
                <p className="lg:text-3xl md:text-2xl text-lg lg:text-start text-center  text-primary">Why Choose Us</p>
                <p className="lg:text-lg lg:text-start text-center text-[#2F4F4F] group">
                    Discover what sets <span className="font-bold">power<span className="text-primary group-hover:text-secondary">GYM</span></span> apart from the rest</p>
            </div>
            {/* reason of why vchoose us  */}
            <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-10 w-fit mx-auto lg:mx-0 mt-10 lg:mt-0">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="lg:w-[25vw] w-[300px]  lg:h-[30vh] p-4 lg:p-8 rounded-lg space-y-2 shadow-md hover:scale-110 transition-all"
                    >
                        <img className="w-10 h-10" src={feature.imgSrc} alt={feature.title} />
                        <p className="lg:text-lg font-bold">{feature.title}</p>
                        <p>{feature.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
