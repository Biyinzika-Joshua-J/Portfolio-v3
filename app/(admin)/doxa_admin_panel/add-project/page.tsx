"use client"
import React from 'react'
// import AddProjectForm from '@/components/AddProjectForm/AddProjectForm';

import dynamic from 'next/dynamic';

const AddProjectForm = dynamic(() => import('@/components/AddProjectForm/AddProjectForm'), {
  ssr: false, // Disable server-side rendering
});




const page = () => {
  return (
    <div>
      <div className="mx-auto w-[80%]">
        <h1 className="text-center font-bold text-3xl my-8">Add a Project</h1>
        <AddProjectForm/>
       
      </div>
    </div>
  )
}

export default page