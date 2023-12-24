"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import AddProjectForm from '@/components/AddProjectForm/AddProjectForm';

const Editor = dynamic(()=>import("@/components/editor/Editor"), {
  ssr:false,
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