"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getProjects, deleteProject } from "@/lib/actions/projectActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    async function getAllProjects() {
      try {
        const data: any = await getProjects();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProjects();
  }, []);

  async function deleteProjectHandler(id:string){
      try {
        const deletedProject = await deleteProject(id);
        const newProjects = projects?.filter((project) => project.id !== id);
        setProjects(newProjects);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
  }

  return (
    <div>
      <div className="mx-auto w-[80%]">
        <h1 className="text-center font-bold text-3xl my-8">
          Available Projects
        </h1>
        <div className="text-center">
          <Link className="bg-black p-2 text-white" href={"/doxa_admin_panel/add-project"}>
            Add Project
          </Link>
        </div>

        <div className="">
          {projects &&
            projects.map((project, idx) => (
              <div className="py-4 px-4 text-black my-4 border-2 border-black rounded-lg flex items-center justify-between">
                <div className="">
                  <span className="font-bold text-2xl">{project.title}</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <button onClick={()=>deleteProjectHandler(project.id)} className="bg-black text-white py-2 px-4">
                      <FontAwesomeIcon icon={faTrash} size="xl" />
                      <span className="ml-2">Delete</span>
                    </button>
                  </div>
                  <div className="mr-4">
                    <Link
                      href={`/doxa_admin_panel/edit-project/${project.id}`}
                      className="bg-black text-white py-2 px-4"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} size="xl" />
                      <span className="ml-2">Edit</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          {projects === null && (
            <div className="text-center flex items-center justify-center h-96 w-full">
              <span className="font-bold text-lg">Loading....</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
