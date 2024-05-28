import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import styles from '../styles/Dashboard.module.css';
import Sidebar from './Sidebar';

function Dashboard() {
    const lineChartData1 = {
        labels: ['', '', '', '', '', '', '', ],
        datasets: [
            {
                label: '',
                data: [15, 25, 13, 20, 18, 20, 15,],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const lineChartData2 = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [65, 64, 60, 62, 58, 60, 65, 62, 70, 65],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const lineChartData3 = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [45, 50, 45, 47, 43, 45, 50, 47, 55, 50],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    const lineChartData4 = {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: '',
                data: [54, 55, 53, 54, 56, 52, 54, 51, 53, 54],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4
            }
        ]
    };

    return (
        <>
            <Sidebar activeOption="dashboard" />
            <div className={styles.cont}>
                <div className={styles.top}>
                    <h4 className={styles.title}>Agro Dashboard</h4>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.chartContainer}>
                        <div className={styles.topCharts}>
                            <div className={styles.chart}>
                                <h5 className={styles.heading}>Havanın Temperaturu</h5>
                                <hr className={styles.line} />
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
                                <h5 className={styles.heading}>Havanın rütubəti</h5>
                                <hr className={styles.line} />
                                <Line
                                    data={lineChartData2}
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
                        <div className={styles.chart}>
                            <h5 className={styles.heading}>Torpaq nəmlik dərəcəsi</h5>
                            <hr className={styles.line} />
                            <Line
                                data={lineChartData3}
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
                            <h5 className={styles.heading}>Suyun səviyyəsi</h5>
                            <hr className={styles.line} />
                            <Line
                                data={lineChartData4}
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
        </>
    );
}

export default Dashboard;


