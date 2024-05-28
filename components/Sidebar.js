import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ activeOption, isSidebarOpen }) => {

    return (
        <div>
            <div id="sidebar" className={`${styles.sidebar} ${isSidebarOpen ? styles.active : ''}`}>
                <div className={styles.top}>
                    <div className={styles.logo}></div>
                    <div className={styles.name}></div>
                </div>
                <ul className={styles.options}>
                    <li className={activeOption === 'home' ? `${styles.option} ${styles.active}` : styles.option} >
                        <a href="/home" className={styles.link}>
                            <i className={`bi bi-house-fill ${styles.icon}`}></i>
                            Home
                        </a>
                    </li>
                    <li className={activeOption === 'dashboard' ? `${styles.option} ${styles.active}` : styles.option}>
                        <a href="/dashboard" className={styles.link}>
                            <i className={`bi bi-graph-up ${styles.icon}`}></i>
                            Dashboard
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

