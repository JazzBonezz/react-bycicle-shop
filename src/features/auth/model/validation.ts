    import * as Yup from 'yup';

    const reqx = {
        email: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
    }

    const email = Yup.string()
        .matches(reqx.email, "Некорректная почта")
        .required("Введите почту!");

    const password = Yup.string()
        .matches(reqx.password, "Пароль должен содержать минимум 6 символов, хотя бы одну букву и одну цифру")
        .required()

    const confirmPassword = Yup.string()
        .oneOf([Yup.ref("password")], "Пароли должны совпадать")
        .required("Подтвердите пароль")

    export const schema = {
        custom: Yup.object().shape({
            email,
            password,
            confirmPassword
        })
    }