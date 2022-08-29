import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const parent = {
  variantA: { scale: 1.25 },
  variantB: { scale: 0.9 },
};
export default function ContentCoruss() {
  return (
    <>
      <div
        className="group block mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3  dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600 mt-3"
      >
        <h2 className="text-gray-900 text-xl font-normal p-4 pb-0 dark:text-gray-400">
          Betoven
        </h2>
        <p className="text-gray-900 text-lg p-4 pb-0 dark:text-gray-400">
          Plano de saúde para Pet. - Site.
        </p>
        <div className="sm:flex justify-center">
          <Image
            src="/betoven.png"
            alt="dashboardCoruss"
            width="300"
            height="400"
          />
          <ul className="list-disc sm:w-1/3 text-gray-900 pb-3 dark:text-gray-400 px-5 ml-3 font-semibold">
            <li>
              Cadastro de consultas e procedimentos
              <p className="font-normal text-sm">
                Não perca mais uma consulta marcada.
              </p>
            </li>
            <li>
              Medicamentos
              <p className="font-normal text-sm">
                Registre os medicamentos ou tratamentos passados durante a consulta.
              </p>
            </li>
           
          
            <li>
              Histórico
              <p className="font-normal text-sm">
                Após a consulta, registre seu próprio prontoário.
              </p>
            </li>
            <div className="mt-3">
            <p className="font-normal ">
               Tenha controle da sua saúde ou de quem você ama, na palma da sua mão.
              </p>
            </div>
            <h2 className="mt-3">WEB E MOBILE</h2>
            
          
           
            <h3 className="text-sm mt-2">Tecnologias usadas no projeto: </h3>
            <div className="flex space-x-2.5">
              <div>
                <Image src="/html.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/css.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/next-js.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/tailwind.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/prisma-3.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/docker.svg" alt="html" width="30" height="30" />
              </div>
              <div>
                <Image src="/postgresql.svg" alt="html" width="30" height="30" />
              </div>
            </div>
          </ul>
        </div>

        <p>
          <Link href="/consultas">
            <a className="text-sky-600 text-sm pl-4">Ver mais...</a>
          </Link>
        </p>
        <p className="pl-4 text-sm pb-4">
          Link da aplicação:
          <Link href="https://https://betoven.vercel.app/" target="_blank">
            <a className="ml-2 text-sky-600">https://betoven.vercel.app/</a>
          </Link>
        </p>
      </div>
    </>
  );
}
