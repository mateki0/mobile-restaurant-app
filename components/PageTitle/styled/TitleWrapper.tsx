import styled from "styled-components/native";

const TitleWrapper = styled.View<{ home?: boolean }>`
  width: 100%;
  display: flex;
  background-color: #efefef;
  padding: 0 10px;
  margin-top: ${(props) => (props.home ? "0" : "50px")};
`;
export default TitleWrapper;
