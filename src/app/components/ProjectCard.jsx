import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [borderTop, setBorderTop] = useState(false);

  return (
    <div className="rounded-b-xl rounded-t-xl" style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'}}>
      <div
        className="h-80 md:h-52 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center rounded-t-xl justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl} rel="noopener noreferrer" target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl} rel="noopener noreferrer" target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      {borderTop && <div className="h-1px bg-[#ADB7BE]" />}
      <div onMouseEnter={() => setBorderTop(true)}
      onMouseLeave={() => setBorderTop(false)}
      className="border-grey border-left border-right rounded-b-xl pt-3 bg-white p-4">
        <h5 className="text-[#222442] text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#222442]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
