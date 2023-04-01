import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

function Complete() {
    console.log('Complete running');

    const history = useHistory();
    const dispatch = useDispatch();

    return(
        <>
            <div>
                <h2>Feedback Submitted!</h2>
            </div>
            <div>
                <h2>Thank You!</h2>
                <button></button>
            </div>
        </>
    )
}

export default Complete;