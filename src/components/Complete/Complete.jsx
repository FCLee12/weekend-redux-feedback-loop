import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Complete() {
    console.log('Complete running');

    const history = useHistory();
    const dispatch = useDispatch();

    const resetAll = () => {
        dispatch({
            type: 'RESET_ALL'
        })

        history.push('/');
    }

    return(
        <>
            <div>
                <h2>Feedback Submitted!</h2>
            </div>
            <div>
                <h2>Thank You!</h2>
                <button onClick={resetAll}>Leave New Feedback</button>
            </div>
        </>
    )
}

export default Complete;