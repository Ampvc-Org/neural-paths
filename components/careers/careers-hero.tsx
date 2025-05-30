import React from "react";

const CareersHero = () => {
  return (
    <section className='w-full bg-[url("/images/careers/careers-hero-bg.png")] rounded-3xl bg-cover bg-center bg-no-repeat items-center justify-center flex relative'>
      <div className="w-full h-full text-[#392E26] flex flex-col gap-6 text-center py-34 relative z-10">
        <h2 className="text-2xl 2xl:text-6xl lg:text-4xl font-semibold text-[#343434]/70 mb-4 tracking-tight">
          Careers at NeuralArc
        </h2>
        <h1 className="text-7xl font-semibold tracking-tight">
          Careers at NeuralARC
        </h1>
        <p className="text-2xl font-semibold max-w-5xl mx-auto">
          We are not just building products—we are building the future of
          intelligent business. Join us in making AI accessible, useful, and
          transformative for companies of all sizes.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;
