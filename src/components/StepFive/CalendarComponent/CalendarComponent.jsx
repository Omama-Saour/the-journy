import React, { useState } from 'react';
import Calendar from 'react-calendar';
import TimeSlots from "./TimeSlots";

import Calendly from './Calendly';
import './CalendarComponent.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    // Get today's date for disabling past dates
    const today = new Date();

    return (
        <div className="flex overflow-hidden flex-col justify-center p-8 bg-white max-w-[796px] rounded-[31px] shadow-[8px_8px_24px_rgba(32,32,32,0.1)] text-neutral-800 max-md:px-5">
            <h2 className="text-xl leading-9 text-right max-md:max-w-full">
                وصلت لخطوتك الاخير في الرحلة! الان يمكنك التواصل مع متخصصين لمساعدتك في شق طريقك المهني
            </h2>
            <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                 <div dir='rtl' className="flex flex-col justify-center self-center p-6 max-w-full text-center text-base font-medium bg-white rounded-2xl max-md:px-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={date}
                        locale="ar-SR"
                        className="react-calendar"
                        minDate={today} 
                    />
                    {/* <p className="mt-4 text-center">
                        Selected Date: {date.toDateString()}
                    </p> */}
                </div> 
                <div className="flex flex-col justify-center mt-6 w-full text-right max-md:mt-10 max-md:max-w-full">
                    <h3 className="self-end text-xl leading-9">
                        اختار الفتره الزمنية المناسبة
                    </h3>
                    <TimeSlots />
                </div>
                 <Calendly />
            </div>
        </div>
    );
};

export default CalendarComponent;