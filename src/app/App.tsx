import routes from "./providers/routes.tsx";
import {RouterProvider} from "react-router";
import GlobalStyle from "../shared/styles/global.styles.ts";
import {theme} from "./styles/theme.style.ts";
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
