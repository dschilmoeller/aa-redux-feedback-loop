import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function ThankYou() {
    console.log(`Inside ThankYou`);
    return (
        <div>
            <h1>Thank you!</h1>
            <button>Leave New Feedback</button>
        </div>
    )
}

export default ThankYou