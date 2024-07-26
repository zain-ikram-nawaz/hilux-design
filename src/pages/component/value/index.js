import React, { useState, useRef } from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaArrowCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

export default function Value() {
  
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <main id="value">
      <div className="lg:container lg:mx-auto lg:grid lg:grid-cols-2 mt-40 gap-4  sm:px-3">
        <div className="flex sm:justify-center sm:items-end sm:mb-8 lg:items-end">
          <img src="p1.jpg" alt="" className="rounded-t-full border-4" />
        </div>
        <div className="">
          <p className="text-blue-500 sm:text-2xl font-semibold lg:text-3xl">Our Value.</p>
          <h1 className="font-semibold mt-2 text-zinc-700 sm:text-3xl md:text-4xl sm:text-3xl">
            Value We Give To You .
          </h1>
          <p className="my-8  text-zinc-700 font-thin ">
            We always ready to help by provideing the besr service for you .We
            believe a good place to live con make your life better{" "}
          </p>
          <div className="main">
            <div className="border-2 p-4 mt-8">
              <div
                className="flex justify-between"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <FaShieldAlt className="sm:mt-1 sm:-ml-3"/>
                <div className="">
                  <p>Best Intrest rates on the market</p>
                </div>
                <div>
                  {open ? <FaArrowAltCircleUp className="sm:mt-1 sm:ml-2"/> : <FaArrowCircleDown className="sm:mt-1 sm:ml-2"/>}
                </div>
              </div>
            </div>

            {open && (
              <div className=" my-class relative" >
                <div className="p-4 absolute border-2 bg-blue-400 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis doloremque minima eos suscipit laudantium commodi et cum
                  atque ipsam? Molestiae soluta nihil qui quod tempora amet
                  reiciendis ipsum temporibus harum!
                </div>
              </div>
            )}
            <div className="border-2 p-4  mt-8">
              <div
                className="flex justify-between"
                onClick={() => {
                  setOpen1(!open1);
                }}
              >
                <FaShieldAlt className="sm:mt-1 sm:-ml-3"/>
                <div>
                  <p>Best Intrest rates on the market</p>
                </div>
                <div>
                  {open1 ? <FaArrowAltCircleUp className="sm:mt-1 sm:ml-2"/> : <FaArrowCircleDown className="sm:mt-1 sm:ml-2"/>}
                </div>
              </div>
            </div>

            {open1 && (
              <div className="border-2 relative">
                <div className="p-4 absolute bg-blue-400 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis doloremque minima eos suscipit laudantium commodi et cum
                  atque ipsam? Molestiae soluta nihil qui quod tempora amet
                  reiciendis ipsum temporibus harum!
                </div>
              </div>
            )}
            <div className="border-2 p-4  mt-8">
              <div
                className="flex justify-between"
                onClick={() => {
                  setOpen2(!open2);
                }}
              >
                <FaShieldAlt className="sm:mt-1 sm:-ml-3"/>
                <div className="">
                  <p>Best Intrest rates on the market</p>
                </div>
                <div>
                  {open2 ? <FaArrowAltCircleUp className="sm:mt-1 sm:ml-2"/> : <FaArrowCircleDown className="sm:mt-1 sm:ml-2"/>}
                </div>
              </div>
            </div>

            {open2 && (
              <div className=" my-class relative">
                <div className="p-4 border-2 absolute bg-blue-400 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis doloremque minima eos suscipit laudantium commodi et cum
                  atque ipsam? Molestiae soluta nihil qui quod tempora amet
                  reiciendis ipsum temporibus harum!
                </div>
              </div>
            )}
            <div className="border-2 p-4  mt-8">
              <div
                className="flex justify-between"
                onClick={() => {
                  setOpen3(!open3);
                }}
              >
                <FaShieldAlt className="sm:mt-1 sm:-ml-3"/>
                <div className="">
                  <p>Best Intrest rates on the market</p>
                </div>
                <div>
                  {open3 ? <FaArrowAltCircleUp className="sm:mt-1 sm:ml-2"/> : <FaArrowCircleDown className="sm:mt-1 sm:ml-2"/>}
                </div>
              </div>
            </div>

            {open3 && (
              <div className=" my-class relative">
                <div className="p-4 border-2 absolute bg-blue-400 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis doloremque minima eos suscipit laudantium commodi et cum
                  atque ipsam? Molestiae soluta nihil qui quod tempora amet
                  reiciendis ipsum temporibus harum!
                </div>
              </div>
            )}
            <div className="border-2 p-4  mt-8">
              <div
                className="flex justify-between"
                onClick={() => {
                  setOpen4(!open4);
                }}
              >
                <FaShieldAlt className="sm:mt-1 sm:-ml-3"/>
                <div className="">
                  <p>Best Intrest rates on the market</p>
                </div>
                <div>
                  {open4 ? <FaArrowAltCircleUp className="sm:mt-1 sm:ml-2"/> : <FaArrowCircleDown className="sm:mt-1 sm:ml-2"/>}
                </div>
              </div>
            </div>

            {open4 && (
              <div className="relative">
                <div className="p-4 border-2 absolute bg-blue-400 text-white">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Omnis doloremque minima eos suscipit laudantium commodi et cum
                  atque ipsam? Molestiae soluta nihil qui quod tempora amet
                  reiciendis ipsum temporibus harum!
                </div>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </main>
  );
}
