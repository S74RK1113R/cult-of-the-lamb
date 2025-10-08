import { useEffect, useState } from "react";

export default function ThemeSwitcher() {

  const [isDark,setIsDark] = useState(
    localStorage.getItem('theme') === 'dark'
  )

  useEffect(()=>{
    if(isDark){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
      return
    }
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme','light')
    
  },[isDark])

  function toggleTheme(){
    
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      className="button-switch bg-neutral-100 w-10 h-6 mr-5 rounded-full flex flex-row items-center"
    >   
        <div className="w-5 h-5 border-2 bg-amber-500 rounded-full m-0.5 dark:ml-5 transition-all duration-100 dark:bg-zinc-400 dark:border-zinc-600 border-amber-700"></div>
    </button>
  );
}