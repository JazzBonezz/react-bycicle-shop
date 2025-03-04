// Не придумал чем заполнить

import { useAppDispatch } from '../../../app/providers/store';
import { toggleTheme } from '../../../shared/model/themeSlice';

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
