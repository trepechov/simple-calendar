import _ from "lodash";
import styled from "styled-components";
import Day from "/components/Day";

const MonthSylted = styled.div`
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid gray;
  width: 350px;
`;

const Month = ({ days, prevMDays, prevMDaysLastWeek }) => {
  const daysLeft = 7 - ((prevMDaysLastWeek + days) % 7);
  return (
    <MonthSylted>
      {_.times(prevMDaysLastWeek, (i) => (
        <Day day={prevMDays - prevMDaysLastWeek + i + 1} gray />
      ))}
      {_.times(days, (i) => (
        <Day key={i} day={i + 1} />
      ))}
      {_.times(daysLeft, (i) => (
        <Day day={i + 1} gray />
      ))}
    </MonthSylted>
  );
};

export default Month;
