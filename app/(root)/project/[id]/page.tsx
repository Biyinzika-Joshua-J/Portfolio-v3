import React from 'react'
import Image from 'next/image';
import ProjectSlider from '@/components/projectSlider/ProjectSlider';

interface Props{
  params : any;
}

const Project = ({params}:Props) => {
  const {id:ProjectId} = params;

  return (
    <main className='max-w-6xl mx-auto mt-20'>
      <section className="h-60 w-full relative mb-20">
        <div className="h-full w-full">
            <Image
              src={'/assets/images/desktop.png'}
              alt='header image'
              width={1000}
              height={500}
              className='h-full w-full object-cover'
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-black">
        </div>
        <div className="absolute top-0 left-0 w-full flex h-full justify-center items-center">
          <h1 className="text-7xl font-bold text-white">Movilla</h1>
        </div>
      </section>
      <section className="">
        <div className="mb-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Overview</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Features</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Tech Stack</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Challenges and Solutions</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Code Snippets</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Screenshots and Demos</h2>
          </div>
          <div className="py-4">
              <ProjectSlider/>
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">User Experience</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Project Links</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Impact</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Future Enhancements</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Lessons Learned</h2>
          </div>
          <div className="py-4">
              content
          </div>
        </div>
      
      </section>
    </main>
  )
}

export default Project