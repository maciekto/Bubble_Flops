
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FlexSection from './components/FlexSection'
import HeroCard from './components/HeroCard'

import Separator from './components/Separator'
function App() {
  const heroCardContent = [
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    },
    {
      title: '',
      description: ''
    }
  ]

  return (
    <div className="App">
      <Header />
      <Hero />
      <FlexSection>
        <HeroCard title=""/>
      </FlexSection>
      <Footer />
    </div>
  )
}

export default App
