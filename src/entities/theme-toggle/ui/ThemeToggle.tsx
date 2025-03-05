import { Button } from '../../../shared/components/CustomButton';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store';
import { toggleTheme } from '../model/themeSlice';

const ThemeToggle = () => {
    const dispatch = useAppDispatch();
    const themeToggle = useAppSelector((state) => state.theme.isDark);

    return (
        <Button showIcon={false} onClick={() => dispatch(toggleTheme())}>
            {themeToggle ? <IoMoon /> : <IoMoonOutline />}
        </Button>
    );
};

export default ThemeToggle;
