import MeetUpList from '../components/meetups/MeetUpList';

const allMeetUps = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
        'https://images.unsplash.com/photo-1530735606451-8f5f13955328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
        'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
        'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm3',
        title: 'This is a third meetup',
        image:
        'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
        'This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    return (
        <section>
        <h1>All Meetups</h1>
        <MeetUpList meetups={ allMeetUps } />
        </section>
    );
}

export default AllMeetupsPage;