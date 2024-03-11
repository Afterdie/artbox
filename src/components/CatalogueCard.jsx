import React from "react";

export default function CatalogueCard({ caption, media_url }) {
  return (
    <div className="relative h-[500px] w-[200px] bg-black">
      <h1 className="absolute">{caption}</h1>
      <img src={media_url} alt="" className="object-cover" />
    </div>
  );
}
