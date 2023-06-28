import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/4553024/pexels-photo-4553024.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/7527523/pexels-photo-7527523.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/3812795/pexels-photo-3812795.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/5621447/pexels-photo-5621447.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-4xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Book with us to have a vacation you'll never forget!
        </p>
        <p className="pb-6">
          Imagine a secluded paradise nestled along the pristine coastline,
          where a private beach awaits your arrival. Here, you can bask in the
          sun, indulge in uninterrupted relaxation, and relish in the tranquil
          ambiance while enjoying water sports, such as snorkeling and
          paddleboarding, or simply savoring breathtaking sunsets by the shore.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
