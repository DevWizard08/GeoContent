import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold">
              ORBIT THE EARTH
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
            Orbiting the Earth refers to the motion of an object, typically a satellite or spacecraft, around our planet in a curved path due to the gravitational pull of Earth. This motion is a delicate balance between the object's forward velocity and the gravitational force pulling it toward Earth. Objects in orbit essentially fall toward Earth but continuously miss it due to their lateral velocity.

Satellites in orbit serve various purposes, such as communication, weather monitoring, Earth observation, and scientific research. Achieving and maintaining a stable orbit requires precise calculations and engineering, taking into account factors like altitude, orbital inclination, and orbital velocity.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
            >
              
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;
