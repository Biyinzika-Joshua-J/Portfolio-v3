// @ts-nocheck
"use client"
import React, {useState} from 'react'
import Editor from '../editor/Editor';
import { updateProject } from '@/lib/actions/projectActions';


interface Props{
    projectData : object;
}

const EditProjectForm = ({projectData}:Props) => {
    
    // project data
    const {
        id: idValue,
        title: titleValue,
        hexCode: hexCodeValue,
        description: descriptionValue,
        projectLink: projectLinkValue,
        mainImageLink: mainImageLinkValue,
        secondaryImageLink: secondaryImageLinkValue,
        overview: overviewValue,
        features: featuresValue,
        techStack: techStackValue,
        challengesAndSolutions: challengesAndSolutionsValue,
        screenShot1Link: screenShot1LinkValue,
        screenShot2Link: screenShot2LinkValue,
        screenShot3Link: screenShot3LinkValue,
        userExperience: userExperienceValue,
        projectLinks: projectLinksValue,
        lessonsLearned: lessonsLearnedValue,
      } = projectData;

    // states
    const [title, setTitle] = useState(titleValue);
  const [hexCode, setHexCode] = useState(hexCodeValue);
  const [description, setDescription] = useState(descriptionValue);
  const [projectLink, setProjectLink] = useState(projectLinkValue);
  const [mainImageLink, setMainImageLink] = useState(mainImageLinkValue);
  const [secondaryImageLink, setSecondaryImageLink] = useState(secondaryImageLinkValue);
  const [overview, setOverview] = useState(overviewValue);
  const [features, setFeatures] = useState(featuresValue);
  const [techStack, setTechStack] = useState(techStackValue);
  const [challengesAndSolutions, setChallengesAndSolutions] = useState(challengesAndSolutionsValue);
  const [screenShot1Link, setScreenShot1Link] = useState(screenShot1LinkValue);
  const [screenShot2Link, setScreenShot2Link] = useState(screenShot2LinkValue);
  const [screenShot3Link, setScreenShot3Link] = useState(screenShot3LinkValue);
  const [userExperience, setUserExperience] = useState(userExperienceValue);
  const [projectLinks, setProjectLinks] = useState(projectLinksValue);
  const [lessonsLearned, setLessonsLearned] = useState(lessonsLearnedValue);

  // submit handler 
 async function updateProjectHandler(){
    const data = {title,hexCode, description, projectLink, mainImageLink, secondaryImageLink, overview, features, techStack, challengesAndSolutions, screenShot1Link, screenShot2Link, screenShot3Link,userExperience,projectLinks,lessonsLearned}
    for (const obj in data){
        if(data[obj] === "") return;
    }
  
    const project = await updateProject(idValue, data);
    if (project){
        // ... successfull
        window.location.href = '/doxa_admin_panel';
    }else{
        // ...
    }
 }

  
      
  return (
    <div>
        <div>
        <div className="">
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='border-2 border-black p-4 w-full my-4' type="text" name="title" id="title" placeholder='title'/>
        </div>
        <div className="">
            <input value={hexCode} onChange={(e)=>setHexCode(e.target.value)} className='border-2 border-black p-4 w-full my-4' type="text" name="Hex-code-color" id="Hex-code-color" placeholder='Hex code color'/>
        </div>
        <div className="">
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  className='border-2 border-black p-4 w-full my-4' name="description" id="description" placeholder='Description' cols="30" rows="10"></textarea>
        </div>
        <div className="">
            <input value={projectLink} onChange={(e)=>setProjectLink(e.target.value)}  className='border-2 border-black p-4 w-full my-4' type="text" name="project-link" id="project-link" placeholder='Project Link'/>
        </div>
        <div className="">
            <input value={mainImageLink} onChange={(e)=>setMainImageLink(e.target.value)}  className='border-2 border-black p-4 w-full my-4' type="text" name="project-image-main" id="project-image-main" placeholder='Main image link'/>
        </div>
        <div className="">
            <input value={secondaryImageLink} onChange={(e)=>setSecondaryImageLink(e.target.value)}   className='border-2 border-black p-4 w-full my-4' type="text" name="project-image-secondary" id="project-image-secondary" placeholder='Secondary image link'/>
        </div>

        <div className="my-4">
            <Editor editorValue={overview} valueHandler={setOverview} label='Overview'/>
        </div>
        <div className="my-4">
            <Editor editorValue={features} valueHandler={setFeatures} label='Features'/>
        </div>
        <div className="my-4">
            <Editor editorValue={techStack} valueHandler={setTechStack} label='Tech stack'/>
        </div>
        <div className="my-4">
            <Editor editorValue={challengesAndSolutions} valueHandler={setChallengesAndSolutions} label='Challenges and Solutions'/>
        </div>

        <div className="my-4">
        <p className='font-bold'>Project screen shots</p>
        <input value={screenShot1Link} onChange={(e)=>setScreenShot1Link(e.target.value)}   className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-1" placeholder='Screen shot 1 link'/>
        <input value={screenShot2Link} onChange={(e)=>setScreenShot2Link(e.target.value)}  className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-2" placeholder='Screen shot 2 link'/>
        <input value={screenShot3Link} onChange={(e)=>setScreenShot3Link(e.target.value)}  className='border-2 border-black p-4 w-full my-4' type="text" name="screen-shot" id="screen-shot-3" placeholder='Screen shot 3 link'/>
        </div>

        <div className="my-4">
            <Editor editorValue={userExperience} valueHandler={setUserExperience} label='User experience'/>
        </div>
        <div className="my-4">
            <Editor editorValue={projectLinks} valueHandler={setProjectLinks} label='Project links'/>
        </div>
        <div className="my-4">
            <Editor editorValue={lessonsLearned} valueHandler={setLessonsLearned} label='Lessons learned'/>
        </div>

        <div className="my-4">
            <button onClick={updateProjectHandler} className="w-full bg-black text-center py-4 px-4 text-white">
                Save your changes
            </button>
        </div>

    </div>
    </div>
  )
}

export default EditProjectForm