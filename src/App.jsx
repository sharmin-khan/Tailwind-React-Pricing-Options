
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsCharts from './components/ResultsCharts/ResultsCharts'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch("PricingData.json").then(res=>res.json())

const marksPromise = axios.get('MarksData.json')

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <header>
      <main className='px-10'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOptions pricingPromise= {pricingPromise}></PricingOptions>
        </Suspense>

        <ResultsCharts></ResultsCharts>


        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
      </main>
    </header>
      
    </>
  )
}

export default App
