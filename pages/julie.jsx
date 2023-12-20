import Image from "next/image";
import React from "react";
import Julie from "../public/assets/projects/julie.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Julie}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Threat Analyzer</h2>
          <h3>React JS / Material UI</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            "I spearheaded the development of a comprehensive website that
            aggregates global cyber threats from diverse sources, categorizes
            them, and presents detailed information about threat actors in a
            centralized platform. Employing React, I crafted a dynamic web
            application seamlessly integrated with AWS DynamoDB as the primary
            data source. To enhance user experience, I implemented Infinite
            Scroll, optimizing data loading and reducing user wait time.The site
            incorporates interactive data filters for precise attribute
            refinement and boasts a robust OpenSearch API-powered search
            application, facilitating efficient full-text searches. Leveraging
            DynamoDB Streams, I ensured real-time synchronization between
            DynamoDB and OpenSearch for timely updates. The website features a
            modern Single Page Application (SPA) architecture implemented with
            React Router v6, enhancing navigation. For seamless frontend-backend
            communication, I developed RESTful APIs using AWS Lambda,
            contributing to a smooth and responsive user interface."
          </p>
          <a
            href="https://github.com/fireclint/crypto-react-firebase"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="px-8 py-2 mt-4 mr-8 bg-gray-400 bg-none "
              disabled
            >
              Code
            </button>
          </a>
          <a href="https:lab.julies.io" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Lambda
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Dynamo DB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS OpenSearch
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Amplify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
