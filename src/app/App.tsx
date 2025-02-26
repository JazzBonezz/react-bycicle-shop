import routes from './providers/routes';
import { RouterProvider } from 'react-router';
import GlobalStyle from '../shared/styles/global.styles';
import { darkTheme, theme } from './styles/theme.style';
import { ThemeProvider } from 'styled-components';
import { store } from './providers/store';
import { Provider } from 'react-redux';

function App() {
    const isToggleTheme = true;

    return (
        <Provider store={store}>
            <ThemeProvider theme={isToggleTheme ? theme : darkTheme}>
                <GlobalStyle />
                <RouterProvider router={routes} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
