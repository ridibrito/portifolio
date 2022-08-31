import Link from "next/link"

export default function Footer(){
    return(<><div>
        
        <footer className="bg-gray-200 dark:bg-gray-600 py-10 flex justify-center dark:border-2 border-gray-700">
            <div>
              <h3 className="text-sm text-center mx-3">Copyright © 2022 Ricardo Albuquerque. Todos os direitos reservados.
              </h3>
              <ul className="flex justify-center">
                <Link href="/politicaDePrivacidade"><a target="_blank"><li className="text-sm">Política de Privacidade</li></a></Link>
                <Link href="/termosDeUso"><a className="ml-4" target="_blank"><li className="text-sm">Termos de Uso</li></a></Link>
              
              </ul>
              </div>
          </footer>
        </div></>)
}