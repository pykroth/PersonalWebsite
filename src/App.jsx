import { useState } from 'react'
import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intros from './components/Intros';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import FadeIn from './components/FadeIn';
import Title from './components/Title';
function App() {
  
  
  return (
   <>

		<div className="bg-green-50  text-stone-900 dark:text-stone-300 min-h-screen font-inter">
			<div className="max-w-5xl w-11/12 mx-auto">
				<FadeIn>
        <Intros />
        </FadeIn>
        <FadeIn>
        <Title className="mb-4">Projects</Title>
                        <Portfolio />
                    </FadeIn>
                    <FadeIn>
                    <Title className="mb-4">Timeline</Title>
                        <Timeline />
                    </FadeIn>
                    <FadeIn>
                        <Contact />
                    </FadeIn>
                    <FadeIn>
                        <Footer />
                    </FadeIn>
			</div>
		</div>
	 </>


      
      
   
  )
}

export default App
