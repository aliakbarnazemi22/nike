import React from "react";

function HeroSection() {
  return (
    <section className="w-full h-auto">
      <a href="#">
        <img
          src="images/HeroSection/image.jpg"
          className="lg:h-auto h-[500px] object-cover"
        />
      </a>

      <div className="mt-2 text-center flex flex-col gap-0 items-center">
        <p className="text-[40px] md:text-[90px] font-bold text-[#B4A596] p-0 m-0 title">
          YOU CAN'T WIN.
        </p>
        <p className="text-[40px] md:text-[90px] font-bold text-[#B4A596] title p-0 mt-[-20px] md:mt-[-50px]">
          SO WIN.
        </p>
        <p className="mt-[-5px] md:mt-[-15px] font-[600] md:font-[500]">
          They'll talk whether you win or lose. So leave 'em speechless.
        </p>
        <a
          href="#"
          className="py-[10px] px-5 min-w-[60px] bg-white rounded-full text-black mt-6 font-[550] text-[16px]"
        >
          Watch
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
