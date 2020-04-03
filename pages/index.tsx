import styled from "styled-components";
import MainLayout from "../components/layout/MainLayout";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: 2em;
    text-align: left;
    padding: ${theme["padding-small"]} ${theme["padding-small"]};
  `}
`;

const Index = () => {
  return (
    <MainLayout>
      <StyledHeader>My Index page</StyledHeader>
    </MainLayout>
  );
};

export default Index;
