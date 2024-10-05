import * as React from 'react';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import "./time.css"

export default function DigitalClock() {
    const [currentTime, setCurrentTime] = useState(dayjs());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(dayjs());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id='clock'>
            <h1>
                {currentTime.format('h')}
            </h1>
            <h1>
                {currentTime.format('mm')}
            </h1>
        </div>
    );
}
