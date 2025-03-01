import { Button } from './button.styled';
import { FC } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface LoginButtonProps {
    children: string | React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    width?: string;
    disabled?: boolean;
    showIcon?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled,
    width = '100%',
    showIcon = true,
}) => {

    return (
        <Button
            $width={width}
            $hasIcon={showIcon}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children} {showIcon && <FaArrowRightLong />}
        </Button>
    );
};

export default LoginButton;
