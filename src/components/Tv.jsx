import React from 'react'

const Tv = () => {
  return (
    <div className="flex relative w-1/2 h-[470px] justify-center items-center">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-2/3 h-[400px] object-cover object-center rounded-lg"
      src="/WhatsApp Video 2024-12-13 at 10.00.23 AM.mp4"
    ></video>
    <img
      className="absolute h-[450px] w-full"
      src="/empty.avif"
      alt="overlay"
    />
  </div>
  )
}

export default Tv
