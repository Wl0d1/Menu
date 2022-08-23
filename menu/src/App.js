import "./App.css";
import Header from './header/header.js'
import ButtonAll from './buttonAll/buttonAll.js'
import ButtonBreakfast from './buttonBreakfast/buttonBreakfast.js'
import ButtonLunch from './buttonLunch/buttonLunch.js'
import ButtonShakes from './buttonShake/buttonShake.js'

function App() {
  return <div className="App">
    <main>
    <section>
      <Header />
      <div>
        <ButtonAll />
        <ButtonBreakfast />
        <ButtonLunch />
        <ButtonShakes />
      </div>
    </section>
    </main>
  
  </div>;
}

export default App;
