import React from "react";

function Category2() {
  return (
    <section className="container mx-auto max-w-[93.5%] my-[100px] px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="ml-6">
          <a href="#">
            <svg
              aria-hidden="true"
              className="mx-auto swoosh-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="300px"
              height="300px"
              fill="none"
            >
              <path
                fill="#B4A596"
                fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex justify-center items-center gap-6 mt-[100px]">
          <a href="#" className="text-[16px] font-[600]">
            Find a Store
          </a>
          <a href="#" className="text-[16px] font-[600]">
            Help
          </a>
          <a href="#" className="text-[16px] font-[600]">
            Join Us
          </a>
          <a href="#" className="text-[16px] font-[600]">
            Sign In
          </a>
        </div>
        <div className="w-full mt-[120px] flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 lg:gap-24">
          <div>
            <p className="font-[600] text-[20px]">Featured</p>

            <div className="mt-4 hidden lg:flex flex-col gap-3">
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Air Force 1
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Jordan 1
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Metcon
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Air Max 270
              </a>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[20px]">Shoes</p>

            <div className="mt-4 hidden lg:flex flex-col gap-3">
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                All Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Jordan Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Running Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Basketball Shoes
              </a>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[20px]">Clothing</p>

            <div className="mt-4 hidden lg:flex flex-col gap-3">
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                All Clothing
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Tops & T-shirts
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Shorts
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Hoodies & Pullovers
              </a>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[20px]">Kids</p>

            <div className="mt-4 hidden lg:flex flex-col gap-3">
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Infant & Toddler Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Kids Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Kids Basketball Shoes
              </a>
              <a href="#" className="text-[16px] font-medium text-[#999999]">
                Kids Running Shoes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category2;