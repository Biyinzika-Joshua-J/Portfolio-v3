"use server"
import prisma from "../prisma"
import { PortfolioProjectInterface } from "../types";

export async function addProject(projectData:PortfolioProjectInterface){
    try {
        const newProject = await prisma.portfolioProject.create({
            data: projectData,
          });
        return true;
    } catch (error) {
        console.log('We can not add this project to the database!!', error);
        return false;
    }finally{
        await prisma.$disconnect();
    }
}

export async function getProjects(){
    try {
        const Projects = await prisma.portfolioProject.findMany();
        return Projects;
    } catch (error) {
        console.error('Error fetching portfolio projects:', error);
        return [];
    }finally{
        await prisma.$disconnect();
    }
}

export async function getProjectDetails(id:string){
    try {
        const projectDetails = await prisma.portfolioProject.findUnique({
            where: {
              id: parseInt(id), 
            },
          });
          if (!projectDetails) {
            return null;
          }
          return projectDetails;
    } catch (error) {
        console.log("No such project exists with the given id", error);
        return null;
    }finally{
        await prisma.$disconnect();
    }
}