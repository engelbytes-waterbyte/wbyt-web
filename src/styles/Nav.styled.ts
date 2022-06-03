import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.transparent};
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  min-height: 100vh;
`;
