import {Outlet, useNavigate} from "react-router";

const Auth = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Авторизация</h1>
            <div>
                <button onClick={() => navigate('/auth/registration')}>Зарегистрироваться</button>
                <button onClick={() => navigate('/auth/login')}>Войти</button>
                <Outlet/>
            </div>
        </div>
    );
};

export default Auth;