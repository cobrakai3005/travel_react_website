import React from "react";

function Activities() {
  return (
    <div className="max-w-[1140px] mx-auto md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-2xl font-bold text-white">
          Resortts
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 shadow-lg"
          src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-2xl font-bold text-white">
          Cruise
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 shadow-lg"
          src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-2xl font-bold text-white">
          Activities
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 shadow-lg"
          src="https://images.unsplash.com/photo-1496161341410-90ce6ad8b390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Activities;
