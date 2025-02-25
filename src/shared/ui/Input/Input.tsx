import {Field, ErrorMessage as Error} from "formik";
import {Container} from "./input.styles";
import {FC} from "react";

interface InputProps {
    id: string;
    label: string;
    name: string;
    placeholder?: string;
    type?: string;
}

const Input: FC<InputProps> = ({id, label, name, placeholder, type }) => {
    return (
        <Container>
            <label htmlFor={id}>{label}</label>
            <Field name={name} id={id} placeholder={placeholder} type={type}/>
            <Error name={name}>{error => <span>{error}</span>}</Error>
        </Container>
    );
};

export default Input;