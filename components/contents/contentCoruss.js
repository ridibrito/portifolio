import Image from "next/image";
import Link from "next/link";


export default function ContentCoruss() {
  return (
    <>
      <div
        className="group block mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3  dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600 mt-3"
      >
        <h2 className="text-gray-900 text-xl font-normal p-4 pb-0 dark:text-gray-400">
          Coruss
        </h2>
        <p className="text-gray-900 text-lg p-4 pb-0 dark:text-gray-400">
          ERP para consultores de planos de saúde.
        </p>
        <div className="sm:flex justify-center">
          <Image
            src="/dashboardcoruss.png"
            alt="dashboardCoruss"
            width="700"
            height="400"
          />
          <ul className="list-disc sm:w-1/3 text-gray-900 pb-3 dark:text-gray-400 px-5 ml-3 font-semibold">
            <li className="text-sm">
              Dashboard
              <p className="font-normal text-sm">
                Relatórios resumidos para rápida tomada de decisão.
              </p>
            </li>
            <li className="text-sm">
              CRM
              <p className="font-normal text-sm">
                Funil de vendas por etapas de Kanban.
              </p>
            </li>
            <li className="text-sm">
              ADM
              <p className="font-normal text-sm">
                Cadastros, acompanhamento de vendas, serviços e relatórios
                detalhados.
              </p>
            </li>
            <li className="text-sm">
              Financeiro
              <p className="font-normal text-sm">
                Contas a pagar, contas a receber, fluxo de caixa, bonificações e
                relatórios detalhados.
              </p>
            </li>
            <li className="text-sm">
              Inbox
              <p className="font-normal text-sm">
                Caixa de entrada para cadastro de emails pessoal e profissional.
              </p>
            </li>
            <li className="text-sm">
              WhatsApp
              <p className="font-normal text-sm">
                API para atendimento profissional com nome do atendente,
                chatbots....
              </p>
            </li>
            <li className="text-sm">
              Simulador
              <p className="font-normal text-sm">
                Cotações em tempo real de produtos adesão, PME, individual e
                familiar, integrado ao CRM.
              </p>
            </li>
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
          <Link href="/coruss">
            <a className="text-sky-600 text-sm pl-4">Ver mais...</a>
          </Link>
        </p>
        <p className="pl-4 text-sm pb-4">
          Link da aplicação:
          <Link href="https://coruss.online" target="_blank">
            <a className="ml-2 text-sky-600">app.coruss.online</a>
          </Link>
        </p>
      </div>
    </>
  );
}
