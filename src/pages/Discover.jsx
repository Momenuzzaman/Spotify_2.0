import React from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between
        items-center sm:Flex-row flex-col mt-4 mb-10"
      >
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sn:mt-0 mt-5">
          {genres.map((genre) => (
            <option key={genre.id} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Discover;
