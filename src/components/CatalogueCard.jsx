import React from "react";

export default function CatalogueCard({ caption, media_url }) {
  return (
    <div
      className="relative
     w-full overflow-hidden rounded-2xl"
    >
      <img
        src={media_url}
        alt=""
        className="h-full w-full transition-all duration-300 ease-out hover:scale-150"
      />
    </div>
  );
}
