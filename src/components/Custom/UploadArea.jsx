import React, { useState } from 'react'
import { FolderOpenIcon } from '@heroicons/react/24/solid'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UploadArea = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [hashtags, setHashTags] = useState('')
    const [video, setVideo] = useState(null)
    const [loading, setLoading] = useState(false)
    const  navigate  = useNavigate()
    


    const HandleSubmit = (event)=> {
        event.preventDefault()
        const data = {
          title,
          description,
          video,
          hashtags
        }
        setLoading(true)

        axios.post('http://127.0.0.1:8000/api/add/', data,{
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then((response)=> {
            console.log(response.data)
            setLoading(false)
            navigate('/')
          })
          .catch((err)=> {
            console.log(err)
          })
      }

  return (
    <div className='h-[100vh] bg-[#121212]/[90%] p-[30px] fixed right-0 w-full md:w-[82%] overflow-y-scroll'>
      <div>
        <h3 className='text-white font-bold text-[25px] select-none cursor-pointer'>Upload New Video</h3>
      </div>

      <div className='flex flex-col justify-between items-center mt-[20px] md:flex-row'>
        <div className='w-full h-full p-[20px] md:w-[50%]'>
            <p className='font-md text-[16px] text-white/[70%] select-none cursor-pointer'>Video File | max-size: 10MB | format: mp4, mkv</p>
            <label htmlFor="file-choice">
                <div className='mt-[10px] rounded-[10px] outline-dashed outline-2 outline-offset-2  outline-white/[70%] p-[60px] flex justify-center items-center w-full h-full'><div className='w-[50px] h-[50px] font-bold text-white/[80%]'><FolderOpenIcon /> <div><h3>Choose</h3></div></div></div>
            </label>

            <p className='font-md text-[16px] text-white/[70%] select-none cursor-pointer'>Video Thumbnail | max-size: 10MB | format: mp4, mkv</p>
            <div className='mt-[10px] rounded-[10px] outline-dashed outline-2 outline-offset-2  outline-white/[70%] p-[60px] flex justify-center items-center w-full h-full'><div className='w-[50px] h-[50px] font-bold text-white/[80%]'><FolderOpenIcon /> <div><h3>Choose</h3></div></div></div>

            <p className='font-md text-[16px] text-white/[70%] select-none cursor-pointer'>By publishing your video it will appear public. Explict videos and harming content is banned by The Laws of Tiktok Clone.</p>
        </div>

        <div className='w-full md:w-[50%]'>
            <form onSubmit={HandleSubmit} >
                <div className='mb-[10px]'>
                    <p className='font-md text-[18px] mb-[6px] text-white/[90%] select-none cursor-pointer'>Video Title</p>
                    <Input type="text" onChange={(event)=> setTitle(event.target.value)} value={title} className='bg-[#121212]/[90%] pl-[16px] text-[18px] text-white pt-[28px] pb-[28px]' placeholder="Video Title" />
                </div>
                <div className='mb-[10px]'>
                    <p className='font-md text-[18px] mb-[6px] text-white/[90%] select-none cursor-pointer'>Video HashTags | Separate them by comma</p>
                    <Input type="text" onChange={(event)=> setHashTags(event.target.value)} value={hashtags} className='bg-[#121212]/[90%] pl-[16px] text-[18px] text-white pt-[28px] pb-[28px]' placeholder="HashTags" />
                </div>
                <div className='mb-[10px] hidden'>
                    <Input type="file" onChange={(event)=> setVideo(event.target.files[0])} id='file-choice' className='bg-[#121212]/[90%] pl-[16px] text-[18px] text-white pt-[28px] pb-[28px]' placeholder="HashTags" />
                </div>
                <div className='mb-[10px]'>
                    <p className='font-md text-[18px] mb-[6px] text-white/[90%] select-none cursor-pointer'>Video Description</p>
                    <Input type="text" onChange={(event)=> setDescription(event.target.value)} value={description} className='bg-[#121212]/[90%] pl-[16px] text-[18px] text-white pt-[28px] pb-[120px]' placeholder="Video Description" />
                </div>
                
                <div>
                    {loading ? 
                        <Button className='font-bold bg-[#FF204E] w-full hover:bg-[#FF204E]/[90%] text-[20px] pt-[25px] pb-[25px] disabled:opacity-75'>Uploading</Button>

                    :
                        <Button className='font-bold bg-[#FF204E] w-full hover:bg-[#FF204E]/[90%] text-[20px] pt-[25px] pb-[25px]'>Upload Video</Button>
                    }
                </div> 
            </form>

        </div>

      </div>
    </div>
  )
}

export default UploadArea
