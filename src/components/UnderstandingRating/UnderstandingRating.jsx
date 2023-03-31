import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function UnderstandingRating() {
    console.log('UnderstandingRating running');

    const history = useHistory();
    const dispatch = useDispatch();

    // Local state to hold input from input field
    const [understandingInput, setUnderstandingInput] = useState('')

    // Takes Understanding Rating input and moves it to Redux Store
        // On Next Button, navigates to SupportedRating page
    const toSupported = () => {
        if(understandingInput == '') {
            alert('Please enter in a number before trying to advance to the next page, thank you!')
        } else {
            dispatch({
                type: 'ADD_UNDERSTANDING_INPUT',
                payload: understandingInput
            })
            // To clear inputs
            setUnderstandingInput('');

            history.push('/supported')
        }
    }

    // Function to set UnderstandingInput local state
    const understandingInputLocal = (event) => {
        setUnderstandingInput(event.target.value)
    }

    return(
        <>
            <h2>How well are you understanding the content?</h2>
            <label>Understanding?</label>
            <input type='number' placeholder='Enter a number from 1-10' onChange={understandingInputLocal} value={understandingInput} />
            <button onClick={toSupported}>Next</button>
        </>
    )
}

export default UnderstandingRating;