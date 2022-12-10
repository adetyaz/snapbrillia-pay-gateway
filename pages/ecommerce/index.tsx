import React, { useState } from 'react';
import NextImage from 'next/image'
import NextLink from 'next/link'
import { Button, Typography, Box, Stack, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { FaChevronLeft, FaCircle, FaHeart, FaMinus, FaPlus, FaShoppingCart, FaStar } from 'react-icons/fa'

export default function Home() {
    return (
      <>
      {/* container */}
      <div className="bg-gray-100 flex h-screen items-center justify-center">
        {/* product card */}
        <div className="bg-white duration-300 flex flex-col max-w-xs rounded-xl shadow-lg space-y-4 transform w-full hover:-translate-y-2">
        {/* back button, reviews and favourite */}
        <div className="flex flex-row items-center justify-between pt-4 px-4">
            <button className="duration-150 p-2 transform hover:-translate-x-1">
                <FaChevronLeft />
            </button>

            <div className="flex flex-row items-center space-x-4">
                <div className="inline-flex items-center">
                    <FaStar className="mr-1 text-yellow-300" />
                    <p className="font-medium">4.6</p>
                </div>

                <button className="p-2 rounded-full text-red-400 transition hover:bg-red-400 hover:shadow-md hover-text-white">
                    <FaHeart />
                </button>

            </div>

        </div>

        {/* image */}
        <div className="flex justify-center">
            <NextImage alt="chair"  height="224" src="/chair.png" width="224" />
        </div>

        {/* title, options and quantity */}
        <div className="flex flex-col px-4 space-y-1">
            <div className="flex flex-col -space-y-0.5">
                <NextLink href="/">
                    {/* <a className="font-medium tracking-wide w-max">Brand</a> */}
                </NextLink>
                <p className="text-gray-500 text-xs">Chair</p>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-3">
                    <button className="p-1 rounded-full text-pink-800 text-xs transition hover:ring-2 hover:ring-pink-800">
                        <FaCircle />
                    </button>
                    <button className="p-1 ring-2 ring-yellow-800 rounded-full text-yellow-800 text-xs transition hover:ring-2 hover:ring-yellow-800">
                        <FaCircle />
                    </button>
                    <button className="p-1 rounded-full text-blue-800 text-xs transition hover:ring-2 hover:ring-blue-800">
                        <FaCircle />
                    </button>
                </div>

                <div className="flex flex-row items-center space-x-4">
                    <button className="bg-blue-200 p-2 rounded-md text-gray-800 transition hover:bg-blue-300">
                        <FaMinus />
                    </button>
                    <p className="font-medium text-xl">1</p>
                    <button className="bg-blue-200 p-2 rounded-md text-gray-800 transition hover:bg-blue-300">
                        <FaPlus />
                    </button>
                </div>
            </div>

        </div>

        {/* price, purchase button */}
        <div className="flex flex-row items-center justify-between pb-4 px-4">
            <h1 className="font-medium text-2xl">₳20</h1>

            <button className="bg-blue-400 font-medium inline-flex items-center px-4 px-2 rounded-md shadow-md text-white transition hover:bg-blue-500">
                <FaShoppingCart className="mr-2" />
                <NextLink href="https://pay.preprod.nmkr.io/?p=31e9636ad4804d0b8be1455708a823f3&n=82443beb5ba9493b83e101a006ca12ca">
                    Pay with Cardano
                </NextLink>
            </button>

        </div>
        </div>
      </div>
      </>
    )
  }