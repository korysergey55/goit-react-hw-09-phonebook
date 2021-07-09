import styled from "styled-components";

export const HeaderConteinerStyled = styled.header`
 .headerConteiner {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  font-size: 30px;
  font-weight: 700;
 }
 .nawLink {
  padding: 7px;
  text-decoration: none;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
 }
 .nawLinkActive {
  color: #f70202;
 }
 .nawLink:hover {
  background-color: white;
 }
`;
