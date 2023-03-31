import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();

    // in-component State Handlers
    const [comments, setComments] = useState('')
    const handleStateChange = (event) => {
        setComments(event.target.value)
    }

    // Click Handler -> dispatch, history.push
    const handleSubmit = (event) => {
        if (comments) {
            event.preventDefault();

            dispatch({
                type: 'UPDATE_COMMENTS',
                payload: comments
            })
            history.push('/thankyou')
        } else {
            alert('Please enter a comment!')
        }
    }

    return (
        <div>
        <h1>Any comments you want to leave</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={comments}
                onChange={handleStateChange}></input>
            <button type="submit">Next</button>
        </form>
    </div>
    )
}

export default Comments