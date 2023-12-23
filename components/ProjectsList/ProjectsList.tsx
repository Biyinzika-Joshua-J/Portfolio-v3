"use client"
import React, {useState, useEffect} from 'react'
import ProjectCard from '../cards/ProjectCard/ProjectCard';
import { getProjects } from '@/lib/actions/projectActions';

interface Props{
    count ?: number;
}

const ProjectsList = ({count}:Props) => {
    const [projects, setProjects] = useState(null)
    useEffect(()=>{
        async function getAllProjects() {
            try {
                const projectsList = await getProjects();
                let projectListReversed:any = projectsList.reverse();
                if (count){
                    projectListReversed = projectListReversed.slice(0, count);
                }
                setProjects(projectListReversed)
                console.log(projectListReversed)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getAllProjects();
    }, []);
  return (
    <div>
           {projects === null && (
            <div className="text-center flex items-center justify-center h-96 w-full">
              <span className="font-bold text-lg">Loading....</span>
            </div>
          )}
           {projects && projects.map((Project, idx) => (
            <ProjectCard
              id={Project.id}
              name={Project.title}
              description={Project.description}
              images={[Project.mainImageLink, Project.secondaryImageLink]}
              bgColor={Project.hexCode}
              key={idx}
              index={idx}
              liveLink={Project.projectLink}
            />
          ))}
    </div>
  )
}

export default ProjectsList