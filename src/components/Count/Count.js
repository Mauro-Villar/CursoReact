import { useState } from 'react'
import { useEffect} from 'react'

const Count = () => {
    const [count, setCount] = useState(1)

    const decrement =() => {
        if(count > 1)
        setCount(count - 1)
    }

    const increment =() => {
        setCount(count + 1)
    }
    
    return (
        <div>
            <h1>Contador</h1>
            <h2>{count}</h2>
            <button onClick= {decrement}>restar</button>
            <button onClick= {increment}>sumar</button>
        </div>
    )
}

export default Count