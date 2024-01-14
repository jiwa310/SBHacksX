import React, { useState, useEffect } from 'react'

export default function Header() {
  return (
    <header className={`flex justify-between items-center pt-5 md:pt-3 pb-5 md:pb-3 px-6 sticky top-0 w-full font-league-spartan transition-transform duration-200 md:shadow-none shadow-md`} style={{backgroundColor: 'var(--color-background)', zIndex: 999}}>
      <div className="hidden md:block">
        <img src="Logo.svg" alt="Logo" className="h-15 w-auto" />
      </div>

      <nav>
        <ul className="flex space-x-5 md:space-x-10">
          <li><button className="text-cyan-400 hover:text-cyan-300 transition duration-200 hover:underline">Explore Resumes</button></li>
          <li><button className="text-cyan-400 hover:text-cyan-300 transition duration-200 hover:underline">Upload Resume</button></li>
        </ul>
      </nav>
    </header>
  )
}