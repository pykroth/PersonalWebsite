import React from 'react';
import portfolio from '../Data/portfolio';
import PortfolioItem from './PortfolioItem';
import FadeIn from './FadeIn';
function Portfolio() {
   return (
      <div className="flex flex-col items-center justify-center p-4 md:p-8 max-w-screen-lg mx-auto h-screen">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {portfolio.map(project => (
               <PortfolioItem 
                  key={project.title} // Ensure you have a unique key for each item
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Portfolio;
