import { AiFillGithub } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsSun } from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-5 py-4 items-center max-w-7xl content-center mx-auto">
        <div className="sm:flex ">
          <h1 className="leading-none text-slate-700 font-bold text-lg sm:text-xl md:text-3xl">Ricardo</h1>
          <h2 className="leading-none text-sky-600 font-bold text-lg sm:text-xl md:text-3xl">Albuquerque</h2>
        </div>
        <div className="flex items-center">
            <BsSun className="hidden sm:flex w-6 h-6 mr-3 hover:text-yellow-500"/>
          <label
            htmlFor="sky-toggle"
            className="inline-flex relative items-center mr-5 cursor-pointer pt-1"
          >
            <input
              type="checkbox"
              value=""
              id="sky-toggle"
              className="sr-only peer"
              checked={false}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
          </label>
          <BsMoon className="hidden sm:flex w-8 h-7  pr-3 hover:text-slate-400"/>
        </div>
        <div className="flex items-center pt-">
          <Link href="https://github.com/ridibrito">
            <a className="flex hover:text-sky-600 text-slate-700 hover:ease-in hover:duration-300">
              <AiFillGithub className="w-5 sm:w-7 h-7 " />
              <span className="hidden md:flex pt-1 text-sm mr-4"> Github </span>
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/ricardobalbuquerque/">
            <a className="flex sm: hover:text-sky-600 text-slate-700 hover:ease-in hover:duration-300">
              <RiLinkedinBoxFill className="w-5 sm:w-7 h-7" />
              <span className="hidden md:flex pt-1 text-sm mr-4  "> LinkedIn </span>
            </a>
          </Link>
          
          <FiMail className="w-5 sm:w-7 h-7 text-sky-600 cursor-pointer hover:text-slate-700 hover:ease-in hover:duration-300"/>
          
        </div>
      </div>
    </>
  );
}
