import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-7f5fe-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),      // typically in JSON format (most popular data form for transferring data)
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ); // allows us to send HTTP requests
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>
}

export default NewMeetupPage;