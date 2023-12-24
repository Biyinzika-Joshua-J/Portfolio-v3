"use client";
import React, { useEffect, useState } from "react";
import { getProjectDetails } from "@/lib/actions/projectActions";
import EditProjectForm from "@/components/EditProjectForm/EditProjectForm";

interface Props {
  params: any;
}

const EditProject = ({ params }: Props) => {
  const [project, setProject] = useState(null);
  const { id: ProjectId } = params;

  useEffect(() => {
    async function getAllProjectDetails(id: string) {
      try {
        const projectData: any = await getProjectDetails(id);
        setProject(projectData);
      } catch (error) {
        console.log(error);
        return false;
      }
    }
    getAllProjectDetails(ProjectId);
  }, []);

  return (
    <div>
      {project === null && (
        <div className="text-center flex items-center justify-center h-96 w-full">
          <span className="font-bold text-lg">Loading....</span>
        </div>
      )}
      {
        project != null && (
          <div className="mx-auto w-[80%]">
          <h1 className="text-center font-bold text-3xl my-8">Edit {project.title} Project</h1>
          <div className=""> 
            <EditProjectForm projectData={project}/>
           </div>
        </div>
        )
      }
     
    </div>
  );
};

export default EditProject;
