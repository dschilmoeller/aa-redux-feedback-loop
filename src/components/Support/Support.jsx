import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Support() {
    const history = useHistory();
    const dispatch = useDispatch();

    // in-component State Handlers
    const [support, setSupport] = useState(0)
    const handleStateChange = (event) => {
        setSupport(event.target.value)
    }

    // Click Handler -> dispatch, history.push
    const handleSubmit = (event) => {
        if (support != 0) {
            event.preventDefault();

            dispatch({
                type: 'UPDATE_SUPPORT',
                payload: support
            })
            history.push('/comments')
        } else {
            alert('Please put in a number')
        }
    }

    return (
        <div>
            <h1>How well are you being suppported?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={support}
                    onChange={handleStateChange}></input>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}

export default Support