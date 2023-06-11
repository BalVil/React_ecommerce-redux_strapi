import Container from "components/Container/Container";
import Section from "components/Section/Section";
import styles from "./Payment.module.scss";
import Modal from "components/Modal/Modal";
import ContactForm from "components/ContactForm/ContactForm";

function Payment({ showPayment }) {
  return (
    <Modal closeModal={showPayment}>
      <div className={styles.paymentContainer}>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <div className={styles.header}>
              <div className={styles.headerContent}>
                <a href="#" onClick={() => showPayment(false)}>
                  Back
                </a>
              </div>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
      {/* <ContactForm title={"Please enter your details below"} /> */}
    </Modal>
  );
}

export default Payment;
