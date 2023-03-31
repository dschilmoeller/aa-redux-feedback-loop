import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ThankYou() {
    const dispatch = useDispatch();
    const history = useHistory();

    const dispatchFeeling = useSelector(store => store.feeling);
    const dispatchUnderstanding = useSelector(store => store.understanding);
    const dispatchSupport = useSelector(store => store.support);
    const dispatchComments = useSelector(store => store.comments);

    const theFinalVariable = {
        feeling: dispatchFeeling,
        understanding: dispatchUnderstanding,
        support: dispatchSupport,
        comments: dispatchComments
    }

    const handleSubmit = () => {
        axios.post('/submitReview', theFinalVariable)
        .then(response => {
            dispatch({
                type: 'RESET_ALL_REDUCERS',
            })
            history.push('/')
        })
        .catch(err => {
            console.log(`Error`, err);
            alert('Error submitting to DB!!?!?')
        })
    }

    return (
        <div>
            <h1>Thank you!</h1>
            <button onClick={handleSubmit}>Leave New Feedback</button>
        </div>
    )
}

export default ThankYou