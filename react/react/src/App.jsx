import Message from './componets/message'
import Counter from './componets/Counter'
import Header from './componets/header'
import "./mensaje.css"
import Footer from './componets/Footer'
import Main from './componets/Main'

function App() {

  return (
    <>
    <div><h1>Botones</h1></div>
    <Message classList= "mensaje" text="Desde un boton" />
    <Message text="Desde otro boton" />
  <Counter />
  <Header text="emcabezado " />
  <Main text="hola"/>
  <Footer text="pie de pagina" />
    </>
  )
}

export default App
