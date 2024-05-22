"use client"

import * as React from 'react';


import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';

import { examineAddress } from '@/lib/utils';

import { GoDotFill } from "react-icons/go";



function createData(
  address,
  percent,
  roi,
  head,
  subhead,
) {
  return { address, percent, roi, head, subhead };
}

const rows = [
	createData(
		examineAddress('Catalyst.eth'),
		70,
		'Customer',
		'Content curating app',
		'Brings all your news into one place'
	),
	createData(
		examineAddress('0x32a45b7890ff3'),
		65,
		'Churned',
		'Design software',
		'Super lightweight design app'
	),
	createData(
		examineAddress('0x32a45b7890ff3'),
		40,
		'Customer',
		'Data prediction',
		'AI and machine learning data'
	),
	createData(
		examineAddress('0x32a45b7890ff3'),
		90,
		'Customer',
		'Productivity app',
		'Time management and productivity'
	),
	createData(
		examineAddress('0x32a45b7890ff3'),
		30,
		'Churned',
		'Web app integrations',
		'Connect web apps seamlessly'
	),
];


export default function TableStripe() {


  return (
		<Sheet className="mb-8 ">
			<table className="border rounded-t-lg rounded-lg w-full">
				<thead className="bg-white ">
					<tr className="">
						<th
							scope="col"
							className="text-xs font-medium text-[#475467] px-6 py-2 text-left"
							style={{ width: '40%' }}
						>
							Leaderboard
						</th>
						<th 
							scope="col"
							className="text-xs font-medium text-[#475467] px-6 py-2 text-left"
						>
							XP Used
						</th>
						<th
							scope="col"
							className="text-xs font-medium text-[#475467] px-6 py-2 text-left"
						>
							ROI
						</th>
						<th 
							scope="col"
							className="text-xs font-medium text-[#475467] px-6 py-2 text-left"
						>
							Last Tx
						</th>
						<th 
							scope="col"
							className="text-xs font-medium text-[#475467] px-6 py-2 text-left"
						></th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr
							key={index}
							className={`${
								index % 2 === 0 ? 'bg-[#F9FAFB]' : 'bg-white'
							} `}
						>
							<td className="text-sm text-[#101828] font-medium px-6 py-4 whitespace-nowrap">{row.address}</td>
							<td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
								<div className="w-full bg-[#EAECF0] rounded-full h-1.5">
									<div className={`bg-[#7F56D9] h-1.5 rounded-full`} 
										style={{width: `${row.percent}%`}}
									></div>
								</div>
							</td>
							<td className="text-xs text-[#344054] font-medium px-6 py-4 whitespace-nowrap">
								<span className="border flex items-center max-w-fit px-0.5 shadow-sm">
									<GoDotFill className={` ${row.roi === "Customer" ? "text-[#17B26A]" : "text-[#667085]"} `} />
									{row.roi}
								</span>
							</td>
							<td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
								<span className="flex flex-col">
									<span className="text-[#101828] font-normal">{row.head} </span>
									<span className="text-[#475467] font-normal">{row.subhead}</span>
								</span>
							</td>
							<td className="flex gap-4 my-auto flex-row items-center text-sm text-gray-900 font-light px-6 py-7 whitespace-nowrap">
								<Radio size="sm" variant="outlined" />
								<Radio size="sm" variant="outlined" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex flex-row items-center justify-between border px-6 py-3 rounded-b-lg w-full">
				<div>
					<button className="border border-[#D0D5DD] text-[#344054] text-sm font-medium px-2 py-1 rounded-md text-[#344054] mr-5">Previous</button>
					<button className="border border-[#D0D5DD] text-[#344054] text-sm font-medium px-2 py-1 rounded-md text-[#344054] ">Next</button>
				</div>
				<p className="text-[#344054] text-sm font-medium">Page 1 of 10</p>
			</div>
		</Sheet>
  );
}
