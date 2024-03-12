import React, { useEffect, useState, useRef } from "react";
import CatalogueCard from "../components/CatalogueCard";

export default function Catalogue() {
  const url = `https://graph.instagram.com/me/media?fields=caption,media_url,permalink&access_token=${import.meta.env.VITE_IG_TOKEN}`;

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(url);
      const jRes = await res.json();
      setPosts(jRes.data);
    };
    fetchPosts();
  }, []);

  const button = useRef(null);
  const [visible, setVisible] = useState(false);
  const showMore = () => {
    setVisible(true);
  };
  return (
    <div className="relative m-auto mt-[82px] flex max-w-[1100px] flex-col items-center justify-normal gap-8">
      <div className="grid-row-2 grid grid-cols-4 gap-4">
        {posts.splice(0, visible ? posts.length : 4).map((item, index) => {
          if (item.caption?.substring(0, 2) == "👗") {
            return <CatalogueCard {...item} key={index} />;
          }
        })}
      </div>
      <button
        className={`border-2 border-black bg-transparent p-4 text-black ${visible ? "hidden" : ""}`}
        onClick={showMore}
        ref={button}
      >
        Show More
      </button>
    </div>
  );
}
