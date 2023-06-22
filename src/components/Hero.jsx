import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        className="w-full  h-full object-cover"
        src="https://images.unsplash.com/photo-1505633738715-ebaa78bf4dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
      <div className="max-w-[1140px] mx-auto">
        <div className="absolute top-[50%] w-full max-w-[600px] flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl md:text-5xl">
            Find Your speacial trip
          </h1>
          <h2 className="text-4xl py-4 italic">With WeekWay</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            consequuntur similique veniam placeat aliquid quisquam expedita
            eligendi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
