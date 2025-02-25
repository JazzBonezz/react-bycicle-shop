import {Formik} from "formik";
import Input from "../../../shared/ui/Input/Input";
import StyledForm from "./auth.styles";
import {Link} from "react-router";
import {schema} from "../model/validation";

const RegisterForm = () => {
    return (
        <Formik
            validationSchema={schema.custom}
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={() => console.log("onSubmit")}>
            <StyledForm>
                <h1>Регистрация</h1>
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
                <button>
                    Войти
                </button>
                <p>Нет аккаунта? <Link to='/login'>Зарегистрироваться</Link></p>
            </StyledForm>
        </Formik>
    );
};

export default RegisterForm;