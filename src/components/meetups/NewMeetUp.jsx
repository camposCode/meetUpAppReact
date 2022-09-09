import React from 'react';
import NewMeetUpForm from './NewMeetUpForm';

const NewMeetUp = () => {
    function addmeetupHandler(meetupData){
        fetch(
            'https://meetupreact-718b0-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                header:{
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    return (
        <>
            <section>
                <NewMeetUpForm onAddMeetup={ addmeetupHandler }/>
            </section>
        </>
    )
}

export default NewMeetUp