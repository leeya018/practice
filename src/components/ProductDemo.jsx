import React from "react";

const ProductDemo = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 flex items-center flex-wrap">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">Product Demo</h2>
          <p className="text-gray-600 mb-8">
            Take a look at our platform and see how easy it is to create your
            content.
          </p>
          {/* Imagine this is an iframe or image representing the demo */}
          <div className="mb-8">
            {/* Placeholder for an image or a video */}
            <div className="w-full h-64 bg-blue-300  rounded-lg shadow-md bg-center  object-cover bg-no-repeat bg-hero"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
