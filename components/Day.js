import styled from "styled-components";

const Day = ({ day, gray }) => {
  return <StyledDay gray={gray}>{day}</StyledDay>;
};

const StyledDay = styled.div`
  border: 1px solid lightgray;
  box-sizing: border-box;
  width: 50px;
  color: ${(props) => (props.gray ? "lightgray" : "black")};
`;

export default Day;
