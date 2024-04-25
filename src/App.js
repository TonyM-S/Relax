import React from 'react';
import './App.css';
import AmbianceCard from './components/AmbianceCard/AmbianceCard';
import ambiances from './ambiancesData';
import logo from './assets/Others/logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt={"Relax."} className="logo-image"/>
      </header>
      <main className="App-content">
        {ambiances.map(ambiance => (
          <AmbianceCard key={ambiance.id} ambiance={ambiance} />
        ))}
      </main>
      <footer className='footer'>
        <p>&copy; tonysalgueiro.com - 2024</p>
      </footer>
    </div>
  );
}

export default App;
