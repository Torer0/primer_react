import { useState } from "react"

function counter()  {
    const [counter, setCounter] = useState(0)
    const onClick = () => {
      setCounter( (estado) => estado+1)
      setCounter( (estado) => estado+1)
    }
    return (
      <div>
        <p>{counter}</p>
        <button onClick={onClick}>Mais 2 </button>
      </div>
    )
  }
  export default counter