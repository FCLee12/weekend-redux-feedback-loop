import { useHistory } from "react-router-dom";

function FeelingsRating() {
    console.log('FeelingsRating running');

    const history = useHistory();

    const toUnderstanding = () => {
        history.push('/understanding')
    }

    return(
        <>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input type='number' placeholder='Enter a number from 1-10'/>
            <button onClick={toUnderstanding}>Next</button>
        </>
    )
}

export default FeelingsRating;