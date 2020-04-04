import { Layout, Menu } from "antd";
import styled from "styled-components";
import Link from "next/link";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  ${({ theme }) => `
        background-color: ${theme["header-color"]};
        border-bottom: 1px solid ${theme["header-border-color"]};
        text-align: left;
        display: flex;
        li{
            font-size: ${theme["font-size-md"]};
        }
    `}
`;

const StyledMenu = styled(Menu)`
  border-bottom-width: 0;
  width: 50%;

  @media (max-width: 890px) {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  ${({ theme }) => `
        background-color: ${theme["header-color"]};
        width: 50%;
        display: flex;
        align-items: center;

        @media (max-width: 890px){
            visibility: hidden;
            width: 0;
        }
    `}
`;

const Title = styled.div`
  ${({ theme }) => `
        text-align: left;
        display: flex;
        line-height: 50px;
        div {
            width: 100%;
            padding-left: ${theme["padding-small"]};
        }
        h2 {
            display: inline;
            color: inherit;
        }
        img {
            width: 64px;
        }
        p {
            line-height: 0;
        }
    `}
`;

export const MainNavbar = () => (
  <StyledHeader>
    <TitleContainer>
      <Title>
        <img src="/logo.svg" alt="Recipe Sharing Logo" />
        <div>
          <h2>Recipe Sharing</h2>
          <p>A recipe discovery app powered by Next.js</p>
        </div>
      </Title>
    </TitleContainer>
    <StyledMenu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
      <Menu.Item key="/">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
    </StyledMenu>
  </StyledHeader>
);
