import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Warranty({ showWarranty }) {
  return (
    <>
      {showWarranty && (
        <Modal variant="modal" closeModal={showWarranty}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={"close"}
            type={"button"}
            onClick={() => showWarranty(false)}
          />
          <ModalTextWrap title={"Warranty Policy"}>
            <p>
              Hello, Elvisies.com customers! We are confident in the quality of
              our products and want you to be as well. That is why we provide a
              warranty on all of our products.
            </p>
            <p>
              For 30 days from the date of purchase, our warranty covers any
              defects in materials or workmanship. If you have any problems with
              your item during this time, please contact us and we will work
              with you to find a solution.
            </p>
            <p>
              Simply contact us at support@elvisies.com with your order number
              and a description of the problem to file a warranty claim. We may
              request photos or other documentation to better understand the
              issue.
            </p>
            <p>
              If we determine that your item is under warranty, we will offer
              you a solution that may include repair, replacement, or a refund.
              We'll collaborate with you to find the best solution for your
              specific situation.
            </p>
            <p>
              Damage caused by normal wear and tear, misuse, or neglect is not
              covered by our warranty. Furthermore, our warranty does not cover
              any damage that occurs during shipping. Please contact us
              immediately if you notice any damage to your item during shipping
              so that we can file a claim with the carrier.
            </p>
            <p>
              Thank you for taking the time to read our Warranty Policy! We hope
              you never need it, but if you do, we'll be here to assist you.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Warranty;
