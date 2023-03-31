import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Review() {
        // setup
        const history = useHistory();
        // const dispatch = useDispatch();
    
        // in-component State Handlers
        const [feeling, setFeeling] = useState(0)
        const handleStateChange = (event) => {
            setFeeling(event.target.value)
        }
    
        // Click Handler -> dispatch, history.push
    
    return (
        <div>
            <h1>Review Your Feedback</h1>
            <h2>Feelings: A number </h2>
            <h2>Understanding: A number</h2>
            <h2>Support: A number</h2>
            <h2>Comments: Some words</h2>
            <button>Submit</button>
        </div>
    )
}

export default Review