import React from "react";

const Section11 = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative bg-black "
      style={{
        backgroundImage:
          "url(/WhatsApp%20Image%202024-12-13%20at%2010.00.15%20AM%20(1).jpeg)",
      }}
    >
      <div>
        {/* <div className="overflow-hidden ">
          <video autoPlay loop muted className="absolute top-0 right-0 w-1/2 h-full object-cover object-top" src="/file (1).mp4"></video>
        </div> */}
        <div>
          <img
            className="w-1/2 h-full absolute left-0 img2 object-fill"
            src="/reach.avif"
            alt="reach"
          />
        </div>
      </div>
    </div>
  );
};

export default Section11;