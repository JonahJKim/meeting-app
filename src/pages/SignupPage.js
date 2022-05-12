import {useRef} from 'react';
import Card from "../components/ui/Card.js";
import classes from '../components/meetups/NewMeetupForm.module.css';
import {useNavigate} from 'react-router-dom';

function SignupPage() {

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

        fetch( // allows us to send HTTP requests
        'https://react-getting-started-7f5fe-default-rtdb.firebaseio.com/profiles.json',
        {
            method: 'POST',
            body: JSON.stringify(userData),      // typically in JSON format (most popular data form for transferring data)
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(() => navigate('/home', {replace: true}))

    }

    return <div>
        <h1>Sign Up Here!</h1>
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

export default SignupPage;