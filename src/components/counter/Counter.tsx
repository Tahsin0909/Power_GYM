/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className=" lg:my-40 md:my-20 my-10 lg:p-8 rounded-lg">
            {/* recepies count */}
            <div className=" flex flex-col md:flex-row gap-4 md:gap-0 justify-evenly items-center">
                <div className=" p-4 lg:w-[15vw] lg:h-[20vh] md:w-[25vw] text-nowrap w-[60vw] flex flex-col justify-center items-center shadow-2xl rounded-md bg-primary hover:bg-secondary">
                    <img className="w-10 h-10" src="https://i.ibb.co/bFmyPjf/team.png" alt="" />
                    <CountUp
                        enableScrollSpy={true}
                        duration={20}
                        end={100} className="text-white text-4xl font-bold" />
                    <p className="lg:text-2xl text-lg text-white">Total User</p>
                </div>
                <div className=" p-4 lg:w-[15vw] lg:h-[20vh] md:w-[25vw] text-nowrap w-[60vw] flex flex-col justify-center items-center shadow-2xl rounded-md bg-primary hover:bg-secondary">
                    <img className="w-10 h-10" src="https://cdn-icons-png.freepik.com/256/13293/13293639.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" alt="" />
                    <CountUp
                        enableScrollSpy={true}
                        duration={20}
                        end={100} className="text-white text-4xl font-bold" />
                    <p className="lg:text-2xl text-lg text-white">Class Scheduled</p>
                </div>
                <div className=" p-4 lg:w-[15vw] lg:h-[20vh] md:w-[25vw] text-nowrap w-[60vw] flex flex-col justify-center items-center shadow-2xl rounded-md bg-primary hover:bg-secondary">
                    <img className="w-10 h-10" src="https://cdn-icons-png.freepik.com/256/2548/2548440.png?ga=GA1.1.1880465971.1727625643&semt=ais_hybrid" alt="" />
                    <CountUp
                        enableScrollSpy={true}
                        duration={20}
                        end={100} className="text-white text-4xl font-bold" />
                    <p className="lg:text-2xl text-lg text-white">Total Trainer</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;