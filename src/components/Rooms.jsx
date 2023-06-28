import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Our rooms offer a captivating view of the endless waves caressing the
          shore, creating a soothing ambiance that lulls you into a peaceful
          slumber each night.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1611444756156-bbe40e0a2e56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b2NlYW4lMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1501117716987-c8c394bb29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlYW4lMjB2aWV3fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
