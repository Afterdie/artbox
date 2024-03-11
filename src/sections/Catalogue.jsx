import React, { useEffect, useState } from "react";
import CatalogueCard from "../components/CatalogueCard";

export default function Catalogue() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${import.meta.env.VITE_IG_TOKEN}`;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(url);
      const jRes = await res.json();
      setPosts(jRes.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="relative m-auto mt-[82px] max-w-[1100px] p-12">
      <div className="flex items-center justify-between">
        {console.log(posts)}
        {/* {posts.slice(0, 3).map((item, index) => {
          return <CatalogueCard {...item} key={index} />;
        })} */}
        <CatalogueCard {...posts[0]} />
      </div>
    </div>
  );
}
