import React,{useState} from "react";
import Header from "../pages/Header"
// import {toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function BMI(){
  // const alert = () => toast("Enter Height and Weight");
   const [Height, setHeight] = useState(" ");
   const [Weight, setWeight] = useState(" ");
   const [BMI, setBMI] = useState(" ");

   const onSetHeight = e =>{
    const value = e.target.value;
    setHeight(value)
   }

   const onSetWeight = e =>{
    const value = e.target.value;
    setWeight(value)
   }
  function handleCompute() {
    if(Height === '' || Weight === ''){
     alert("Enter Height and Weight")
    }
    const bmi = Weight / [Height/100]**2;
    setBMI(bmi.toFixed(2));

       if(bmi <= 18.5){
        document.getElementById("underweight").style.color = "Blue";
        document.getElementById('underweightResult').innerHTML = bmi.toFixed(2);
       }else if(bmi >=18.5 && bmi <= 24.9){
        document.getElementById("normal").style.color = "green";
        document.getElementById('normalResult').innerHTML = bmi.toFixed(2);
       }else if(bmi >= 24.9 && bmi <= 29.9){
        document.getElementById("overweight").style.color = "yellow";
        document.getElementById('overweightResult').innerHTML = bmi.toFixed(2);
       }else if(bmi >= 30 && bmi <= 34.9){
        document.getElementById("obese").style.color = "Red";
        document.getElementById('obeseResult').innerHTML = bmi.toFixed(2);
       }else if(bmi >= 35){
        document.getElementById("extremely").style.color = "Red";
        document.getElementById('extremelyResult').innerHTML = bmi.toFixed(2);
       }
  }
   function Reset()
  {
      document.getElementById('height').value = '';
      document.getElementById('weight').value = "";

      document.getElementById("underweightResult").innerText="00";
      document.getElementById("normalResult").innerText="00";
      document.getElementById("overweightResult").innerText="00";
      document.getElementById("obeseResult").innerText="00";
      document.getElementById("extremelyResult").innerText="00";

      document.getElementById("underweight").style.color = "rgb(75 85 99)";
      document.getElementById("normal").style.color = "rgb(75 85 99)";
      document.getElementById("overweight").style.color = "rgb(75 85 99)";
      document.getElementById("obese").style.color = "rgb(75 85 99)";
      document.getElementById("extremely").style.color = "rgb(75 85 99)";
  }
  
  
    return(
        <>
        <Header />
          {/*  */}
          <section className="bg-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Calculate Your Body Mass Index</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <input id="height" type="Number" value={Height} placeholder="Enter Your Height in centimeter" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onSetHeight}
        //  onClick={Reset =>{
        //   document.getElementById("underweight").style.color = 'rgb(75 85 99)'
        // }} 
        />
      </div>
      <div className="relative flex-grow w-full">
        <input id="weight" type="Number"value={Weight} placeholder="Enter your weight in kg" className="w-full bg-gray-300 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "  onChange={onSetWeight}/>
      </div>
      <button id="compute" className="text-white bg-indigo-500 border-0 py-2 px-8  rounded text-xl" onClick={()=> {handleCompute()}}>Compute </button>
      <button  className="text-white bg-indigo-500 border-0 py-2 px-8  rounded text-xl" onClick={()=> {Reset()}}>Reset </button>
     
    </div>
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className=" sm:hidden text-xl font-medium  mt-16 text-gray-500">Look into the Index for Result.</h1>
    </div>
  </div>
 
</section>
        {/*  */}
        <section className="text-gray-600  bg-gray-400 body-font">
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium mb-2 text-gray-900">BODY MASS INDEX</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-1  tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tl rounded-bl">CATEGORIES</th>
            <th className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-300">RANGE</th>
            <th className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-300">WEIGHT</th>
            <th className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-300">Diet Plan</th>
            <th className="tracking-wider font-medium text-gray-900 text-sm bg-gray-300 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr id="underweight">
            <td className="px-4 py-3" >Under-Weight</td>
            <td className="px-4 py-3">Below - 18.5</td>
            <td className="px-4 py-3" id="underweightResult">00</td>
            <td className="px-4 py-3 text-lg text-gray-900 ">
           <a href="Diet"> <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></a>
            </td>
            
          </tr>
          <tr id="normal">
            <td className="border-t-2 border-gray-200 px-4 py-3" >Normal</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">18.5 - 24.9</td>
            <td className="border-t-2 border-gray-200 px-4 py-3" id="normalResult">00</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 ">
            <a href="Diet"> <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></a>
            </td>
            
          </tr>
          <tr id="overweight">
            <td className="border-t-2 border-gray-200 px-4 py-3" >Over-Weight</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">25 - 29.9</td>
            <td className="border-t-2 border-gray-200 px-4 py-3" id="overweightResult">00</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900 ">
            <a href="Diet"><svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></a></td>
           
          </tr>
          <tr id="obese">
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3" >Obese</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">30 - 34.9</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3" id="obeseResult">00</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 ">
            <a href="Diet"><svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></a></td>
            
          </tr>
          <tr id="extremely">
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3" >Extremely-Obese</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">35 - above</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3" id="extremelyResult">00</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900 ">
            <a href="Diet"><svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg></a></td>
            
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</section>
        </>
    )
}
export default BMI;