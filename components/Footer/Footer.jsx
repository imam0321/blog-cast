import React from 'react'
import Socials from '../Socials/Socials'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center px-8 py-4 bg-[#020617] text-white">
    <p>© 2025 BlogCast</p>
    <div className="flex items-center space-x-4">
      <Socials />
    </div>
  </footer>
  )
}
