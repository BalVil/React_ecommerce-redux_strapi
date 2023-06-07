import ContactForm from "components/ContactForm/ContactForm";
import Container from "components/Container/Container";
import Section from "components/Section/Section";

function Contact() {
  return (
    <>
      <main>
        <Section>
          <Container>
            <ContactForm title={"Please enter your details below"} />
          </Container>
        </Section>
      </main>
    </>
  );
}

export default Contact;
