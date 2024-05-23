"use client"

import { useState } from 'react';


import { FaPlay } from 'react-icons/fa';

export default function Widget({isAnimating, handleClick}) {
	
	return (
		<div className="flex items-center justify-center">
			<div className="relative flex items-center justify-center w-40 h-40 bg-white rounded-full">
				<div
					className={`absolute flex items-center justify-center w-[150px] h-[150px] bg-[#53389E] rounded-full ${
						isAnimating ? 'animate-glow-delay-4' : ''
					}`}
				></div>
				<div
					className={`absolute flex items-center justify-center w-32 h-32 bg-white rounded-full ${
						isAnimating ? 'animate-glow-delay-3' : ''
					}`}
				></div>
				<div
					className={`absolute flex items-center justify-center w-[120px] h-[120px] bg-[#7F56D9] rounded-full ${
						isAnimating ? 'animate-glow-delay-2' : ''
					}`}
				></div>
				<div
					className={`absolute flex items-center justify-center w-24 h-24 bg-white rounded-full ${
						isAnimating ? 'animate-glow-delay-1' : ''
					}`}
				></div>
				<div
					className={`absolute flex items-center justify-center w-[90px] h-[90px] bg-[#B692F6] rounded-full ${
						isAnimating ? 'animate-glow' : ''
					}`}
				></div>
				<div
					className={`absolute flex items-center justify-center w-16 h-16 bg-white rounded-full ${
						isAnimating ? 'animate-glow-delay-5' : ''
					}`}
				></div>
				<FaPlay
					className="absolute text-[#53389E] h-4 w-4 cursor-pointer"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
}
