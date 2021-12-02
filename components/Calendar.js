import { useState } from "react";
import Month from "/components/Month";

const Calendar = ({ today }) => {
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());

  const dateToBuild = new Date(
    today.getFullYear(),
    currentMonth,
    today.getDate()
  );
  const prevMonth = new Date(dateToBuild.getTime());
  prevMonth.setDate(0);
  const thisMonth = new Date(dateToBuild.getTime());
  thisMonth.setMonth(thisMonth.getMonth() + 1);
  thisMonth.setDate(0);
  const days = thisMonth.getDate();

  return (
    <div>
      <h2>
        {thisMonth.getFullYear()}{" "}
        {thisMonth.toLocaleString("default", { month: "long" })}
      </h2>
      <Month
        monthNumber={currentMonth}
        monthName={thisMonth.toLocaleString("default", { month: "long" })}
        days={days}
        prevMDays={prevMonth.getDate()}
        prevMDaysLastWeek={prevMonth.getDay()}
      />
      <button onClick={() => setCurrentMonth(currentMonth - 1)}>Prev</button>
      <button onClick={() => setCurrentMonth(currentMonth + 1)}>Next</button>
    </div>
  );
};

export default Calendar;
