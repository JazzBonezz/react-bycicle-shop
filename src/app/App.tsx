import routes from "./providers/routes";
import {RouterProvider} from "react-router";
import GlobalStyle from "../shared/styles/global.styles";
import {theme} from "./styles/theme.style";
import {ThemeProvider} from "styled-components";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    )
}

export default App
