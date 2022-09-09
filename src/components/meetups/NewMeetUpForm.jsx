import React, { useRef } from 'react';
import Card from '../UI/Card';
import classes from './NewMeetUpForm.module.css';

const NewMeetUpForm = () => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e){
        e.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        

    }

    return (
        <div className={ classes.cardContent }>
            <Card>
                <form action="" 
                    className={ classes.form } 
                    onSubmit={ submitHandler }>
                    <div className={ classes.control }>
                        <label htmlFor="">MeetUp Title</label>
                        <input 
                            type="text" 
                            required
                            id='title'
                            placeholder='insert new MeetUp'
                            ref={ titleInputRef }/>
                    </div>
                    <div className={ classes.control }>
                        <label 
                            htmlFor="image"
                        >URL</label>
                        <input 
                            type="url" 
                            required
                            id='image'
                            placeholder='insert MeetUp image'
                            ref={ imageInputRef }/>
                    </div>
                    <div className={ classes.control }>
                        <label 
                            htmlFor="address"
                        >Address</label>
                        <input 
                            type="text" 
                            required
                            id='address'
                            placeholder='insert MeetUp image'
                            ref={ addressInputRef }/>
                    </div>
                    <div className={ classes.control }>
                        <label 
                            htmlFor="description"
                        >Description</label>
                        <textarea 
                            name="" 
                            id="description" 
                            rows="5"
                            required
                            placeholder='insert MeetUp Description'
                            ref={ descriptionInputRef }>
                        </textarea>
                    </div>
                    <div className={ classes.actions }>
                        <button>Add MeetUp</button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default NewMeetUpForm