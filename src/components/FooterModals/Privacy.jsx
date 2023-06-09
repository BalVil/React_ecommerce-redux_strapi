import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Privacy({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            variant="closeBtnLight"
            aria-label={"close"}
            type={"button"}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={"Privacy Policy"}>
            <p>
              This privacy statement describes how Elvisies.com uses and
              protects any information you provide while using this website.
            </p>
            <p>
              Elvisies.com is dedicated to protecting your privacy. If we ask
              you for information that can be used to identify you while using
              this website, you can be confident that it will be used only in
              accordance with this privacy statement.
            </p>
            <p>
              Elvisies.com reserves the right, at any time, to change this
              policy by updating this page. You should check back on a regular
              basis to ensure that you are happy with any changes.
            </p>
            <p>What we gather</p>
            <p>
              Name and payment information <br />
              Contact details, including an email address
              <br /> Postcodes, preferences, and interests are examples of
              demographic information. <br />
              Other data pertinent to customer surveys and/or offers
            </p>
            <p>What we do with the data we collect</p>
            <p>
              We need this information to better understand your needs and
              provide you with better service, specifically for the following
              reasons:
            </p>
            <p>
              To complete your order and receive payment Keeping internal
              records We may use the data to enhance our products and services.
              We may send promotional emails about new products, special offers,
              or other information that we believe you may be interested in
              using the email address you have provided. We may also use your
              information to contact you for market research purposes from time
              to time. We may contact you by phone or email. We may use the
              information to tailor the website to your preferences.
            </p>
            <p>Security</p>
            <p>
              We are committed to keeping your information safe. We have put in
              place appropriate physical, electronic, and managerial procedures
              to safeguard and secure the information we collect online in order
              to prevent unauthorized access or disclosure.
            </p>
            <p>
              A cookie is a small file that requests permission to be placed on
              the hard drive of your computer. When you agree, the file is
              added, and the cookie analyzes web traffic or notifies you when
              you visit a specific site. Web applications can respond to you as
              an individual thanks to cookies. By gathering and remembering
              information about your preferences, the web application can tailor
              its operations to your needs, likes, and dislikes.
            </p>
            <p>
              To determine which pages are being visited, we use traffic log
              cookies.
            </p>
            <p>
              This allows us to analyze data about web page traffic and improve
              our website to better meet the needs of our customers.
            </p>
            <p>
              We only use this information for statistical analysis and then
              delete it from the system.
            </p>
            <p>
              Overall, cookies assist us in providing a better website by
              allowing us to track which pages you find useful and which you do
              not. A cookie gives us no access to your computer or any
              information about you other than the information you choose to
              share with us.
            </p>
            <p>
              You have the option to accept or decline cookies. Most web
              browsers accept cookies by default, but you can usually change
              your browser settings to decline cookies if you prefer. This may
              prevent you from fully utilizing the website.
            </p>
            <p>Controlling your personal data</p>
            <p>
              You can limit the collection and use of your personal information
              in the following ways:
            </p>
            <p>
              When filling out a form on the website, look for the box that
              allows you to indicate that you do not want the information to be
              used for direct marketing purposes. If you previously consented to
              us using your personal information for direct marketing purposes,
              you may withdraw your consent at any time by writing to or
              emailing us.
            </p>
            <p>
              We will not sell, distribute, or lease your personal information
              to third parties unless you give us permission or it is required
              by law. If you tell us that you want us to, we may use your
              personal information to send you promotional information about
              third parties that we think you might be interested in.
            </p>
            <p>
              If you believe any information we have on file for you is
              incorrect or incomplete, please contact us as soon as possible.
              Any incorrect information will be corrected as soon as possible.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Privacy;
