import React from 'react'
import Navigation from '@/components/Custom/Navigation'
import SideMenu from '@/components/Custom/SideMenu'
import UploadArea from '@/components/Custom/UploadArea'

const Upload = () => {
  return (
    <>
      <Navigation />
      <div className='flex flex-row'>
          <SideMenu />
          <UploadArea />
      </div>
    </>
  )
}

export default Upload
