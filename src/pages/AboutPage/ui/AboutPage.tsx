import styled from 'styled-components';

const AboutPage = () => {
    return (
        <Container>
            <Title>О нас</Title>
            <Description>
                Добро пожаловать в наш магазин! Мы предлагаем широкий
                ассортимент товаров высокого качества по доступным ценам. Наш
                магазин работает уже более 10 лет, и за это время мы завоевали
                доверие тысяч покупателей.
            </Description>
            <Description>
                Мы стремимся сделать покупки удобными и приятными, предлагая
                дружелюбный сервис и быструю доставку. Наши специалисты всегда
                готовы помочь вам с выбором товаров.
            </Description>
            <MapCard>
                <h2>Наш магазин по адресу</h2>
                <StyledIframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d135.33506241848255!2d65.49071413651022!3d57.1308900419141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe19c77885e5d%3A0xa7ade73bb80c1795!2z0YPQuy4g0JzQvtGB0LrQvtCy0YHQutC40Lkg0YLRgNCw0LrRgiwgMTQzLCDQotGO0LzQtdC90YwsINCi0Y7QvNC10L3RgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDYyNTA0OQ!5e0!3m2!1sru!2suk!4v1740432389632!5m2!1sru!2suk&t=m&z=12"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></StyledIframe>
            </MapCard>
            <ContactInfo>
                <h2>Контактная информация</h2>
                <p>
                    <strong>Адрес:</strong> ул. Московский тракт 143, Тюмень
                </p>
                <p>
                    <strong>Телефон:</strong> +7 (3452) 123-456
                </p>
                <p>
                    <strong>Email:</strong> info@shop.com
                </p>
            </ContactInfo>
        </Container>
    );
};

export default AboutPage;

const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    justify-items: center;
    align-items: center;
    gap: 20px;
    padding: 40px 20px;
    text-align: center;
    background: ${(props) => props.theme.colors.background};
    min-height: 100vh;
`;

const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #222;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    max-width: 800px;
    font-size: 18px;
    color: #444;
    line-height: 1.8;
    background: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MapCard = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    max-width: 800px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-top: 20px;

    h2 {
        font-size: 22px;
        color: #222;
        margin-bottom: 10px;
    }
`;

const StyledIframe = styled.iframe`
    width: 100%;
    height: 450px;
    border: none;
    border-radius: 10px;
    @media (max-width: 600px) {
        height: 300px;
    }
`;

const ContactInfo = styled.div`
    background: #fff;
    padding: 25px;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    text-align: left;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;

    h2 {
        font-size: 24px;
        color: #222;
        margin-bottom: 10px;
    }

    p {
        font-size: 16px;
        color: #555;
        margin: 5px 0;
    }
`;
