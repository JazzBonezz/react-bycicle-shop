import { RightSection } from './styles';
import { Button } from '../../../shared/components/CustomButton';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import {ThemeButton} from '../../../entities/theme-toggle';

const RightNav = () => {
    const navigate = useNavigate();

    return (
        <RightSection>
            <Button showIcon={false} onClick={() => navigate('/cart')}>
                Корзина <FaCartShopping />
            </Button>

            <ThemeButton/>
        </RightSection>
    );
};

export default RightNav;
