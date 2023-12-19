
import React from 'react'
import dynamic from 'next/dynamic'

const DraftEditor = dynamic(()=>import("@/components/editor/Editor"), {
  ssr:false,
});

const page = () => {
  return (
    <div>page
      <div className="">
        <DraftEditor/>
      </div>
    </div>
  )
}

export default page