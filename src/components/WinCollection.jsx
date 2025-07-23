import React from "react";

function WinCollection() {
  return (
    <section className="container mx-auto max-w-[96.5%] my-[100px] p-2 h-auto">
      <span className="text-[24px] font-[500] text-[#B4A596]">
        So Win Collection
      </span>
      <div className="w-full px-2 mt-[10px]">
        <div className="w-full h-[600px] bg-[rgba(0,0,0,0.5)] relative p-6">
          <div className="absolute bottom-[25px] left-[20px] md:bottom-[35px] md:left-[30px]">
            <a
              href="#"
              className="py-[10px] px-5 min-w-[60px] bg-white rounded-full text-black mt-6 font-[550] text-[16px]"
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WinCollection;