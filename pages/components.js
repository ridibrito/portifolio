import Link from "next/link";
import { AiOutlineApi, AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { TbComponents } from "react-icons/tb";
import { FaRegClone } from "react-icons/fa";
import Image from "next/image";



export default function Components() {
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
          <h1 className=" text-2xl">Projetos componentes</h1>
        </div>
      </Link>
      <div className="flex gap-3 justify-center">
      <div className="mt-3 shadow border border-gray-300 text-center p-4">
        <Image src="/modal.png" alt='modal' width='300' height='300' />
        <h2 className="font-semibold text-lg">Modal</h2>
        <p>ReactJs,TypeScript, Vite, Css padrão.</p>

        <Link href='https://modal-react-psi.vercel.app/'>
            <a target='_blank' className="text-blue-500">https://modal-react-psi.vercel.app/</a>
        </Link>
      </div>
      <div className="mt-3 shadow border border-gray-300 text-center p-4">
        <Image src="/login.png" alt='modal' width='300' height='300' />
        <h2 className="font-semibold text-lg">Login</h2>
        <p>ReactJs, Vite, Css padrão, React-hook-forms</p>

        <Link href='https://login-react-phi.vercel.app/'>
            <a target='_blank' className="text-blue-500">https://login-react-phi.vercel.app/</a>
        </Link>
      </div>
      <div className="mt-3 shadow border border-gray-300 text-center p-4">
        <Image src="/dropdown.png" alt='modal' width='300' height='300' />
        <h2 className="font-semibold text-lg">Menu dropdown</h2>
        <p>ReactJs, Vite, tailwindCss</p>

        <Link href='https://menu-dropdown.vercel.app/'>
            <a target='_blank' className="text-blue-500">https://menu-dropdown.vercel.app/</a>
        </Link>
      </div>
      <div className="mt-3 shadow border border-gray-300 text-center p-4">
        <Image src="/todolist.png" alt='modal' width='300' height='300' />
        <h2 className="font-semibold text-lg">ToDo List</h2>
        <p>ReactJs, Vite, Styled-components</p>

        <Link href='https://todolist-omega-seven.vercel.app/'>
            <a target='_blank' className="text-blue-500">https://todolist-omega-seven.vercel.app/</a>
        </Link>
      </div>
      </div>
    </>
  );
}
