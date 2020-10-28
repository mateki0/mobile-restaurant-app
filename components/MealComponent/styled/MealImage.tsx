import styled from "styled-components/native";

const MealImage = styled.Image<{ customWidth: number }>`
  border-radius: 25px;
  width: ${(props) => props.customWidth - 60}px;
  height: 220px;
  margin: 0 15px;
`;

export default MealImage;
