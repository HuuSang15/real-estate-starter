import React from 'react';

const Footer = () => {
  return <footer className="container mx-auto py-12 border ">
  <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
    <div className="basis-1/3">
      <div className="font-bold text-xl mb-4 text-gray-800">HomeLand.</div>
      <div className="mb-8 md:mb-20">Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
      <div className="text-gray-400 hover:text-coffee-400">Huu Sang Dev. © 2023</div>
    </div>
    <div className="basis-1/6">
      <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">Menu</div>
      <div className="flex flex-col gap-3">
        <div className=""><a href="/" className="hover:text-violet-500">Home</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">Our Products</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">About</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">Contact</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">Styleguide</a></div>
        <div className=""><a href="https://github.com/HuuSang15" target="blank" className="hover:text-violet-500">HuuSangDev</a></div>
      </div>
    </div>
    <div className="basis-1/6">
      <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">Folllow Us</div>
      <div className="flex flex-col gap-3">
        <div className=""><a href="https://facebook.com/no157" className="hover:text-violet-500">Facebook</a></div>
        <div className=""><a href="https://github.com/HuuSang15" className="hover:text-violet-500">GitHub</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">Pinterest</a></div>
        <div className=""><a href="/" className="hover:text-violet-500">Twitter</a></div>
      </div>
    </div>
    <div className="basis-1/3">
      <div className="uppercase font-semibold tracking-wider text-gray-600 mb-8 md:mb-4">Contact Us</div>
      <div className="mb-4">We&apos;re Always Happy to Help</div>
      <div className="mb-16 text-gray-800 text-[20px] tracking-wide">
        <a href="mailto:phamhuusang23@gmail.com" className="hover:text-violet-500">phamhuusang24@gmail.com</a>
      </div>
      <div className=""><a href="https://github.com/HuuSang15" target="blank" className="hover:text-violet-500">Powered by HuuSang Author</a></div>
    </div>
  </div>
</footer>
};

export default Footer;
