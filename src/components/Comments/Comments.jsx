import { useHistory } from "react-router-dom";

function Comments() {
    console.log('Comments running');

    const history = useHistory();

    const toReview = () => {
        history.push('/review')
    }

    return(
        <>
            <h1>Comments</h1>
            <button onClick={toReview}>Next</button>
        </>
    )
}

export default Comments;