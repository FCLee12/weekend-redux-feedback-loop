import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Review() {
    console.log('Review running');

    const history = useHistory();

    // Pulling info from Redux Store
    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const supported = useSelector(store => store.supported)
    const comments = useSelector(store => store.comments)

    // Submit button POST to database
        // set flagged property to default as false
    const addToDB = () => {
        const feedbackObj = {
            feeling: feeling,
            understanding: understanding,
            support: supported,
            comments: comments
        }

        axios.post('/feedback', feedbackObj)
        .then(response => {
            history.push('/complete')
        }).catch(error => {
            console.log('Error POSTing to DB', error);
        })
    }

    return(
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {supported}</p>
            <p>Comments: {comments}</p>
            <button onClick={addToDB}>Submit</button>
        </>
    )
}

export default Review;