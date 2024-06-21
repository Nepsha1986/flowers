import React from "react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const AboutPage = () => {
  return (
    <>
      <Title>Про Проєкт</Title>

      <section>
        <Title level={2}>Наша місія</Title>
        <Paragraph>
          Ми раді вітати вас на нашому сайті, який створений для того, щоб
          допомогти вам знайти та замовити ідеальні квіти для будь-якої нагоди.
          Наша місія – зробити процес вибору та доставки квітів максимально
          зручним та приємним для наших користувачів.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Що таке WYGIWYS?</Title>
        <Paragraph>
          WYGIWYS (What You Get Is What You See) – це наш унікальний підхід до
          продажу квітів. Ми гарантуємо, що ви отримаєте саме ті квіти, які
          бачите на сайті. Ми працюємо тільки з перевіреними флористами, які
          піклуються про якість кожного букета.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Чому обирають нас?</Title>
        <ul>
          <li>
            <strong>Якість:</strong> Ми співпрацюємо з найкращими флористами,
            щоб гарантувати свіжість і красу кожного букета.
          </li>
          <li>
            <strong>Зручність:</strong> Наш сайт дозволяє легко вибрати і
            замовити квіти, не виходячи з дому.
          </li>
          <li>
            <strong>Доставка:</strong> Ми пропонуємо швидку та надійну доставку
            квітів прямо до дверей отримувача.
          </li>
          <li>
            <strong>Прозорість:</strong> Завдяки концепції WYGIWYS, ви точно
            знаєте, що отримаєте.
          </li>
        </ul>
      </section>
      <section>
        <Title level={2}>Наша команда</Title>
        <Paragraph>
          Наша команда складається з досвідчених спеціалістів, захоплених своєю
          справою. Ми постійно прагнемо вдосконалювати наш сервіс і радувати
          наших клієнтів прекрасними квітами.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Контакти</Title>
        <Paragraph>
          Якщо у вас є питання або пропозиції, будь ласка, зв'яжіться з нами
          електронною поштою:{" "}
          <a href="mailto:nepsha1986@gmail.com">nepsha1986@gmail.com</a>
        </Paragraph>
      </section>
    </>
  );
};

export default AboutPage;
