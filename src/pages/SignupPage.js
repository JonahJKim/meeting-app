import {useRef} from 'react';
import Card from "../components/ui/Card.js";
import classes from '../components/meetups/NewMeetupForm.module.css';
import {useNavigate} from 'react-router-dom';
import SignupForm from '../components/SignupForm.js';

function SignupPage() {

    const navigate = useNavigate();
    function addProfileHandler(profileData) {
        fetch( // allows us to send HTTP requests
        'https://react-getting-started-7f5fe-default-rtdb.firebaseio.com/profiles.json',
        {
            method: 'POST',
            body: JSON.stringify(profileData),      // typically in JSON format (most popular data form for transferring data)
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => navigate('/home', {replace: true}))
    }

    return <div>
        <h1>Sign Up Here!</h1>
        <SignupForm onAddProfile={addProfileHandler}/>
    </div>
}

export default SignupPage;