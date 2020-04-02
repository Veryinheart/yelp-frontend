import React from 'react';
import styles from './TopNav.module.css';

function TopNav() {
    return (
        <div className={styles['top-nav']}>
            <div className={styles.left}>
                <span>write review</span>
                <span>Events</span>
            </div>
            <div className={styles.right}>
                <span>login</span>
                <button className='button'>Sign up</button>
            </div>
        </div>
    )
}

export default TopNav
