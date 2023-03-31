import { useHistory } from "react-router-dom";

function SupportedRating() {
    console.log('SupportedRating running');

    const history = useHistory();

    const toComments = () => {
        history.push('/comments')
    }

    return(
        <>
            <h1>SupportedRating</h1>
            <button onClick={toComments}>Next</button>
        </>
    )
}

export default SupportedRating;