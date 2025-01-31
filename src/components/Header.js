"use client"


import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


import Chip from '@mui/joy/Chip';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';


import { FcGoogle } from 'react-icons/fc';
import { IoWalletOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";


import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/lib/features/auth/authSlice';
import signUpWithGoogle from '@/firebase/auth/SignInWithGoogle';


export default function Header() {
	const { user, isLoggedIn} = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const handleSignIn = async () => {

        const { result, error } = await signUpWithGoogle();

        if (error) {
        	return console.log(error)
        }

        // else successful
		const userData = {
			uid: result.user.uid,
			email: result.user.email,
			displayName: result.user.displayName,
			photoURL: result.user.photoURL,
			emailVerified: result.user.emailVerified,
		};

        dispatch(setUser(userData));
    }

	return (
		<Box className="flex items-center flex-row justify-center border-b border-gray-200 ">
			<Paper 
				className="shadow-none py-2 flex flex-row items-center justify-between xl:w-10/12"
			>
				<Typography
					variant="h6"
					component="div"
					className="flex flex-row items-center gap-2 font-semibold"
					sx={{ flexGrow: 1 }}
				>
					<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_dd_196_1152)">
						<g clipPath="url(#clip0_196_1152)">
						<rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
						<rect x="3" y="2" width="32" height="32" rx="8" fill="url(#paint0_linear_196_1152)"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M19 4.03885C11.2895 4.03885 5.03885 10.2895 5.03885 18C5.03885 25.7106 11.2895 31.9612 19 31.9612C26.7106 31.9612 32.9612 25.7106 32.9612 18C32.9612 10.2895 26.7106 4.03885 19 4.03885ZM4.96118 18C4.96118 10.2466 11.2466 3.96118 19 3.96118C26.7535 3.96118 33.0389 10.2466 33.0389 18C33.0389 25.7535 26.7535 32.0389 19 32.0389C11.2466 32.0389 4.96118 25.7535 4.96118 18Z" fill="#D0D5DD"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M19 14.0779C16.8338 14.0779 15.0777 15.834 15.0777 18.0002C15.0777 20.1665 16.8338 21.9226 19 21.9226C21.1662 21.9226 22.9223 20.1665 22.9223 18.0002C22.9223 15.834 21.1662 14.0779 19 14.0779ZM15 18.0002C15 15.7911 16.7909 14.0002 19 14.0002C21.2091 14.0002 23 15.7911 23 18.0002C23 20.2094 21.2091 22.0002 19 22.0002C16.7909 22.0002 15 20.2094 15 18.0002Z" fill="#D0D5DD"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M19 15.3201C17.52 15.3201 16.3203 16.5198 16.3203 17.9997C16.3203 19.4796 17.52 20.6793 19 20.6793C20.4799 20.6793 21.6796 19.4796 21.6796 17.9997C21.6796 16.5198 20.4799 15.3201 19 15.3201ZM16.2427 17.9997C16.2427 16.4769 17.4772 15.2424 19 15.2424C20.5228 15.2424 21.7572 16.4769 21.7572 17.9997C21.7572 19.5225 20.5228 20.757 19 20.757C17.4772 20.757 16.2427 19.5225 16.2427 17.9997Z" fill="#D0D5DD"/>
						<path d="M18.9612 2H19.0389V34H18.9612V2Z" fill="#D0D5DD"/>
						<path d="M35 17.9609L35 18.0386L3 18.0386L3 17.9609L35 17.9609Z" fill="#D0D5DD"/>
						<path d="M29.6021 2H29.6797V34H29.6021V2Z" fill="#D0D5DD"/>
						<path d="M13.6409 2H13.7185V34H13.6409V2Z" fill="#D0D5DD"/>
						<path d="M24.2815 2H24.3592V34H24.2815V2Z" fill="#D0D5DD"/>
						<path d="M8.32031 2H8.39798V34H8.32031V2Z" fill="#D0D5DD"/>
						<path d="M35 28.6016L35 28.6792L3 28.6792L3 28.6016L35 28.6016Z" fill="#D0D5DD"/>
						<path d="M35 12.6406L35 12.7183L3 12.7183L3 12.6406L35 12.6406Z" fill="#D0D5DD"/>
						<path d="M35 23.2812L35 23.3589L3 23.3589L3 23.2812L35 23.2812Z" fill="#D0D5DD"/>
						<path d="M35 7.32031L35 7.39798L3 7.39798L3 7.32031L35 7.32031Z" fill="#D0D5DD"/>
						<g filter="url(#filter1_dd_196_1152)">
						<circle cx="19" cy="18" r="8" fill="url(#paint1_linear_196_1152)"/>
						</g>
						<g filter="url(#filter2_b_196_1152)">
						<path d="M3 18H35V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z" fill="white" fillOpacity="0.2"/>
						</g>
						</g>
						<rect x="3.1" y="2.1" width="31.8" height="31.8" rx="7.9" stroke="#D0D5DD" strokeWidth="0.2"/>
						</g>
						<defs>
						<filter id="filter0_dd_196_1152" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_1152"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="1.5"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
						<feBlend mode="normal" in2="effect1_dropShadow_196_1152" result="effect2_dropShadow_196_1152"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_196_1152" result="shape"/>
						</filter>
						<filter id="filter1_dd_196_1152" x="8" y="8" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="1"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
						<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_1152"/>
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
						<feOffset dy="1"/>
						<feGaussianBlur stdDeviation="1.5"/>
						<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
						<feBlend mode="normal" in2="effect1_dropShadow_196_1152" result="effect2_dropShadow_196_1152"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_196_1152" result="shape"/>
						</filter>
						<filter id="filter2_b_196_1152" x="-2" y="13" width="42" height="26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5"/>
						<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_196_1152"/>
						<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_196_1152" result="shape"/>
						</filter>
						<linearGradient id="paint0_linear_196_1152" x1="19" y1="2" x2="19" y2="34" gradientUnits="userSpaceOnUse">
						<stop stopColor="white"/>
						<stop offset="1" stopColor="#D0D5DD"/>
						</linearGradient>
						<linearGradient id="paint1_linear_196_1152" x1="15" y1="26" x2="23" y2="10" gradientUnits="userSpaceOnUse">
						<stop stopColor="#53389E"/>
						<stop offset="1" stopColor="#6941C6"/>
						</linearGradient>
						<clipPath id="clip0_196_1152">
						<rect x="3" y="2" width="32" height="32" rx="8" fill="white"/>
						</clipPath>
						</defs>
					</svg>

					<span>Fresco</span>
				</Typography>
				
				{isLoggedIn ? 
					<div className="flex flex-row items-center gap-2">
						<IoIosNotificationsOutline className="h-6 w-6 hover:cursor-pointer" />
						<Chip variant="outlined" 
							className="py-1.5 px-3 border bg-white hover:cursor-pointer"
						>
							Claim
						</Chip>
						<Dropdown>
							<MenuButton 
								variant="plain"
								className="hover:bg-white p-0"
							>
								<Chip variant="outlined" 
									className="py-1.5 px-2.5 bg-white hover:bg-[#F9FAFB] hover:scale-105 ease-in-out duration-300"
									startDecorator={<IoWalletOutline />}
									endDecorator={<FaCaretDown />}
								>
									{user?.email}
								</Chip>
							</MenuButton>
							<Menu>
								<MenuItem>Add item</MenuItem>
							</Menu>
						</Dropdown>
					</div>
					:
					<button className="bg-transparent text-black text-xs font-semibold flex flex-row items-center py-1.5 px-2 shadow border border-gray-200 rounded-lg hover:bg-transparent " 
						onClick={async () => await handleSignIn()}
					>
						<FcGoogle className="mr-1" />
						Login with Google
					</button>
				}
			</Paper>
		</Box>
	);
}
