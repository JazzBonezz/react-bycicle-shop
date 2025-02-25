import {Outlet, useNavigate} from "react-router";
import {Container, Title, ButtonContainer, Button} from "./auth.styles";

const Auth = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Title>Авторизация</Title>
            <ButtonContainer>
                <Button onClick={() => navigate('/registration')}>Регистрация</Button>
                <Button onClick={() => navigate('/login')}>Войти</Button>
                <Outlet/>
            </ButtonContainer>
        </Container>
    );
};

export default Auth;