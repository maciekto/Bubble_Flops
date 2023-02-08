
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FlexSection from './components/FlexSection'

import Separator from './components/Separator'
function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <FlexSection>
        Bam
      </FlexSection>
      <Footer />
    </div>
  )
}

export default App
