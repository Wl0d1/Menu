import "./App.css";
import Header from './header/header.js'
import ButtonAll from './buttonAll/buttonAll.js'
import ButtonBreakfast from './buttonBreakfast/buttonBreakfast.js'

function App() {
  return <div className="App">
    <main>
    <section>
      <Header />
      <div>
        <ButtonAll />
        <ButtonBreakfast />
      </div>
    </section>
    </main>
  
  </div>;
}

export default App;
