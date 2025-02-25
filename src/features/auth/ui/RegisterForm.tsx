import {Formik} from "formik";
import Input from "../../../shared/ui/Input/Input.tsx";
import StyledForm from "./register.styles.ts";
import {Link} from "react-router";
import {schema} from "../model/validation.ts";

const RegisterForm = () => {
    return (
        <Formik
            validationSchema={schema.custom}
            initialValues={{
                email: "",
                password: "",
                password_confirmation: "",
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
                <Input
                    label='Подтвердите пароль'
                    name="confirm_password"
                    id="confirm_password"
                    placeholder='Введите пароль повторно'
                    type = 'password'/>
                <button>
                    Продолжить
                </button>
                <p>Уже есть аккаунт? <Link to='/login'>Войти</Link></p>
            </StyledForm>
        </Formik>
    );
};

export default RegisterForm;