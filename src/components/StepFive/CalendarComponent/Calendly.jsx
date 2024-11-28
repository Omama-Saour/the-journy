import React from 'react';
import {useCalendlyEventListener, InlineWidget } from 'react-calendly';

const MyCalendlyComponent = () => {

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload), // onEventScheduled: is done succeffully 
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

    return (
            <InlineWidget url="https://calendly.com/omam907omam/30min" styles={{
              height: '1000px',
            }}
            // pageSettings={{
            //   backgroundColor: 'ffffff',
            //   hideEventTypeDetails: false,
            //   hideLandingPageDetails: false,
            //   primaryColor: '00a2ff',
            //   textColor: '4d5055'
            // }}
            />
    );
};

export default MyCalendlyComponent;
