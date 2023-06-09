import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title={"Terms & Conditions"}>
            <p>
              Hello and welcome to Elvisies.com! We are delighted that you have
              chosen to shop with us for all of your music-related gift
              requirements. Before you get started, there are a few things you
              should know about using our website.
            </p>
            <p>
              By using our website, you agree to these Terms and Conditions, so
              please read them thoroughly. If you have any questions or
              concerns, please contact us. We are always willing to assist!
            </p>
            <p>
              When you place an order on Elvisies, you agree to pay for the
              items you've chosen as well as any applicable taxes and shipping
              charges. We accept most major credit and debit cards, as well as
              PayPal, and our checkout process is simple and straightforward.
            </p>
            <p>
              Please contact us as soon as possible if you need to cancel or
              modify your order. We will do our best to accommodate your
              request, but please keep in mind that once an order has been
              shipped, changes cannot be made.
            </p>
            <p>
              We provide fast and dependable shipping to most destinations
              worldwide. We'll send you a tracking number once your order has
              been processed so you can keep track of its progress.
            </p>
            <p>
              Please keep in mind that delivery times will vary depending on
              your location and the shipping method you select. We are not
              liable for any delays or problems caused by the shipping carrier
              or customs, but we will do our best to assist you in resolving any
              issues.
            </p>
            <p>
              We want you to be completely satisfied with your Elvisies
              purchase. If you are unhappy with your order for any reason,
              please notify us within 14 days of receipt and we will gladly
              issue a refund or exchange. Keep in mind that some items, such as
              personalized or customized items, may not be eligible for return
              or exchange.
            </p>
            <p>
              All content on our website, including text, graphics, logos,
              images, and software, is the property of Elvisies or our partners
              and is protected by international copyright laws. You may not
              reproduce, modify, distribute, or display any of our content
              without our prior written permission.
            </p>
            <p>
              We make every effort to provide accurate and reliable information
              on our website, but we make no guarantees or warranties about the
              content's accuracy, completeness, or reliability. We are not
              responsible for any damages or losses caused by your use of our
              website, including but not limited to direct, indirect,
              incidental, punitive, or consequential damages.
            </p>
            <p>
              We reserve the right to update or modify these Terms and
              Conditions at any time and without notice. Your continued use of
              our website following any changes signifies your acceptance of the
              new Terms and Conditions.
            </p>
            <p>
              Thank you for taking the time to read our Terms and Conditions. We
              hope you have a pleasant shopping experience with Elvisies!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
