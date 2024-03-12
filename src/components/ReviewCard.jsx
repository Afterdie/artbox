import React from "react";

export default function ReviewCard({ name, location, comment }) {
  return (
    <div className="h-[400px] w-full bg-black text-white">
      <div>
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
      <p>{comment}</p>
    </div>
  );
}
