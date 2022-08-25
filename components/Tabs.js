import Link from "next/link";
import { useState } from "react";
import Image from "next/image";


export default function Tabs() {
  const [tabsState, setTabsState] = useState(1);
  const toggleTab = (index) => {
    setTabsState(index);
  };

  return (
    <>
      <div className="flex items-start max-w-7xl mx-auto mt-5">
        <div className="nav nav-tabs w-1/3 my-auto block">
          <div className="sm:justify-center mx-auto tabs active-tabs">
            <a
              href="#"
              className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 active:bg-sky-600 dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-2 stroke-sky-600 group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>

                <h3 className="text-slate-900 dark:text-gray-400 group-hover:text-white font-semibold">
                  Coruss
                </h3>
              </div>
              <p className="text-slate-500 group-hover:text-white dark:text-gray-400  text-sm">
                ERP - Gestão para consultoreactive:bg-sky-600s de planos de saúde.
              </p>
            </a>

            <a
              href="#"
              className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 active:bg-sky-600 dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600 mt-3">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-2 stroke-sky-600 group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>

                <h3 className="text-slate-900 dark:text-gray-400 group-hover:text-white font-semibold">
                  Consultas
                </h3>
              </div>
              <p className="text-slate-500 group-hover:text-white text-sm dark:text-gray-400  ">
                Gerenciamento de consultas e procedimentos médicos.
              </p>
            </a>

            <a
              href="#"
              className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 active:bg-sky-600 dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600 mt-3">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 stroke-2 stroke-sky-600 group-hover:stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>

                <h3 className="text-slate-900 group-hover:text-white font-semibold dark:text-gray-400">
                  Betoven
                </h3>
              </div>
              <p className="text-slate-500 group-hover:text-white text-sm dark:text-gray-400  ">
                Site plano de saúde pet - Betoven e
                CRM vendas e meio de pagamento.
              </p>
            </a>
          </div>
        </div>
        <div className="w-2/3">
          <div>
            <h3 className="text-gray-700 text-xl font-semibold dark:text-gray-400">
            Coruss
            </h3>
            <p className="dark:text-gray-300 mb-2 text-lg">
              Projeto próprio, pensado para consultores de vendas de planos de saúde.
            </p>
            <div className="flex-1">
            <Image
            src="/dashboardcoruss.png"
            alt="pagina coruss"
            width="700"
            height="400"
            />
            </div>
             <p className="text-lg">
             <Link href="https://coruss.online" target="_blank">
             <a className="text-blue-500"><strong className="text-gray-700 dark:text-gray-400">Acessar o projeto=</strong>https://corus.online</a>
             </Link>
            </p>
            
          </div>
         
        </div>
      </div>
    </>
  );
}
