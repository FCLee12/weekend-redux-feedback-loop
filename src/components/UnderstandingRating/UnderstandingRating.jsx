import { useHistory } from "react-router-dom";

function UnderstandingRating() {
    console.log('UnderstandingRating running');

    const history = useHistory();

    const toSupported = () => {
        history.push('/supported')
    }

    return(
        <>
            <h1>UnderstandingRating</h1>
            <button onClick={toSupported}>Next</button>
        </>
    )
}

export default UnderstandingRating;