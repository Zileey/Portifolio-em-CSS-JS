import { useState } from 'react'
import './App.css'
import Profile from './components/profile'
import Experience from './components/experience'
import Languages from './components/languages'
import Education from './components/education'
import Socials from './components/socials'
import ContactButton from './components/contactButton'

function App() {
  const [count, setCount] = useState(0)

  return (
	  <div className="app">
		<div className='left'>
			<Profile></Profile>
			<Experience></Experience>
		</div>

		<div className='right'>
			<Languages></Languages>
			<Education></Education>
			<Socials></Socials>
			<ContactButton></ContactButton>
		</div>
	  </div>
  )
}

export default App
