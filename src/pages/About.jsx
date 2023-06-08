import Container from "components/Container/Container";
import Section from "components/Section/Section";
import styles from "./About.module.scss";

function Contact() {
  return (
    <>
      <main>
        <Section>
          <Container>
            <div className={styles.wrap}>
              <h1 className={styles.title}>About us</h1>
              <p>
                We are passionate about music and believe that it can bring joy,
                inspiration, and connection to people from all walks of life. We
                have a wide selection of products inspired by music legends,
                including Elvis Presley, in our store.
              </p>
              <p>
                Elvis Presley, we believe, was not only a talented musician, but
                also an icon who embodies the power of music to unite people and
                break down barriers. That is why we have a selection of
                Elvis-inspired gifts in our catalog, such as t-shirts, posters,
                and collectibles that honor his music and legacy.
              </p>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}

export default Contact;
