import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewMeetUpForm from './NewMeetUpForm';

const NewMeetUp = () => {
    const history = useNavigate();
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
        ).then(() =>{
            history('/');
        });
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