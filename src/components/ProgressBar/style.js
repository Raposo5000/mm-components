import styled from "styled-components";

export const BarBackground = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 100px;
  height: 10px;
  background: #bdbdbd;
  border-radius: 0.5rem;
  /* box-shadow: 4px 4px 5px #4d4d4d; */
`;

export const ProgressBarActive = styled.div`
  width: ${({range}) => range > 100 ? 100 : range}px;
  height: 10px;
  background: red;
  border-radius: 0.5rem;
  box-shadow: 3px 0px 5px #4d4d4d;
`;
