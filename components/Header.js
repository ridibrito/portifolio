import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FiMail } from 'react-icons/fi'
import Link from "next/link";
import Toggle from "./toggle.js";


export default function Header() {
  return (
    <>
      <div className="flex justify-between px-5 py-4 items-center max-w-7xl content-center mx-auto dark:bg-gray-600 delay-100">
        <div className="sm:flex ">
          <h1 className="leading-none text-gray-700 font-bold text-lg sm:text-xl md:text-3xl dark:text-gray-400">Ricardo</h1>
          <h2 className="leading-none text-sky-600 dark:text-sky-400 font-normal text-lg sm:text-xl md:text-3xl ">Albuquerque</h2>
        </div>
        <div className="flex items-center">
        <Toggle/>
        </div>
        <div className="flex items-center pt-">
          <Link href="https://github.com/ridibrito">
            <a className="flex hover:text-sky-600 text-gray-700 hover:ease-in hover:duration-300 dark:text-gray-400">
              <AiFillGithub className="w-5 sm:w-7 h-7 " />
              <span className="hidden md:flex pt-1 text-sm mr-4"> Github </span>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/ricardobalbuquerque/">
            <a className="flex sm: hover:text-sky-600 text-gray-700 hover:ease-in hover:duration-300 dark:text-gray-400">
              <RiLinkedinBoxFill className="w-5 sm:w-7 h-7" />
              <span className="hidden md:flex pt-1 text-sm mr-4  "> LinkedIn </span>
            </a>
          </Link>
          
          <FiMail className="w-5 sm:w-7 h-7 text-sky-600 dark:text-sky-400 cursor-pointer hover:text-gray-700 hover:ease-in hover:duration-300"/>
          
        </div>
      </div>
    </>
  );
}
