import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Review() {
    const history = useHistory();

    const reviewFeeling = useSelector(store => store.feeling);
    const reviewUnderstanding = useSelector(store => store.understanding);
    const reviewSupport = useSelector(store => store.support);
    const reviewComments = useSelector(store => store.comments);

    // Click Handler -> dispatch, history.push
    const handleSubmit = (event) => {
        history.push('/thankyou')
    }
    return (
        <div>
            <h1>Review Your Feedback</h1>
            <h2>Feelings: {reviewFeeling} </h2>
            <h2>Understanding: {reviewUnderstanding}</h2>
            <h2>Support: {reviewSupport}</h2>
            <h2>Comments: {reviewComments}</h2>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review