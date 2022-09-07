import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className='{ classes.logo }'>Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to={ '/favorites' }>Favorites</Link>
                    </li>
                    <li>
                        <Link to={ '/new' }>New</Link>
                    </li>
                    <li>
                        <Link to={ '/' }>All meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
                        
                        