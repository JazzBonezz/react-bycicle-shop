import { Outlet, useNavigate } from 'react-router';
import { Container, Title, ButtonContainer } from './auth.styles';
import { Button } from '../../../shared/ui/LoginButton';

const Auth = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Авторизация</Title>
            <ButtonContainer>
                <Button onClick={() => navigate('/registration')}>
                    Регистрация
                </Button>
                <Button onClick={() => navigate('/login')}>Войти</Button>
                <Outlet />
            </ButtonContainer>
        </Container>
    );
};

export default Auth;
