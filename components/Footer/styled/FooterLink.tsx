import styled from "styled-components/native";

const FooterLink = styled.Text<{ margin?: string }>`
  color: #fff;
  margin-right: ${(props) => (props.margin ? props.margin : "0")};
`;
export default FooterLink;
