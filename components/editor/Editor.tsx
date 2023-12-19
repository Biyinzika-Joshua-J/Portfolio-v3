"use client"
// components/Editor/main.js

// Importing helper modules
import { useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "react-quill/dist/quill.snow.css";


const formats = ["header","bold","italic","underline","strike","blockquote",
    "list","bullet","indent","link","image","color","clean",
  ];

  const modules = {
    toolbar: {
      container: [
        [{ header: [2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
     
    },
    clipboard: {
      matchVisual: true,
    },
  }

interface Props {
  label ?:string;
}

const Editor = ({label}:Props) => {
  // Editor state
  const [value, setValue] = useState("");

  // Handler to handle button clicked
  function handler() {
    console.log(value);
  }

  return (
    <div className="">
      <label className="font-bold  mb-2">{label}</label>
      <QuillEditor
        className=""
        theme="snow"
        value={value}
        onChange={(value) => setValue(value)}
        formats={formats}
        modules={modules}
      />
      
      
      {/*<div className="" dangerouslySetInnerHTML={{__html:value}}>*/}

    
    </div>
  );
};

export default Editor;