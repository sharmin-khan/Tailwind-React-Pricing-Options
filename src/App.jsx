
import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultsCharts from './components/ResultsCharts/ResultsCharts'


const pricingPromise = fetch("PricingData.json").then(res=>res.json())

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
      </main>
    </header>
      
    </>
  )
}

export default App
