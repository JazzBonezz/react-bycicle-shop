import styled from 'styled-components';
import { FaTruckPickup } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import Icon from '../../shared/assets/images/pochta-rossii.svg';
import { Button } from '../../shared/ui/LoginButton';

const Container = styled.div`
    max-width: 1280px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 2rem;
    margin: 2rem auto;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        grid-template-rows: 3fr 1fr;
    }
`;

const FirstSection = styled.div`
    font-size: 18px;

    line-height: 1.8;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.sectionBackground};
    border-radius: ${(props) => props.theme.borderRadius.default};
    box-shadow: ${(props) => props.theme.shadow.default};
`;

const SecondSection = styled.div`
    font-size: 18px;
    color: #444;
    line-height: 1.8;
    background: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    box-shadow: ${(props) => props.theme.shadow.default};
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Input = styled.input`
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.default};
    border: ${(props) => props.theme.colors.border};
    border-radius: 10px;

    &:focus {
        outline: none;
    }
`;

const Delivery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
`;

const PayPageButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 10px;
    height: 4rem;

    & img {
        width: 3rem;
    }
`;

const Line = styled.hr`
    width: 90%;
    margin: 0 auto;
`;

const PayPage = () => {
    return (
        <Container>
            <FirstSection>
                <h1>Введите данные для оплаты</h1>
                <Input placeholder={'Имя'} />
                <Input placeholder={'Фамилия'} />
                <Input placeholder={'Отчество'} />
                <Input placeholder={'Почта'} />
                <Input placeholder={'Телефон'} />
                <Input placeholder={'Адрес'} />
            </FirstSection>
            <SecondSection>
                <Delivery>
                    <PayPageButton>
                        <FaTruckPickup />
                    </PayPageButton>
                    <PayPageButton>
                        <TbTruckDelivery />
                    </PayPageButton>
                    <PayPageButton>
                        <img src={Icon} alt="" />
                    </PayPageButton>
                </Delivery>

                <Line />
                <Delivery>
                    <PayPageButton>
                        <FaTruckPickup />
                    </PayPageButton>
                    <PayPageButton>
                        <TbTruckDelivery />
                    </PayPageButton>
                    <PayPageButton>
                        <img src={Icon} alt="" />
                    </PayPageButton>
                </Delivery>

                <Line />

                <Button type={'submit'}>Оплатить</Button>
            </SecondSection>
        </Container>
    );
};

export default PayPage;
