import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function About({ showAbout }) {
  return (
    <>
      {showAbout && (
        <Modal variant="modal" closeModal={showAbout}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={"close"}
            type={"button"}
            onClick={() => showAbout(false)}
          />
          <ModalTextWrap title={"About Policy"}>
            <p>
              Elvisies.com is your one-stop shop for music-related gifts! We are
              a group of music enthusiasts who believe that nothing beats
              sharing the joy of music with others.
            </p>
            <p>
              Our love of music began at a young age and has remained a driving
              force in everything we do. We founded Elvisies.com because we
              wanted to create a place where music fans like us could find
              unique and fun gifts that celebrated their passion for music.
            </p>
            <p>
              At Elvisies.com, we believe that music has the power to unite,
              inspire, and uplift people. That's why we're committed to
              providing a diverse range of high-quality products that will make
              you happy.
            </p>
            <p>
              We have something for everyone, from music-themed t-shirts and
              mugs to collectibles and instruments. We're here to help you find
              the perfect gift, whether you're a die-hard Elvis Presley fan or
              just love music in general.
            </p>
            <p>
              We take pride in providing excellent customer service and are
              always available to answer your questions. We love what we do, and
              we're always looking for new and exciting products to share with
              our customers.
            </p>
            <p>
              Thank you for visiting Elvisies.com. We look forward to assisting
              you in finding the perfect music-related gift!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default About;
