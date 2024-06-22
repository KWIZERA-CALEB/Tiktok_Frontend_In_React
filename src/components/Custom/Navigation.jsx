import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { PlusIcon } from '@heroicons/react/24/solid'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

//buttons
import { Button } from "@/components/ui/button"

const Navigation = () => {
  return (
    <div className='flex flex-row justify-between items-center bg-[#121212] w-full h-[90px] pl-[16px] pr-[24px] fixed z-[100] top-0 left-0 right-0'>

        <div className='flex flex-row items-center space-x-[7px]'>
            <div><Link to={'/'}><img src="/images/tiktok1.png" className='w-[50px]' alt="Logo" /></Link></div>
            <div><h3 className='text-white font-bold text-[30px] lead-[25px] cursor-pointer'><Link to={'/'}>TikTok</Link></h3></div>
        </div>

        <div></div>
        
        <div className='flex flex-row space-x-[30px] items-center'>
            <div>
                <Link to={'/upload'}>
                    <Button className='font-bold bg-[#31363F] hover:bg-[#222831] text-[20px] pt-[25px] pb-[25px]'><div className='w-[30px] h-[30px]'><PlusIcon className='text-white text-[20px] font-bold' /></div> Upload</Button>
                </Link>
            </div>
            <div className='w-[38px] h-[38px]'><PaperAirplaneIcon className='text-white text-[20px] font-bold cursor-pointer' /></div>
            <div className='w-[38px] h-[38px]'><ChatBubbleBottomCenterTextIcon className='text-white text-[20px] font-bold cursor-pointer' /></div>
            <div><img src="/images/vibrent_24.png" className='w-[50px] h-[50px] rounded-[50%] cursor-pointer object-cover object-center' alt="User" /></div>
        </div>

    </div> 
  )
}

export default Navigation
