"use client"
import Image from "next/image";
import Body from "./Body";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setList(data);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, []);

  if (list.length === 0) {
    console.log("loading");
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="flex justify-center">
        <div className="flex flex-col m-3 space-y-2 lg:w-[70%]">
          {list.map((item) => (
            <Body item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
