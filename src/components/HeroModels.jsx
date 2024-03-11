import React from "react";

export default function HeroModels({ props }) {
  return (
    <div className="relative h-[400px] w-[200px] bg-black">
      <h1 className="absolute inset-0 text-white">{props}</h1>
      <img src="" alt="" />
    </div>
  );
}
