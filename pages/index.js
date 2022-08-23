import Header from "../components/Header";
import Image from "next/image";
import { BsCheckSquareFill } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main className="max-w-6xl sm:flex items-center content-center mx-auto">
          <div className="sm:w-1/2">
            <h4 className="bg-sky-600 text-white px-3 py-1.5 font-semibold rounded w-60  ml-2 sm:ml-10 text-center  shadow-md mb-8">
              Front-End Developer
            </h4>

            <h1 className=" mt-3 ">
              <blockquote className="text-2xl sm:text-4xl text-slate-700 mx-2 sm:mx-10 font-normal">
                <q>Criatividade é a soma de inpiração e conhecimento</q>
              </blockquote>
            </h1>
            <div>
              <div>
                <div className="mt-5 sm:ml-10 flex justify-between py-3 sm:w-4/5 mx-2 bg-slate-100 px-4 shadow">
                  <Image src="/html.svg" alt="html" width="50" height="50" />
                  <Image src="/css.svg" alt="html" width="50" height="50" />
                  <Image src="/js.svg" alt="html" width="60" height="55" />
                  <Image src="/react.svg" alt="html" width="45" height="50" />
                  <Image src="/next-js.svg" alt="html" width="45" height="50" />
                  <Image
                    src="/bootstrap.svg"
                    alt="html"
                    width="60"
                    height="50"
                  />
                  <Image
                    src="/tailwind.svg"
                    alt="html"
                    width="50"
                    height="50"
                  />
                  <Image src="/styled.svg" alt="html" width="45" height="50" />
                </div>
              </div>
              
            </div>
            <div className="hidden ml-10 w-4/5 hover:ease-in hover:duration-300 text-sky-600 hover:font-bold font-semibold text-xl pt-3 pb-3 mt-5 sm:flex ring-1 ring-sky-600 justify-center hover:bg-sky-600 hover:text-white hover:shadow-md rounded  cursor-pointer ">
              Vamos Conversar?{" "}
            </div>
            
          </div>
          <div className="sm:flex sm:bg-gradient-to-b sm:from-slate-100 rounded-full">
              <Image
                src="/foto.png"
                alt="fotoRicardo"
                width="500"
                height="500"
              />
            </div>
        </main>
        <section className="bg-gray-100 mt-5 h-screen">aqui</section>
      </div>
    </>
  );
}
