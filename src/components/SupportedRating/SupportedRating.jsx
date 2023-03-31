import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function SupportedRating() {
    console.log('SupportedRating running');

    const history = useHistory();
    const dispatch = useDispatch();

    // Local state to hold input from input field
    const [supportedInput, setSupportedInput] = useState('');

    // Takes Supported Rating input and moves it to Redux Store
        // On Next Button, navigates to Comments page
    const toComments = () => {
        if(supportedInput == '') {
            alert('Please enter in a number before trying to advance to the next page, thank you!')
        } else {
            dispatch({
                type: 'ADD_SUPPORTED_INPUT',
                payload: supportedInput
            })
            // To clear inputs
            setSupportedInput('');

            history.push('/comments')
        }
    }

    // Function to set SupportedInput local state
    const supportedInputLocal = (event) => {
        setSupportedInput(event.target.value)
    }

    return(
        <>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input type='number' placeholder='Enter a number from 1-10' onChange={supportedInputLocal} value={supportedInput} />
            <button onClick={toComments}>Next</button>
        </>
    )
}

export default SupportedRating;