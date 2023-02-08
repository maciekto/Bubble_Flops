
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
      title: 'Why Bubble Flips?',
      description: `Bubble Flips are a great way to stand out and show your true self.
      They are designed in a way to get any attention possible. 
      It is almost impossible to not talking about them when you have just meet someone and trying to find topic to talk on.`
    },
    {
      title: 'Comfort and Safety',
      description: `Bubble flips have SIX diferent airbags, to ensure your safety when you accidently hit the furniture with the little finger.
      Airbags are removable to after an accident you can easily replace them with new ones.`
    },
    {
      title: 'Kids and Family',
      description: <>What about kids and family you might say.<br />
      Every inch of the Flop has been precisely enginered to shoot milions of bubbles every step.
      With this feature you really can't be bored!</>
    }
  ]

  return (
    <div className="App">
      <Header />
      <FlexSection>
        <HeroCard title={heroCardContent[0].title} description={heroCardContent[0].description}/>
        <HeroCard title={heroCardContent[1].title} description={heroCardContent[1].description}/>
        <HeroCard title={heroCardContent[2].title} description={heroCardContent[2].description}/>
      </FlexSection>
      <FlexSection>
        
      </FlexSection>
      <Footer />
    </div>
  )
}

export default App
