import React from "react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const AboutPage = () => {
  return (
    <>
      <Title>About Us</Title>

      <section>
        <Title level={2}>Our Mission</Title>
        <Paragraph>
          We are pleased to welcome you to our website, which is designed to
          help you find and order the perfect flowers for any occasion. Our
          mission is to make the process of choosing and delivering flowers as
          convenient and pleasant as possible for our users.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>What is WYGIWYS?</Title>
        <Paragraph>
          WYGIWYS (What You Get Is What You See) is our unique approach to
          selling flowers. We guarantee that you will receive exactly the
          flowers you see on the site. We work only with trusted florists who
          care about the quality of each bouquet.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Why Choose Us?</Title>
        <ul>
          <li>
            <strong>Quality:</strong> We collaborate with the best florists to
            ensure the freshness and beauty of each bouquet.
          </li>
          <li>
            <strong>Convenience:</strong> Our site allows you to easily choose
            and order flowers without leaving your home.
          </li>
          <li>
            <strong>Delivery:</strong> We offer fast and reliable flower
            delivery right to the recipient's door.
          </li>
          <li>
            <strong>Transparency:</strong> Thanks to the WYGIWYS concept, you
            know exactly what you are getting.
          </li>
        </ul>
      </section>
      <section>
        <Title level={2}>Our Team</Title>
        <Paragraph>
          Our team consists of experienced professionals who are passionate
          about their work. We constantly strive to improve our service and
          delight our customers with beautiful flowers.
        </Paragraph>
      </section>
      <section>
        <Title level={2}>Contact Us</Title>
        <Paragraph>
          If you have any questions or suggestions, please contact us by email
          at: <a href="mailto:nepsha1986@gmail.com">nepsha1986@gmail.com</a>
        </Paragraph>
      </section>
    </>
  );
};

export default AboutPage;
