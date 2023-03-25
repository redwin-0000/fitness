
function Header() {
   
     return (
       <header className="bg-gray-400 body-font">
       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
         <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0" href="link">
           <span className="ml-3 text-xl">Track Your Fitness</span>
         </a>
         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
           <a className="mr-5 hover:text-gray-900 cursor-pointer" href="Home">Home</a>
           <a className="mr-5 hover:text-gray-900 cursor-pointer" href="Bmi">BMI</a>
           {/* <a class="mr-5 hover:text-gray-900 cursor-pointer" href="Diet">Diet</a> */}
           <a className="mr-5 hover:text-gray-900 cursor-pointer" href="About">About</a>
         
         </nav>
         <button className="text-[#ffffff] inline-flex items-center bg-[#35BDD0] border-0 py-1 px-3 rounded-full text-base mt-4 md:mt-0  hover:-translate-y-1 hover:scale-110 ">Join Now
           <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
             <path d="M5 12h14M12 5l7 7-7 7"></path>
           </svg>
         </button>
       </div>
     </header>
     );
   }
   
   export default Header;