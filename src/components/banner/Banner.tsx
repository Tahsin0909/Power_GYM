'use client'

import Slider from "./Slider";


const images = ["https://img.freepik.com/free-photo/young-muscular-athlete-practicing-pull-ups-gym-with-rings_155003-35485.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/young-woman-training-gym_23-2147915519.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627102.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/side-view-young-woman-riding-exercise-bike-gym_23-2147827879.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid"]
const Banner = () => {
    return (
        <div className="body-padding">
            <div className="">
                <Slider images={images} />
            </div>

        </div>
    );
};

export default Banner;
