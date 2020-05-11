import React from 'react';
import styles from './Loading.module.css';
import Load from './giphy.gif';

const Loading = () => {
    return (
        <div className={styles.loading} >
            <img src={Load} alt="" />
        </div>
    );
}

export default Loading;
