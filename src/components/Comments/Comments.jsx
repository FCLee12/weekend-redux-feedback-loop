import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Comments() {
    // console.log('Comments running');

    const history = useHistory();
    const dispatch = useDispatch();

    // Local state to hold input from input field
    const [commentsInput, setCommentsInput] = useState('');

    // Takes Comments Rating input and moves it to Redux Store
        // On Next Button, navigates to Review page
    const toReview = () => {
            dispatch({
                type: 'ADD_COMMENTS_INPUT',
                payload: commentsInput
            })
        // To clear inputs
        setCommentsInput('');

        history.push('/review')
    }

    const toSupported = () => {
        history.push('/supported')
    }

    // Function to set SupportedInput local state
    const commentsInputLocal = (event) => {
        setCommentsInput(event.target.value)
    }

    return(
        <>
            <h2>Any comments you want to leave?</h2>
            <button onClick={toSupported}>Previous</button>
            <label>Comments</label>
            <input type='text' placeholder='Leave a comment' onChange={commentsInputLocal} value={commentsInput} />
            <button onClick={toReview}>Next</button>
        </>
    )
}

export default Comments;