import Header from "../pages/Header"
import workOut from "../img/workout.webp"
import Footer from "../pages/footer"
function Home() {
    return (
      <>
     <Header />
     <section className="text-gray-600 bg-gray-400 body-font">
      <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src={workOut}/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-serif  md:text-7xl text-5xl mb-4 font-medium text-gray-900">Make Your body shape</h1>
          <p className="mb-8 leading-relaxed">In here we will help you to shape and build your ideal body and live up your life to the fullest.</p>
          <div className="flex w-full md:justify-start justify-center items-end">
            
           
          </div>
         
          <div className="flex lg:flex-row md:flex-col">
            <button className="bg-[#35BDD0] inline-flex py-3 px-5 rounded-lg items-center hover:-translate-y-1 hover:scale-110">
              <span className="ml-4 flex items-start flex-row leading-none">
                <span className="text-xl text-white mb-1 ">Get Started</span>
                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"     
                   strokeWidth="2" className="w-4 h-4 ml-2 mt-1 text-white" viewBox="0 0 24 24">
                   <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </button>
           
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
    );
  }
  
  export default Home;