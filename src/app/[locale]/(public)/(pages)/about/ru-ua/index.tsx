import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const AboutPage = () => {
  return (
    <>
      <Title>О Проекте</Title>
      <section>
        <Title level={2}>Наша миссия</Title>
        <Paragraph>
          Мы рады приветствовать вас на нашем сайте, который создан для того,
          чтобы помочь вам найти и заказать идеальные цветы для любого случая.
          Наша миссия – сделать процесс выбора и доставки цветов максимально
          удобным и приятным для наших пользователей.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Что такое WYGIWYS?</Title>
        <Paragraph>
          WYGIWYS (What You Get Is What You See) – это наш уникальный подход к
          продаже цветов. Мы гарантируем, что вы получите именно те цветы,
          которые видите на сайте. Мы работаем только с проверенными флористами,
          которые заботятся о качестве каждого букета.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Почему выбирают нас?</Title>
        <ul>
          <li>
            <strong>Качество:</strong> Мы сотрудничаем с лучшими флористами,
            чтобы гарантировать свежесть и красоту каждого букета.
          </li>
          <li>
            <strong>Удобство:</strong> Наш сайт позволяет легко выбрать и
            заказать цветы, не выходя из дома.
          </li>
          <li>
            <strong>Доставка:</strong> Мы предлагаем быструю и надежную доставку
            цветов прямо к двери получателя.
          </li>
          <li>
            <strong>Прозрачность:</strong> Благодаря концепции WYGIWYS, вы точно
            знаете, что получите.
          </li>
        </ul>
      </section>
      <section>
        <Title level={2}>Наша команда</Title>
        <Paragraph>
          Наша команда состоит из опытных специалистов, увлеченных своим делом.
          Мы постоянно стремимся улучшать наш сервис и радовать наших клиентов
          прекрасными цветами.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Контакты</Title>
        <Paragraph>
          Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами
          по электронной почте:{" "}
          <a href="mailto:nepsha1986@gmail.com">nepsha1986@gmail.com</a>
        </Paragraph>
      </section>
    </>
  );
};

export default AboutPage;
