import {useRef} from 'react';
import Card from "../components/ui/Card.js";
import classes from '../components/meetups/NewMeetupForm.module.css';
import {useNavigate} from 'react-router-dom';

function SignupForm(props) {

    const navigate = useNavigate();

    const nameInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPassword = nameInputRef.current.value;

        const userData = {
            name: enteredName,
            password: enteredPassword,
        };

        props.onAddProfile(userData);
    }

    return <div>
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" required id="name" ref={nameInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Password</label>
                    <input type="text" required id="password" ref={passwordInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Register</button>
                </div>
            </form>
        </Card>
    </div>
}

export default SignupForm;