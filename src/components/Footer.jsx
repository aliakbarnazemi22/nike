import React, { useState } from "react";

function Footer() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <footer className="container mx-auto max-w-[96%] px-2">
      <hr className="text-[#3f3c3c] mb-16 border-[#3f3c3c]" />
      <div className="w-full hidden lg:flex justify-between items-start gap-2 mt-4 mb-16">
        <div>
          <p className="font-[600] text-[16px] text-start">Resources</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Gift Cards
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Find a Store
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Membership
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Nike Journal
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Site Feedback
            </a>
          </div>
        </div>

        <div>
          <p className="font-[600] text-[16px] text-start">Help</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Get Help
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Order Status
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Shipping and Delivery
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Returns
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Order Cancellation
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Payment Options
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Gift Card Balance
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div>
          <p className="font-[600] text-[16px] text-start">Company</p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              About Nike
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              News
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Investors
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Purpose
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Sustainability
            </a>
          </div>
        </div>

        <div>
          <p className="font-[600] text-[16px] text-start">
            Promotions & Discounts
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Student
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Military
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Teacher
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              First Responders & Medical Professionals
            </a>
            <a
              href="#"
              className="text-[14px] font-[600] text-[#999999] text-start"
            >
              Birthday
            </a>
          </div>
        </div>

        <div>
          <a href="https://aliakbarnazemi.ir" target="_blank" rel="noreferer" className="text-[16px] text-[#E6E6E6] font-[600] text-end">
            View My CV
          </a>
        </div>
      </div>
      <div className="w-full flex lg:hidden flex-col gap-3 items-start mt-4 mb-16">
        <div className="w-full">
          <div className="w-full py-2 px-4 transition border-[#1f1f21] border hover:border-[#E6E6E6] rounded-[12px]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveTab(1)}
            >
              <p className="font-[600] text-[16px] text-start">Resources</p>
              <p className="font-[600] text-[24px] text-start">
                {activeTab == 1 ? "-" : "+"}
              </p>
            </div>
          </div>
          {activeTab == 1 ? (
            <div className="flex flex-col gap-3 px-5 mt-2">
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Gift Cards
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Find a Store
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Membership
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Nike Journal
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Site Feedback
              </a>
            </div>
          ) : (
            <div className="w-full"></div>
          )}
        </div>
        <div className="w-full">
          <div className="w-full py-2 px-4 transition border-[#1f1f21] border hover:border-[#E6E6E6] rounded-[12px]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveTab(2)}
            >
              <p className="font-[600] text-[16px] text-start">Resources</p>
              <p className="font-[600] text-[24px] text-start">
                {activeTab == 2 ? "-" : "+"}
              </p>
            </div>
          </div>
          {activeTab == 2 ? (
            <div className="flex flex-col gap-3 px-5 mt-2">
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Gift Cards
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Find a Store
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Membership
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Nike Journal
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Site Feedback
              </a>
            </div>
          ) : (
            <div className="w-full"></div>
          )}
        </div>
        <div className="w-full">
          <div className="w-full py-2 px-4 transition border-[#1f1f21] border hover:border-[#E6E6E6] rounded-[12px]">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setActiveTab(3)}
            >
              <p className="font-[600] text-[16px] text-start">Resources</p>
              <p className="font-[600] text-[24px] text-start">
                {activeTab == 3 ? "-" : "+"}
              </p>
            </div>
          </div>
          {activeTab == 3 ? (
            <div className="flex flex-col gap-3 px-5 mt-2">
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Gift Cards
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Find a Store
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Membership
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Nike Journal
              </a>
              <a
                href="#"
                className="text-[14px] font-[600] text-[#999999] text-start"
              >
                Site Feedback
              </a>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="flex gap-8 items-center flex-wrap mb-12">
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          2025 Nike, Inc. All Rights Reserved
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          Guides
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          Terms of Sale
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          Terms of Use
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          Nike Privacy Policy
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          Your Privacy Choices
        </a>
        <a
          href="#"
          className="text-[14px] font-[600] text-[#999999] text-start"
        >
          CA Supply Chains Act
        </a>
      </div>
    </footer>
  );
}

export default Footer;
