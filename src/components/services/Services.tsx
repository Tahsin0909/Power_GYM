'use client'

import ServicesSlider from "./ServicesSlider";







const Services = () => {
    return (
        <div className="lg:mt-72 md:mt-20 mt-10">
            <div className="body_padding bg-primary ">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                    <div className="space-y-4 lg:py-10 md:py-6 py-4">
                        <div className="space-y-4 lg:py-10 md:py-6 py-4 text-white">
                            <p className="lg:text-3xl md:text-2xl text-lg font-semibold ">Our Gym Services</p>
                            <p className="">At powerGYM, we offer a comprehensive range of fitness services to support your health goals. Our personal training program provides customized workout plans with expert guidance, while our group fitness classes—such as Yoga, Zumba, and HIIT—offer a fun and motivating environment for all skill levels..</p>
                        </div>

                    </div>
                    <div className="lg:col-span-2">
                        <div className="relative lg:-translate-y-48">
                            <ServicesSlider />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;