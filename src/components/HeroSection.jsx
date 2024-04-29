import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-12 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl text-gray-800 font-bold mb-2">
          Solutions built for your Business & Use Cases
        </h1>
        <p className="text-gray-600 mb-8">
          Our AI Platform helps businesses scale up marketing content like
          blogs, social media posts, Ad Copies, emails, and more.
        </p>
        <button className="bg-blue-600 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
          Get Started for FREE
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
