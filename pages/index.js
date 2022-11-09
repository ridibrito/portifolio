import Image from "next/image";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import MyTabs from '../components/Tabs'
import About from '../components/About'
import Lgpd from "../components/lgpd";
import { AiOutlineApi, AiOutlineShoppingCart } from "react-icons/ai";
import { TbComponents } from 'react-icons/tb'
import { FaRegClone } from 'react-icons/fa'

const parent = {
  variantA: { scale: 1.25 },
  variantB: { scale: 0.9 },
};


export default function Home() {
  return (
    <>
      <div>
        <ThemeProvider>
          <main className="max-w-6xl sm:mt-10 sm:flex items-center content-center mx-auto dark:bg-gray-600">
            <div className="sm:w-1/2">
              <h4 className="bg-sky-600 dark:bg-sky-400 text-white dark:text-gray-600 px-3 py-1.5 font-semibold rounded w-60 ml-2 sm:ml-10 text-center shadow-md mb-8 text-sm sm:text-md ">
                Front-End Developer
              </h4>

              <h1 className=" mt-3 ">
                <blockquote className="text-2xl sm:text-4xl text-gray-700 mx-2 sm:mx-10 font-normal dark:text-gray-400 ">
                  <q>Criatividade é a soma de inpiração e conhecimento</q>
                </blockquote>
              </h1>
              <div>
                <div>
                  <div className="mt-5 sm:ml-10 flex justify-between py-3 sm:w-4/5 mx-2 bg-gray-200 px-4 dark:bg-gray-700 shadow-lg rounded">
                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                    
                      <Image
                        src="/html.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>
                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">    

                      <Image
                        src="/css.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>
                     <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                      <Image
                        src="/js.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>
                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                      <Image
                        src="/react.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>

                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                      <Image
                        src="/next-js.svg"
                        alt="html"
                        width="45"
                        height="50"
                      />
                    </motion.div>
                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                      <Image
                        src="/bootstrap.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>
                    <motion.div 
                    variants={parent} 
                    whileHover="variantA"
                    whileTap="variantB">
                      <Image
                        src="/tailwind.svg"
                        alt="html"
                        width="50"
                        height="50"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div>
              <Link target='_blank' href="https://curriculo-three-mauve.vercel.app/">
                  <a target="_blank" className="hidden md:flex bg-sky-600 items-center gap-4 dark:bg-sky-400 text-white dark:text-gray-600 px-7 py-2 mt-5 font-semibold rounded w-60 ml-2 sm:ml-10 shadow-md mb-8  sm:text-md ">
                    
                      Meu currículo <BsFillArrowRightSquareFill />
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:flex sm:bg-gradient-to-b sm:from-gray-200 dark:sm:bg-gradient-to-r dark:sm:from-gray-700 rounded-full ">
          <Image
                src="/foto2.png"
                alt="fotoRicardo"
                width="400"
                height="400"
              />
              <Link target='_blank' href="https://curriculo-three-mauve.vercel.app/">
                <a
                target="_blank"
                  className="md:hidden items-center gap-5 flex w-11/12 mx-auto justify-center py-2 -mt-2 bg-sky-600 shadow-lg rounded-lg text-white font-semibold cursor-pointer ">
                    Meu currículo <BsFillArrowRightSquareFill />
                  
                </a>
              </Link>
            </div>
          </main>

          <section className="bg-gray-200 dark:bg-gray-700  h-full">
          <div>
              <h2 className="text-gray-900 text-xl font-normal text-center pt-3 dark:text-gray-400">
                Projetos desenvolvidos
              </h2>
              <div className="sm:flex sm:justify-center mx-3 sm:mx-0 sm:space-y-0 space-y-3">
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
          </div>
            <div>
              <h2 className="text-gray-900 text-xl font-normal text-center pt-3 dark:text-gray-400">
                Projetos em desenvolvimento
              </h2>
            </div>

            <MyTabs/>
          </section>
          <section>
            <About />
          </section>
          <div className="flex justify-center">
          <Lgpd  />
          </div>

        </ThemeProvider>
      </div>
    </>
  );
}
