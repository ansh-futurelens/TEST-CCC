import React, { useState } from "react";

const AdvantageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-screen select-none bg-[#F0F0F0]">
      <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 2xl:grid-cols-12 items-center gap-20 2xl:flex-row-reverse">

          <div className="2xl:col-span-8 xl:col-span-8 lg:col-span-8 flex flex-col justify-center text-left 2xl:order-2">
            <h2 className="font-sans font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] text-start">
              The Mind Skills Advantage
            </h2>

            <h6 className="mt-6 text-gray-800 2xl:text-[25px] xl:text-[20px] lg:text-[18px] max-w-5xl">
              Unlock your mind's full potential and gain a competitive edge in
              navigating tomorrow’s challenging environment. Find out how Mind
              Skills can transform your professional trajectory!
            </h6>

            <div className="mt-15">
              <button
                onClick={handleOpenModal}
                className="inline-block py-5 px-7 bg-[#279C97] hover:bg-[#4BC7C1] font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out"
              >
                Download PDF
              </button>
            </div>
          </div>


          <div className="2xl:col-span-4 xl:col-span-4 lg:col-span-4 flex justify-start xl:justify-start 2xl:justify-center 2xl:order-1">
            <img
              src="/media/team/EBook.png"
              alt="Section Visual"
              className="w-[90%] h-auto sm:w-[60%] lg:w-[80%] xl:w-[60%] 2xl:w-[70%] object-contain"
            />
          </div>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 flex items-center justify-center p-4">
          <div
            className="relative rounded-4xl max-w-6xl w-full mx-auto my-10 shadow-2xl overflow-visible transform transition-all duration-300"
            style={{
              backgroundImage: "url('/media/team/download_bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-3 bg-[#02514B] text-white rounded-full flex items-center justify-center transition duration-200"
            >
              ✕
            </button>

            <div className="backdrop-blur-md rounded-4xl p-6 sm:p-10 md:p-12 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <div className="flex justify-center">
                  <img
                    src="/media/team/image.png"
                    alt="Form Visual"
                    className="w-100 h-auto object-contain rounded-xl"
                  />
                </div>

                <div>
                  <div className="mb-10">
                    <h2 className="text-4xl font-bold text-white ">
                      Download The Mind Skills Advantage eBook
                    </h2>
                    <h3 className="text-white mt-6  text-lg">
                      Fill out your name and email address below.
                    </h3>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-2xl text-lg text-white placeholder-white bg-[#024E48] focus:outline-none hover:bg-[#02514B] h-[64px] transition duration-200"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-2xl text-lg text-white placeholder-white bg-[#024E48] focus:outline-none hover:bg-[#02514B] h-[64px] transition duration-200"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-2xl text-lg text-white placeholder-white bg-[#024E48] focus:outline-none hover:bg-[#02514B] h-[64px] transition duration-200 md:col-span-2"
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-2xl text-lg text-white placeholder-white bg-[#024E48] focus:outline-none hover:bg-[#02514B] h-[64px] transition duration-200 md:col-span-2"
                      />
                    </div>



                    <div className="w-full flex justify-center pt-6">
                      <button
                        type="submit"
                        className="py-3 px-6 bg-[#71604D] font-medium text-lg text-[#C7C2BB] rounded-full transition duration-300 ease-in-out"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvantageSection;
