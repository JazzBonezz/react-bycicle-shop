import { useAppDispatch } from '../../../app/providers/store';
import { toggleTheme } from '../../../entities/theme-toggle/model/themeSlice';

const HomePage = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(toggleTheme())}>
                Сменить тему
            </button>
        </div>
    );
};

export default HomePage;
