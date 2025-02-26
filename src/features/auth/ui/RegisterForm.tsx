import { Formik } from 'formik';
import Input from '../../../shared/ui/Input/Input';
import StyledForm from './auth.styles';
import { Link, useNavigate } from 'react-router';
import { schema } from '../model/validation';
import { useDispatch } from 'react-redux';
import { register } from '../model/authSlice';
import { Button } from '../../../shared/ui/LoginButton';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Formik
            validationSchema={schema.register}
            initialValues={{
                email: '',
                password: '',
                confirmPassword: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(
                    register({
                        email: values.email,
                        password: values.password,
                    }),
                );
                setTimeout(() => {
                    navigate('/login');
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                <StyledForm>
                    <h1>Регистрация</h1>
                    <Input
                        label="Почта"
                        name="email"
                        id="email"
                        placeholder="Введите почту"
                    />
                    <Input
                        label="Пароль"
                        name="password"
                        id="password"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Input
                        label="Подтвердите пароль"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Введите пароль повторно"
                        type="password"
                    />
                    <Button type="submit" disabled={isSubmitting}>
                        Зарегистрироваться
                    </Button>
                    <p>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </p>
                </StyledForm>
            )}
        </Formik>
    );
};

export default RegisterForm;
