import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Delivery({ showDelivery }) {
  return (
    <>
      {showDelivery && (
        <Modal variant="modal" closeModal={showDelivery}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={"close"}
            type={"button"}
            onClick={() => showDelivery(false)}
          />
          <ModalTextWrap title={"Delivery Policy"}>
            <p>
              We are based in the United Kingdom and offer fast and dependable
              shipping to anywhere in the world. All orders are processed within
              1-3 business days and shipped directly from our warehouse to your
              door.
            </p>
            <p>
              For domestic orders within the United Kingdom, we offer standard
              and expedited shipping options. Standard shipping takes 2-5
              business days, while expedited shipping takes 1-2 business days.
              Shipping costs vary depending on the size and weight of your
              order, as well as the shipping method you choose.
            </p>
            <p>
              We also offer standard shipping and expedited shipping for
              international orders. Shipping times and costs vary depending on
              your location and shipping method. Please keep in mind that
              international orders may be subject to customs fees and import
              taxes, which are the responsibility of the buyer.
            </p>
            <p>
              We are committed to delivering your order on time and in good
              condition. We carefully package each item to protect it from
              damage during transit. We also provide tracking information for
              all orders so that you can track their progress and estimated
              delivery date.
            </p>
            <p>
              Please contact our customer support team if you have any questions
              or concerns about shipping. We are here to assist and will do our
              best to resolve any issues as soon as possible. Thank you for
              shopping with us for music-related gifts!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Delivery;
