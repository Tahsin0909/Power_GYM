'use client'

import SideSlider from "./SideSlider";
import Slider from "./Slider";


const images = ["https://img.freepik.com/free-photo/young-muscular-athlete-practicing-pull-ups-gym-with-rings_155003-35485.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/young-woman-training-gym_23-2147915519.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/woman-helping-man-gym_23-2149627102.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/side-view-young-woman-riding-exercise-bike-gym_23-2147827879.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/bodybuilder-training-arm-with-resistance-band_7502-4758.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-photo/portrait-young-sportsman-making-cardio-workout-drinking-water-gym_496169-2716.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid"]

const sideImage = ["https://img.freepik.com/free-psd/flat-design-gym-template_23-2151681702.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-psd/gym-fitness-instagram-facebook-story-template_106176-3883.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-vector/sport-poster-design-with-photo_23-2148497426.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid", "https://img.freepik.com/free-psd/gym-fitness-instagram-facebook-story-template_106176-690.jpg?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid"]



const Banner: React.FC = () => {
    return (
        <div className="relative">
            <div className=" grid grid-cols-3">
                <div className="col-span-1 h-full">
                    <SideSlider images={sideImage} />
                </div>
                <div className="col-span-2">
                    <Slider images={images} />
                </div>
            </div>

        </div>
    );
};

export default Banner;
