import { useSelector } from "react-redux";

function Review() {
    console.log('Review running');

    const feeling = useSelector(store => store.feeling)
    const understanding = useSelector(store => store.understanding)
    const supported = useSelector(store => store.supported)
    const comments = useSelector(store => store.comments)

    return(
        <>
            <h2>Review Your Feedback</h2>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {supported}</p>
            <p>Comments: {comments}</p>
            <button>Submit</button>
        </>
    )
}

export default Review;