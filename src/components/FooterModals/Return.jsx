import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Return({ showReturn }) {
  return (
    <>
      {showReturn && (
        <Modal variant="modal" closeModal={showReturn}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={"close"}
            type={"button"}
            onClick={() => showReturn(false)}
          />
          <ModalTextWrap title={"Return Policy"}>
            <p>
              We want you to be completely satisfied with your purchase, but we
              understand that things don't always go as planned. That is why we
              have created this Returns Policy to make the process as simple as
              possible.
            </p>
            <p>
              If you are unhappy with your purchase, you may return it to us for
              a refund or exchange within 14 days of the purchase date. To
              begin, please contact us at support@elvisies.com. We will send you
              a shipping label as well as instructions on how to return the
              item.
            </p>
            <p>
              When we receive your returned item, we will inspect it to ensure
              that it is still in its original condition. If everything checks
              out, we'll credit your original payment method. Please keep in
              mind that depending on your bank or credit card company, the
              refund may take a few days to appear on your account.
            </p>
            <p>
              Simply let us know when you contact us if you want to exchange
              your item for a different size or color. We will work with you to
              ensure that you receive the item you desire
            </p>
            <p>
              We cannot accept returns or exchanges on personalized or
              customized items, as well as items used or damaged after receipt.
              Furthermore, unless the item was damaged or defective when you
              received it, we are unable to refund any shipping charges.
            </p>
            <p>
              Thank you for taking the time to read our Returns Policy! We hope
              you never have to use it, but if you do, we'll be here to assist
              you.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Return;
