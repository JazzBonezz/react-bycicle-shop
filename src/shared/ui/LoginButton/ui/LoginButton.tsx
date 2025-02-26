import { Button } from './button.styled';
import { FC } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface LoginButtonProps {
    children: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled,
}) => {
    return (
        <Button onClick={onClick} type={type} disabled={disabled}>
            {children} <FaArrowRightLong />
        </Button>
    );
};

export default LoginButton;
