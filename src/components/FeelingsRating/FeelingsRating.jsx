import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function FeelingsRating() {
    console.log('FeelingsRating running');

    const history = useHistory();
    const dispatch = useDispatch();

    // Local state to hold input from input field
    const [feelingInput, setFeelingInput] = useState('')

    // Takes Feeling Rating input and moves it to Redux Store
        // On Next Button, navigates to UnderstandingRating page
    const toUnderstanding = () => {
        if(feelingInput == '') {
            alert('Please enter in a number before trying to advance to the next page, thank you!')
        } else {
            dispatch({
                type: 'ADD_FEELING_INPUT',
                payload: feelingInput
            })
            // To clear inputs
            setFeelingInput('');

            history.push('/understanding')
        }
    }
    
    // Function to set FeelingInput local state
    const feelingInputLocal = (event) => {
        setFeelingInput(event.target.value)
    }

    return(
        <>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input type='number' placeholder='Enter a number from 1-10' onChange={feelingInputLocal} value={feelingInput} />
            <button onClick={toUnderstanding}>Next</button>
        </>
    )
}

export default FeelingsRating;