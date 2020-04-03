import { ThemeProvider } from "styled-components";
import { theme } from "../../utils/theme";

const MainLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainLayout;
