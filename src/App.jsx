import { useState } from "react"
import {Buscador} from "./Buscador"
import { GridGifs } from "./GridGifs"
const nombre = 'Torero'
const Ejemplo = 
    <p><b>Gaaaaaaaa </b>Parrafo de ejemplo gdsgs gad
      dgsdgsgsdgsgdsdgsdg
      dgsdgdsgsgsdgsdgsdgsdg
    </p>
const array = ['ana','juan','gaaaaa']
//let num = 1;

function App() {
//estado
const [valorInput,setValorInput] = useState('')
const [num,setNum] = useState('')
const [gifs,setGifs] = useState([])
const sumar = () => {
  setNum(num+'a')
  console.log(num)
}
const onChange = (evento)=> {
  const valor = evento.target.value
  setValorInput(valor)
}
//ciclo de vida
const getGifs = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=mKTM13vNM5f7K2xTg6nBshB0VoZ6sNMo&q=${query}`
  const response = await fetch(url)
  const data = await response.json();
  console.log(data)
  return data.data
}
const onSubmit = async (evento) => {
  evento.preventDefault()
  const gifs = await getGifs(valorInput)
  setGifs(gifs)
}
//JSX
  return (
   <div className='App'>
    <Buscador 
      valorInput = {valorInput}
      onChange = {onChange}
      onSubmit = {onSubmit}
    />

    <GridGifs
      gifs ={gifs}
    />
      <h1>ga {nombre}</h1>
      <input onChange={onChange} />
        <p>
          {valorInput}
        </p>
      
      {Ejemplo}
      {array}

      <button onClick={sumar}>+1</button>
      <p>{num}</p>

      <form onSubmit={onSubmit}>
        <input value={valorInput} onChange={onChange} />
      </form>
      {
        gifs.map(gif => (
          <img key={gif.id} src={gif.images.original.url} alt={gif.tittle} />
        )
          
        )
      }

   </div>
  )
}

export default App
