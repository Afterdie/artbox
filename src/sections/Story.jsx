import React from "react";

export default function Story() {
  return (
    <div className="relative flex w-full justify-end bg-black p-14 md:pr-[200px]">
      <div className=" bg-white p-4 text-center">
        <div className="flex flex-col items-center justify-between gap-4 border-2 border-black p-10">
          <h1 className="font-kinetika text-2xl">Our Story</h1>
          <div className="h-[2px] w-[90%] bg-lime-300"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Fugiat
            <br /> maxime recusandae, voluptatem <br />
            suscipit vitae possimus harum modi nesciunt <br />
            rem delectus soluta quasi cupiditate <br />
            numquam libero totam doloribus dolores
            <br /> earum aperiam.
          </p>
        </div>
      </div>
    </div>
  );
}
