import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div class="hero min-h-screen bg-base-200 px-12">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                        <p>You have selected: {format(date, "PP")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;