import React from "react";

export default function HeroModels({ label, ind }) {
  return (
    <div className="group relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-20 bg-black opacity-0 transition-all duration-500 ease-out group-hover:opacity-50"></div>
      <h1 className="absolute bottom-[-100px] left-[50%] z-40 translate-x-[-50%] text-white transition-all duration-500 ease-out group-hover:bottom-[50%]">
        {label}
      </h1>

      <img
        src={`/assets/heroModels/${ind}.jpeg`}
        alt=""
        className="scale-100 transition-all duration-500 ease-out group-hover:translate-y-4 group-hover:scale-150"
      />
    </div>
  );
}
