import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import styled from 'styled-components';

const events = [{ title: 'Meeting', start: new Date() }];

const renderEventContent = (eventInfo) => (
  <>
    <b>{eventInfo.timeText}</b>
    <i>{eventInfo.event.title}</i>
  </>
);

const Calendar = () => {
  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        // events={events}
        eventContent={renderEventContent}
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  .fc {
    width: 50rem;
    direction: ltr;
    text-align: center;
    margin: auto;
    font-family: Arial, sans-serif;
  }

  .fc-toolbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .fc-toolbar-title {
    font-size: 24px;
    color: #7e57c2; /* Purple color */
    background-color: #f3e5f5;
    border-radius: 10px;
    padding: 10px 20px;
  }

  .fc-prev-button,
  .fc-next-button {
    background-color: transparent;
    border: none;
    color: #bdbdbd; /* Light gray color */
    font-size: 20px;
    cursor: pointer;
  }

  .fc-daygrid-day {
    background-color: #f3e5f5; /* Light purple background */
    border: 1px solid #e0e0e0; /* Light gray border */
    height: 60px;
  }

  .fc-daygrid-day.fc-day-today {
    background-color: #ce93d8; /* Highlighted day */
  }

  .fc-daygrid-day:hover {
    background-color: #e1bee7;
  }

  .fc-daygrid-day-number {
    color: #757575; /* Dark gray text color */
  }
`;

export default Calendar;
