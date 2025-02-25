import routes from "./providers/routes";
import {RouterProvider} from "react-router";
import GlobalStyle from "../shared/styles/global.styles";
import {theme} from "./styles/theme.style";
import {ThemeProvider} from "styled-components";
import {store} from "./providers/store";
import {Provider} from "react-redux";

function App() {
;

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <RouterProvider router={routes}/>
            </ThemeProvider>
        </Provider>
    )
}

export default App
