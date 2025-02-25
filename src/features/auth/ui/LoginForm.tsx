import {Formik} from "formik";
import Input from "../../../shared/ui/Input/Input";
import StyledForm from "./auth.styles";
import {Link, useNavigate} from "react-router";
import {schema} from "../model/validation";
import {useDispatch} from "react-redux";
import {login} from "../../../features/auth/model/authSlice";

import { FaArrowRightLong } from "react-icons/fa6";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Formik
            validationSchema={schema.login}
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={(values) => {
                dispatch(login({ email: values.email, password: values.password }));
                navigate("/home");
            } }>


            <StyledForm>
                <h1>Вход</h1>
                <Input
                    label='Почта'
                    name="email"
                    id="email"
                    placeholder='Введите почту'/>
                <Input
                    label='Пароль'
                    name="password"
                    id="password"
                    placeholder='Введите пароль'
                    type = 'password'/>
                <button type="submit" >
                    Войти <FaArrowRightLong />
                </button>
                <p>Нет аккаунта? <Link to='/auth/registration'>Зарегистрироваться</Link></p>
            </StyledForm>

        </Formik>
    );
};

export default LoginForm;