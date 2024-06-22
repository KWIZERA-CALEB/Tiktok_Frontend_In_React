import React from 'react'
import Navigation from '@/components/Custom/Navigation'
import SideMenu from '@/components/Custom/SideMenu'
import VideoArea from '@/components/Custom/VideoArea'

const Home = () => {
  return (
    <>
        <Navigation />
        <div className='flex flex-row'>
            <SideMenu />
            <VideoArea />
        </div>
      
    </>
  )
}

export default Home
