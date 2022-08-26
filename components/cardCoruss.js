export default function CardCoruss() {
  return (
    <>
     
        <div
          className="group block max-w-xs mx-auto rounded-lg p-6 bg-gray-100 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600 active:bg-sky-600 dark:active:bg-gray-900 dark:active:ring-gray-900 
              dark:bg-gray-600 dark:hover:ring-gray-600 cursor-pointer" 
        >
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
            ERP - Gestão para consultores de planos de saúde.
          </p>
        </div>
        
      
    </>
  );
}
