'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'

import CardTemplate from "@/components/TopCardTemplate"
import TableTemplate from "@/components/TableTemplate"

import { RiHomeSmile2Line } from 'react-icons/ri';
import { CiDatabase } from 'react-icons/ci';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

import Input from '@mui/joy/Input';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '@/lib/features/auth/authSlice';

const cardContent = [
	{
		id: 1,
		icon: (
			<RiHomeSmile2Line className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#7F56D9] rounded-lg" />
		),
		content: 'Unique Peices Generated',
		contentFont: "text-sm",
		number: '22,000',
		numberFont: 'text-2xl',
		widthHeight: "h-2.5",
		width: '45%',
		color: 'bg-[#7F56D9]',
		divWidth: 'w-[389.33px]',
	},
	{
		id: 2,
		icon: (
			<FaUmbrellaBeach className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#079455] rounded-lg" />
		),
		content: 'Join the community',
		contentFont: "text-sm",
		number: '12000+',
		numberFont: 'text-2xl',
		widthHeight: "h-2.5",
		width: '92%',
		color: 'bg-[#079455]',
		divWidth: 'w-[389.33px]',
	},
	{
		id: 3,
		icon: (
			<CiDatabase className="h-8 w-8 p-1.5 bg-[#F4EBFF] text-[#1570EF] rounded-lg" />
		),
		content: 'Total Fresco Burned',
		contentFont: "text-sm",
		number: '$41,382.80',
		numberFont: 'text-2xl',
		widthHeight: "h-2.5",
		width: '65%',
		color: 'bg-[#1570EF]',
		divWidth: 'w-[389.33px]',
	},
];

export default function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router =  useRouter();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	if (isLoggedIn) {
		router.push("/home")
	}
	return (
    <div className="flex items-center flex-col justify-center ">
      <div className="mb-10 xl:w-10/12">
        <div className="pt-6">
          <h1 className="text-3xl text-[#101828] font-semibold ">Explore, Create, and Share Digital Art with Fresco.</h1>
          <p className="text-[#475467] text-sm mt-2" >First Community Supported AI</p>
        </div>
        <div className="my-10 flex md:flex-row items-center justify-between gap-6 w-full">
          {cardContent.map((item) => {
            return <CardTemplate key={item.id} {...item} />
          })}
        </div>
		<Input
			className="max-w-xs mb-10 placeholder:text-[#667085] placeholder:text-sm text-sm focus:outline-none focus:border-[#7F56D9] focus:ring-[#7F56D9]" 
			placeholder="Search"
			startDecorator={<CiSearch className="text-[#667085]" />}
		/>
        <div>
          <TableTemplate />
        </div>
      </div>
    </div>
);
}
