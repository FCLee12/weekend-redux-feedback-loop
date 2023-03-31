import { useHistory } from "react-router-dom";

function FeelingsRating() {
    console.log('FeelingsRating running');

    const history = useHistory();

    const toUnderstanding = () => {
        history.push('/understanding')
    }

    return(
        <>
            <h1>FeelingsRating</h1>
            <button onClick={toUnderstanding}>Next</button>
        </>
    )
}

export default FeelingsRating;