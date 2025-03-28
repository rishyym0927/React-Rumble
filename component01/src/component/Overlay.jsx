import React, { useState } from "react";

const Overlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className=" bg-grey-200">
        <div className="flex flex-col items-center justify-center h-screen">
      <button onClick={openModal} className="">Click to Read More</button>
        </div>

      {isOpen && (
        <div className="flex flex-col items-center justify-center fixed inset-0 bg-red-100 bg-opacity-50 z-50">
          <div className="border-2 border-gray-300  bg-black rounded-lg shadow-lg p-6 w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Wisper of wind</h2>
              <button
                className="text-gray-500 hover:text-white-700"
                onClick={closeModal}>
                X
              </button>
            </div>
            <p className="mb-4">
              The wind whispers soft and low, Telling tales of long ago. Through
              the trees it gently sways, Carrying stories of the days. It sings
              of dreams that once took flight, Of stars that shimmered through
              the night. It calls to us with voices clear, A melody that we hold
              dear. So listen closely, feel the breeze, It holds the secrets of
              the seas. A fleeting moment, wild and free, The wind’s soft song,
              a mystery..
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
