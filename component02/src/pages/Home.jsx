import React from 'react'
import { NavLink } from 'react-router'
import ThemeToggleButton from '../component/ThemeToggleButton'

export default function Home() {
  return (
    <div style={{ padding: '20px',display:'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Home Page</h1>
      <NavLink to="/page1">Page 1</NavLink>
      <NavLink to="/page2">Page 2</NavLink>
      <ThemeToggleButton />
    </div>
  )
}
