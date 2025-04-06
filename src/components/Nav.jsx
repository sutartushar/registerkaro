import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center m-2  bg-slate-200">
      <div className="flex">
        <img
          src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.77348f99.png&w=96&q=75"
          alt="logo"
          className="h-15 items-center"
        />
        <h1 className="text-3xl mt-2 font-semibold ">
          Register<span className="text-orange-600">Karo</span>
        </h1>
      </div>

      <div className="flex mr-6 gap-4">
        <ul className="flex text-xl gap-4">
          <li><a href="#">Home</a></li>
          <li>
            <select name="startup" id="">
              <option value="Startup">Startup</option>
            </select>
          </li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <button className="text-xl bg-orange-600 text-white rounded-full ">+918447746183</button>
      </div>
    </div>
  );
};

export default Nav;
