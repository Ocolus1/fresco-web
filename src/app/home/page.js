'use client';

import React, { useState, useEffect } from 'react';


import CardTemplate from "@/components/TopCardTemplate"
import GenerateButton from "@/components/GenerateButton"


import { RiHomeSmile2Line } from 'react-icons/ri';
import { CiDatabase } from 'react-icons/ci';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { LuUploadCloud } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";


import Button from '@mui/joy/Button';


import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '@/lib/features/auth/authSlice';

const cardContent = [
	{
		id: 1,
		icon: (
			<RiHomeSmile2Line className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#7F56D9] rounded-lg" />
		),
		content: 'Unique Peices Generated',
        contentFont: "text-xs",
		number: '22,000',
        numberFont: 'text-xl',
		widthHeight: "h-2",
		width: '45%',
		color: 'bg-[#7F56D9]',
		divWidth: 'w-[188px]',
	},
	{
		id: 2,
		icon: (
			<FaUmbrellaBeach className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#079455] rounded-lg" />
		),
		content: 'Join the community',
        contentFont: "text-xs",
		number: '12000+',
        numberFont: 'text-xl',
		widthHeight: "h-2",
		width: '92%',
		color: 'bg-[#079455]',
		divWidth: 'w-[188px]',
	},
	{
		id: 3,
		icon: (
			<CiDatabase className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#1570EF] rounded-lg" />
		),
		content: 'Total Fresco Burned',
        contentFont: "text-xs",
		number: '$41,382.80',
        numberFont: 'text-xl',
		widthHeight: "h-2",
		width: '65%',
		color: 'bg-[#1570EF]',
		divWidth: 'w-[188px]',
	},
];

export default function Home() {
  const { user, loading, isLoggedIn } = useSelector((state) => state.auth);
  const [isGenerating, setIsGenerating] = useState(false);
  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);


	const handleClick = () => {
		setIsGenerating(!isGenerating);
	};
	return (
		<div className="flex items-center flex-col justify-center ">
			<div className="mb-10 xl:w-10/12">
				<div className="pt-6 flex flex-row justify-between">
					<h1 className="text-3xl text-[#101828] font-semibold ">
						Quick Stats
					</h1>
					<div className="flex flex-row gap-4">
						<Button
							sx={{
								color: '#344054',
								border: '1px solid #D0D5DD',
								'&:hover': {
									backgroundColor: 'rgba(52, 64, 84, 0.1)',
								},
							}}
							variant="outlined"
							startDecorator={<LuUploadCloud />}
						>
							Import
						</Button>
						<Button
							sx={{
								color: '#fff',
								border: '1px solid #7F56D9',
								background: '#7F56D9',
								'&:hover': {
									backgroundColor: 'rgba(127, 86, 217, 0.9)',
								},
							}}
							variant="solid"
							startDecorator={<IoMdAdd />}
						>
							New Fresco
						</Button>
					</div>
				</div>
				<div className="my-10 flex md:flex-row  gap-6 w-full">
					<div className="max-w-[252px] flex flex-col items-center gap-10 ">
						{cardContent.map((item) => {
							return <CardTemplate key={item.id} {...item} />;
						})}
					</div>
					<div className="w-[252px] flex flex-col items-center gap-10 ">
                        <div className="w-full">
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-[#101828] text-lg font-semibold">
                                    Generate
                                </p>
                                <HiOutlineDotsVertical />
                            </div>
                            <hr className="w-full h-2 mt-2" />
                        </div>
						<div>
							<GenerateButton isAnimating={isGenerating} handleClick={handleClick} />

                            {isGenerating ? 
                                <div className="my-4 font-medium flex flex-row" >
                                    <p>Generating fresco </p>
                                    <div class='flex space-x-2 mt-2 justify-center items-center bg-white dark:invert'>
                                        <span class='sr-only'>Loading...</span>
                                        <div class='h-2 w-2 bg-[#7F56D9] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                                        <div class='h-2 w-2 bg-[#7F56D9] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                                        <div class='h-2 w-2 bg-[#7F56D9] rounded-full animate-bounce'></div>
                                    </div>
                                </div>
                                : ""    
                            }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
