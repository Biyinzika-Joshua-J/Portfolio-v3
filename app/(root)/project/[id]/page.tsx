"use client"
import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import ProjectSlider from '@/components/projectSlider/ProjectSlider';
import { getProjectDetails } from '@/lib/actions/projectActions';
import Loader from '@/components/loader/Loader';
import './styles.css';

interface Props{
  params : any;
}

const Project = ({params}:Props) => {
  const {id:ProjectId} = params;
  const [contentDetails, setContentDetails] = useState(null);
  const [sliderImages, setSliderImages] = useState([])

 useEffect(()=>{
  async function projectDetails(id:string){
    try {
      const details:any = await getProjectDetails(id);
      setContentDetails(details);
      const {screenShot1Link, screenShot2Link, screenShot3Link} = details;
      setSliderImages([screenShot1Link, screenShot2Link, screenShot3Link])
    } catch (error) {
      console.log(error);
    }
  }
  projectDetails(ProjectId);
 }, []);

 console.log(contentDetails)

  return (
    <div>
      {contentDetails == null &&  <Loader/>}
    {contentDetails != null && <main className='max-w-6xl mx-auto mt-20'>
      <section className="project-details h-60 w-full relative mb-20">
        <div className="h-full w-full">
            <Image
              src={contentDetails.mainImageLink}
              alt='header image'
              width={1000}
              height={500}
              className='h-full w-full object-cover'
            />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-black">
        </div>
        <div className="absolute top-0 left-0 w-full flex h-full justify-center items-center">
          <h1 className="text-7xl font-bold text-white">{contentDetails.title}</h1>
        </div>
      </section>
      <section className="">
        <div className="mb-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Overview</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.overview}}>
              
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Features</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.features}}>
              
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Tech Stack</h2>
          </div>
          <div className="py-4"  dangerouslySetInnerHTML={{__html:contentDetails.techStack}}>
              
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Challenges and Solutions</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.challengesAndSolutions}}>
              
          </div>
        </div>
       
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Screenshots and Demos</h2>
          </div>
          <div className="py-4">
              <ProjectSlider images={sliderImages}/>
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">User Experience</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.userExperience}}>
              
          </div>
        </div>
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Project Links</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.projectLinks}}>
              
          </div>
        </div>
        
        <div className="my-10">
          <div className="">
              <h2 className="lg:text-7xl text-6xl">Lessons Learned</h2>
          </div>
          <div className="py-4" dangerouslySetInnerHTML={{__html:contentDetails.lessonsLearned}}>
              
          </div>
        </div>
      
      </section>
    </main>}
    </div>
  )
}

export default Project