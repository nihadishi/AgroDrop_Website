import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Sidebar from './Sidebar';
import { Line, Bar } from 'react-chartjs-2';

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const containerClass = isSidebarOpen ? `${styles.container} ${styles.containerWithSidebar}` : styles.container;
    const activeOption = 'home'

    const lineChartData = {
        labels: ['2012','2014','2016','2018','2020','2022','2026','2028','2030', '2032'],
        datasets: [
            {
                label: '',
                data: [5900, 5800, 6200, 6400, 6800, 7300, 6200, 5900, 5000, 3900],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: function(context) {
                    if (context.dataIndex === 5) {
                        return 'red';
                    }
                    return 'rgb(75, 192, 192)';
                },
                tension: 0.1
            }
        ]
    };
    
    const lineChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 8000,
                ticks: {
                    stepSize: 2000
                }
            }
        }
    };
    
    
    
    
    

    const lineChartData1 = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [1, 2, 2, 4, 4, 5, 6, 6, 8, 7],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const barChartData1 = {
        labels: ['', '', '', '', '', '','', '', '', '', '', '','', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [12, 7, 8, 15, 20, 18, 11, 13, 16, 23, 19, 14, 10, 6, 17, 21, 9],
                backgroundColor: [

                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }
        ]
    };

    const barChartData2 = {
        labels: ['', '', '', '', '', '','', '', '', '', '', '','', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [29, 12, 37, 56, 21, 8, 43, 65, 30, 41, 18, 52, 5, 79, 34, 91, 14],
                backgroundColor: [

                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }
        ]
    };

    const barChartData3 = {
        labels: ['', '', '', '', '', '','', '', '', '', '', '','', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [43, 55, 12, 34, 68, 23, 80, 41, 62, 29, 80, 15, 7, 92, 37, 50, 18],
                backgroundColor: [

                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }
        ]
    };
    
    return (
        <>
            <div className={containerClass}>
                {isSidebarOpen && <Sidebar activeOption={activeOption}/>}
                <div className={`${styles.cont} ${isSidebarOpen ? styles.containerWithMargin : ''}`}>
                    <div className={styles.top}>
                        <button className={`btn btn-primary ${styles.toggleButton}`} onClick={toggleSidebar}>&#9776;</button>
                        <hr className={styles.line} />
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.chartContainer}>
                            <div className={styles.topCharts}>
                                <div className={styles.chart}>
                                    <h6 className={styles.heading}>Hava temperaturu</h6>
                                    <Bar 
                                        data={barChartData1}
                                        options={{
                                            scales: {
                                                y: {
                                                    type: 'linear',
                                                    beginAtZero: true
                                                }
                                            }
                                        }} 
                                    />
                                </div>
                                <div className={styles.chart}>
                                    <h6 className={styles.heading}>Hava Rütubət</h6>
                                    <Bar 
                                        data={barChartData2}
                                        options={{
                                            scales: {
                                                y: {
                                                    type: 'linear',
                                                    beginAtZero: true
                                                }
                                            }
                                        }} 
                                    />
                                </div>
                                <div className={styles.chart}>
                                    <h6 className={styles.heading}>Torpaq nəmlik dərəcəsi</h6>
                                    <Line 
                                        data={lineChartData1} 
                                        options={{
                                            scales: {
                                                y: {
                                                    type: 'linear',
                                                    beginAtZero: true
                                                }
                                            }
                                        }}
                                    />
                                </div>
                                <div className={styles.chart}>
                                    <h6 className={styles.heading}>Yağışın səviyyəsi</h6>
                                    <Bar 
                                        data={barChartData3}
                                        options={{
                                            scales: {
                                                y: {
                                                    type: 'linear',
                                                    beginAtZero: true
                                                }
                                            }
                                        }} 
                                    />
                                </div>
                            </div>
                            <div className={styles.bottomCharts}>
                                <div className={styles.chartBottom}>
                                    <div className={styles.heading}>
                                        <h6 className={styles.pre}>Bizdən əvvəl</h6>
                                        <h6 className={styles.after}>Bizdən sonra</h6>
                                    </div>
                                    <hr className={styles.line} />
                                    <Line 
                                        className={styles.data}
                                        data={lineChartData} 
                                        options={{
                                            scales: {
                                                y: {
                                                    type: 'linear',
                                                    beginAtZero: true
                                                }
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

