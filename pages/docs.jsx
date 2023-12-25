import Image from "next/image";
import React from "react";
import docsImg from "../public/assets/projects/docs.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={docsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Docs Clone</h2>
          <h3>React JS / Node JS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-4">Overview</h2>
          <p>
            I have meticulously crafted a dynamic web platform reminiscent of
            collaborative document editing, akin to renowned document creation
            tools. This sophisticated system offers users the ability to
            seamlessly generate and refine documents over time. The
            authentication mechanism is fortified with Auth0, enabling users to
            establish accounts using traditional credentials, or effortlessly
            sign in through the streamlined OAuth authentication protocols
            provided by Google and GitHub. <br />
            <br />
            Users are empowered to share their meticulously crafted documents
            effortlessly with peers, leveraging the functionality seamlessly
            integrated with Email.js. Inviting collaboration, the platform
            employs WebSockets through the robust Socket.io library, allowing
            multiple users to concurrently edit documents in real-time. This
            innovative feature ensures that modifications are effortlessly
            reflected across all active sessions, creating a fluid collaborative
            environment. <br />
            <br />
            The backend architecture, meticulously constructed on Node.js, is
            fortified with the versatility of a PostgreSQL database, skillfully
            orchestrated through the Prisma ORM. The deployment strategy,
            orchestrated on the robust AWS infrastructure, is encapsulated
            within Docker containers using Docker Compose. This streamlined
            approach simplifies the initiation of the entire process with a
            single command. <br />
            <br />
            Nginx, a robust and high-performance proxy server, has been
            seamlessly integrated into the architecture. This incorporation not
            only facilitates a secure HTTPS connection but also enhances the
            platform's resilience. SSL certificates, crucial for ensuring data
            security, are seamlessly managed and signed using Certbot. <br />
            <br />
            This amalgamation of cutting-edge technologies and meticulous design
            choices ensures a secure, scalable, and user-friendly environment
            for collaborative document creation and editing.
          </p>
          <a
            href="https://github.com/mahesh9932/docs-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://docs-clone-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Postgres
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Auth0
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Docker
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Email.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
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

export default property;
