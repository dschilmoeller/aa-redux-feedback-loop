import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Understanding() {
    // setup
    const history = useHistory();
    const dispatch = useDispatch();

    // in-component State Handlers
    const [understanding, setUnderstanding] = useState(0)
    const handleStateChange = (event) => {
        setUnderstanding(event.target.value)
    }

    // Click Handler -> dispatch, history.push
    const handleSubmit = (event) => {
        if (understanding != 0) {
            event.preventDefault();
            
            dispatch({
                type: 'UPDATE_UNDERSTANDING',
                payload: understanding
            })
            history.push('/support')
        } else {
            alert('Please put in a number')
        }    
    }

    return (
        <div>
            <h1>How well are you understanding the content</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={understanding}
                    onChange={handleStateChange}></input>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Understanding