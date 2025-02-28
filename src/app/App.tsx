import routes from './providers/routes';
import { RouterProvider } from 'react-router';
import GlobalStyle from '../shared/styles/global.styles';
import { darkTheme, theme } from './styles/theme.style';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './providers/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useAppSelector } from './providers/store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeWrapper />
            </PersistGate>
        </Provider>
    );
}

function ThemeWrapper() {
    const themeToggle = useAppSelector((state) => state.theme.isDark);
    return (
        <ThemeProvider theme={themeToggle ? darkTheme : theme}>
            <GlobalStyle />
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}
export default App;
