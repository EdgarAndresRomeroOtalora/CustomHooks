//HooksApp.jsx

import { FetchComponent } from "./components/FetchComponent"
import { CounterComponent } from "./components/CounterComponent"
import { FormsComponent } from "./components/FormsComponent"
import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent"

export const HooksApp = () => {
  return (
    <>
      <h1>Aplicación de Hooks</h1>
      <hr />
      <CalculoPesadoComponent />
    </>
  )
}
