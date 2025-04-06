import React from "react";

const Hero = () => {
  return (
    <div className="flex ">
      <div className="m-[15rem]">
        <div className="gap-6">
          <p className="font-bold text-2xl">
            We take care of ALL your business compliance needs
          </p>
          <h1 className="font-bold text-5xl">
            Register<span className="text-orange-600">Karo</span>
          </h1>
          <p className="text-xl">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, registrations, tax filings, and
            other legal matters.
          </p>
          <button className="bg-orange-600 rounded-md p-2">Get Started</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_model.1595b1c8.webp&w=1080&q=75"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
