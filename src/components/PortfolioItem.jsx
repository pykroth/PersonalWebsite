import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
      >
         <img
            src={imgUrl}
            alt="portfolio" 
            className="w-full h-18 md:h-24 object-cover cursor-pointer"
         />
         <div className="w-full p-2">
            <h3 className="text-sm md:text-md dark:text-white mb-1 md:mb-1.5 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-1 flex-row items-center justify-start text-xs dark:text-white">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-1 py-0.5 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
}

export default PortfolioItem;
