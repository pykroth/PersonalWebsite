import React from 'react';

function Intro() {
   return (
      <div className="h-screen flex items-center justify-center flex-col text-center">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Jordan Pho</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            {/* Add any additional information here if needed */}
         </p>
      </div>
   );
}

export default Intro;
