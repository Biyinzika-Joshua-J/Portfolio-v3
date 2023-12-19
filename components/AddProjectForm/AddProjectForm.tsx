"use client"
import React from 'react'
import Editor from '../editor/Editor'

const AddProjectForm = () => {
  return (
    <div>
        <div className="">
            <input className='border-2 border-black p-4 w-full my-4' type="text" name="title" id="title" placeholder='title'/>
        </div>
        <div className="">
            <input className='border-2 border-black p-4 w-full my-4' type="text" name="Hex-code-color" id="Hex-code-color" placeholder='Hex code color'/>
        </div>
        <div className="">
            <textarea  className='border-2 border-black p-4 w-full my-4' name="description" id="description" placeholder='Description' cols="30" rows="10"></textarea>
        </div>
        <div className="">
            <input  className='border-2 border-black p-4 w-full my-4' type="text" name="project-link" id="project-link" placeholder='Project Link'/>
        </div>
        <div className="">
            <input  className='border-2 border-black p-4 w-full my-4' type="text" name="project-image-main" id="project-image-main" placeholder='Main image link'/>
        </div>
        <div className="">
            <input  className='border-2 border-black p-4 w-full my-4' type="text" name="project-image-secondary" id="project-image-secondary" placeholder='Secondary image link'/>
        </div>

        <div className="my-4">
            <Editor label='Overview'/>
        </div>
        <div className="my-4">
            <Editor label='Features'/>
        </div>
        <div className="my-4">
            <Editor label='Tech stack'/>
        </div>
        <div className="my-4">
            <Editor label='Challenges and Solutions'/>
        </div>

        <div className="my-4">
        <p className='font-bold'>Project screen shots</p>
        <input  className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-1" placeholder='Screen shot 1 link'/>
        <input  className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-2" placeholder='Screen shot 2 link'/>
        <input  className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-3" placeholder='Screen shot 3 link'/>
        </div>

        <div className="my-4">
            <Editor label='User experience'/>
        </div>
        <div className="my-4">
            <Editor label='Project links'/>
        </div>
        <div className="my-4">
            <Editor label='Lessons learned'/>
        </div>

        <div className="my-4">
            <button onClick={()=>{}} className="w-full bg-black text-center py-4 px-4 text-white">
                Save Project
            </button>
        </div>

    </div>
  )
}

export default AddProjectForm