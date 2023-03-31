import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Feeling() {
    // setup
    const history = useHistory();
    const dispatch = useDispatch();

    // in-component State Handlers
    const [feeling, setFeeling] = useState(0)
    const handleStateChange = (event) => {
        setFeeling(event.target.value)
    }

    // Click Handler -> dispatch, history.push
    const handleSubmit = (event) => {
        if (feeling != 0) {
            event.preventDefault();
            console.log(`Feeling:`, feeling);
            dispatch({
                type: 'UPDATE_FEELING',
                payload: feeling
            })
            history.push('/understanding')
        } else {
            alert('Please put in a number')
        }
        
    }

    return (
        <div>
            <h1>How are you feeling today</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={feeling}
                    onChange={handleStateChange}></input>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Feeling