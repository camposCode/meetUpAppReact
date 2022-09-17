import { useEffect } from 'react';
import { useState } from 'react';
import MeetUpList from '../components/meetups/MeetUpList';


function AllMeetupsPage() {
    const[isLoading, setIsLoading] = useState(true);
    const[loadedMeetups, setLoadedMeetup] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://meetupreact-718b0-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json();
        }).then(data =>{

            const meetups = [];
            for (const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }


            setIsLoading(false); 
            setLoadedMeetup(meetups);
        }); 
    }, [])

    if(isLoading){
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
        <h1>All Meetups</h1>
        <MeetUpList meetups={ loadedMeetups } />
        </section>
    );
}

export default AllMeetupsPage;