"use client";

import { useEffect, useState } from "react";

const className = "w-5 h-5"

const SunIcon = ()=>(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
);

const MoonIncon = ()=>(
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
);

export default function DarkModeSwitch(){
  const [isDark, setIsDark] = useState(true);
  useEffect(()=>{
    const theme = localStorage.getItem("color-theme") || "dark";
    if (theme === "light"){
      setIsDark(false);
    }else{
      setIsDark(true);
    }
  }, [])
  useEffect(()=>{
    const theme = isDark ? "dark":"light";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [isDark])

  const onClick = ()=>{
      setIsDark(v=>{
        const value = !v;
        const theme = value ? "dark":"light";
        localStorage.setItem("color-theme", theme);
        return value;
      });
  }
  return (
      <button onClick={onClick} className="ring-2 ring-blue-800 bg-slate-800 text-white dark:ring-blue-100 dark:bg-slate-100 dark:text-gray-800 rounded-full p-2">
        {
          isDark ? <SunIcon /> : <MoonIncon />
        }
      </button>
  );
}
