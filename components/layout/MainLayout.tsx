import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";
import { GlobalStyle } from "../../utils/globalStyle";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
