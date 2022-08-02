import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

const name = "ALARMANTE"

ReactDOM.createRoot(
  document.getElementById('app')
).render(
  <div>Estado de Contaminação: {name}</div>,
)

console.log('Funcionou tudo junto')