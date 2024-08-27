"use client";

import React, { useState } from "react";
import Input from "./component/Input";
import WeatherDetails from "./component/WeatherDetails";
import Current from "./component/Current";
import WeekForecast from "./component/WeekForecast";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=f0ff4700a1284dd1b37150840242108&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;

  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2> Welcome to Weather App </h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p> City not found</p>
        <p>Enter a valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="flex flex-col bg-white/25 w-full h-fit">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 rounded-xl italic font-bold">
            Weather App.
          </h1>
        </div>
        {/* {data.current ? <div>{data.current.temp_f}</div> : null} */}
        {content}
      </div>
    </div>
  );
};

export default Home;
