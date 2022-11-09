import Link from "next/link";
import { AiOutlineApi, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { TbComponents } from "react-icons/tb";
import { FaRegClone } from "react-icons/fa";
import Image from "next/image";

export default function Clones() {
  return (
    <>
      <div className="sm:flex sm:justify-center space-y-3 mb-3 sm:space-y-0 sm:mx-0">
              <Link href="/apis">
              <a  className="border border-sky-600 text-sky-600 px-6 py-2 ml-3 flex items-center gap-2 rounded hover:bg-sky-600 hover:text-white" >
               <AiOutlineApi />
                APIs
              </a>
              </Link>
              <Link href="/components">
              <a  className="border border-sky-600 text-sky-600 px-6 py-2 ml-3 flex items-center gap-2 rounded hover:bg-sky-600 hover:text-white" >
               <TbComponents />
                Components
              </a>
              </Link>
              <Link href="/clones">
              <a  className="border border-sky-600 text-sky-600 px-6 py-2 ml-3 flex items-center gap-2 rounded hover:bg-sky-600 hover:text-white" >
               <FaRegClone />
                Clones
              </a>
              </Link>
              <Link href="/ecommerce">
              <a  className="border border-sky-600 text-sky-600 px-6 py-2 ml-3 flex items-center gap-2 rounded hover:bg-sky-600 hover:text-white" >
               <AiOutlineShoppingCart />
                Ecommerce
              </a>
              </Link>
              </div>
      <Link href="/">
        <div className="flex items-center gap-3 ml-5">
          <AiOutlineHome className="text-sky-600 w-6 h-6 cursor-pointer" />
          <h1 className=" text-2xl">Projetos Clone</h1>
        </div>
      </Link>
    </>
  );
}
