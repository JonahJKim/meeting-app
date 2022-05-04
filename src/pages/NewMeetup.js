import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom'

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch( // allows us to send HTTP requests
            'https://react-getting-started-7f5fe-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),      // typically in JSON format (most popular data form for transferring data)
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => navigate('/', {replace: true}))
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>
}

export default NewMeetupPage;