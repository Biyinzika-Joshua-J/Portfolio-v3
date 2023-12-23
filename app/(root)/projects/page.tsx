import React from 'react'
import ProjectCard from '@/components/cards/ProjectCard/ProjectCard'
import { Projects } from '@/constants/constants'
import ProjectsList from '@/components/ProjectsList/ProjectsList'


const page = () => {
  
  return (
    <main className="max-w-6xl mx-auto">
        <div className="my-20">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">All Projects</h1>
          </div>
          <div className="">
          <ProjectsList  />
          </div>
        </div>
    </main>
  )
}

export default page