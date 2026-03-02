/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Venta de Leña Seca 🔥</h1>
        <p>Leña de calidad, seca y lista para usar. Entregas rápidas en tu zona.</p>
        <a href="https://wa.me/569XXXXXXXX" className="btn">
          Pedir por WhatsApp
        </a>
      </section>
      

      {/* BENEFICIOS */}
      <section className="features">
        <div>
          <h3>🌳 Leña seca</h3>
          <p>Menos humo, mayor duración.</p>
        </div>
        <div>
          <h3>🚚 Entrega rápida</h3>
          <p>Despacho en 24-48 horas.</p>
        </div>
        <div>
          <h3>💰 Buen precio</h3>
          <p>Calidad garantizada.</p>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="products">
        <h2>Precios</h2>
        <div className="cards">
          <div className="card">
            <h3>Media carga</h3>
            <p>$40.000</p>
          </div>
          <div className="card">
            <h3>Carga completa</h3>
            <p>$70.000</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <h2>¿Necesitas leña hoy?</h2>
        <a href="https://wa.me/569XXXXXXXX" className="btn">
          Contáctanos ahora
        </a>
      </section>
    </div>
  );
}