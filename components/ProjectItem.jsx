import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  liveUrl,
  GithubUrl,
  projectUrl,
  username,
  password,
  username2,
  password2,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="absolute flex  gap-4 h-[100%] w-[100%]">
        <div className="hidden p-2 group-hover:flex flex-col items-center justify-center basis-[100%] ">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <div className="flex gap-1 justify-center flex-wrap">
            <Link href={liveUrl}>
              <p className=" px-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-lg cursor-pointer">
                Demo
              </p>
            </Link>
            {GithubUrl && (
              <Link href={GithubUrl}>
                <p className=" px-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-lg cursor-pointer">
                  Github
                </p>
              </Link>
            )}

            <Link href={projectUrl}>
              <p className=" px-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-sm md:text-lg cursor-pointer">
                MoreInfo
              </p>
            </Link>
          </div>
        </div>
        {username && password && (
          <div className="text-white text-center hidden  group-hover:flex flex-col items-center justify-center bg-black rounded-r-xl p-2 basis-[70%]">
            <h3 className="text-lg mb-2 border-b-2">Test User</h3>
            <p className="text-sm">
              <span className="text-sm font-semibold">Username:</span>{" "}
              {username}
            </p>
            <p className="text-sm">
              {" "}
              <span className="text-sm font-semibold">Password:</span>{" "}
              {password}
            </p>
            {username2 && password2 && (
              <>
                <p className="text-sm">
                  <span className="text-sm font-semibold">Username:</span>{" "}
                  {username2}
                </p>
                <p className="text-sm">
                  {" "}
                  <span className="text-sm font-semibold">Password:</span>{" "}
                  {password2}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
