import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("https://fake-coffee-api.vercel.app/api").then((response) => {
        setData(response.data);
      });
    };
    getData();
  }, []);

  return (
    <div className="w-full h-auto bg-black text-white flex flex-wrap justify-evenly nerko-one-regular">
      {data.map((el, i) => {
        return (
          <div key={i} className="mainbox w-[30%] h-[450px] rounded-[5px] flex flex-col justify-center items-center my-[30px]">
            <div className="w-[200px] h-[200px]">
              <img className="w-full h-full" src={el.image_url} alt="" />
            </div>
            <div className="w-full flex flex-col items-center px-[50px]">
                <h5>Name : {el.name}</h5>
                <h6>Weight : {el.weight}</h6>
                <h6>Price : {el.price} $</h6>
                <h6>Region : {el.region}</h6>

                <button className="w-[80%] h-[40px] border mt-[20px] rounded-[10px] text-[15px] hover:bg-[#009dffbb]">Add +</button>
            </div>
           
            
          </div>
        );
      })}
    </div>
  );
}
