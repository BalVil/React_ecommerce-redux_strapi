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
              We respectfully request that you thoroughly examine and fully
              comprehend the distinct and comprehensive set of terms and
              conditions presented herewith before availing yourself of our
              esteemed Service. It is of utmost importance that you diligently
              assimilate the unique provisions outlined below. Please be aware
              that all capitalized terms utilized throughout this agreement
              retain their designated meaning, irrespective of whether they are
              employed in a singular or plural form.
            </p>
            <p>
              Within the purview of this agreement, references to "the Site,"
              "We," "Us," or "Our" specifically denote the entity acting as the
              provider of the Service. The term "Device" encompasses any digital
              apparatus possessing the capability to connect to and effectively
              utilize the Service, including, but not limited to, computers,
              smartphones, or tablets. Importantly, the term "Service" pertains
              exclusively to the Website, while the term "You" refers to the
              individual or legal entity accessing or employing the Service.
            </p>
            <p>
              By accessing or utilizing our Service, you explicitly acknowledge,
              with utmost clarity, that you have diligently perused,
              comprehended, and unreservedly consented to be bound by these
              rigorous and binding Terms and Conditions. These provisions
              meticulously delineate the inviolable rights and attendant
              responsibilities applicable to all users, formally establishing
              the legal relationship that exists between you and the Site.
            </p>
            <p>
              It is incumbent upon you, as a conscientious user, to
              wholeheartedly accept and unwaveringly abide by these
              comprehensive and distinctive Terms and Conditions in their
              entirety to enable your unfettered access to and utilization of
              the Service. Failure to wholeheartedly assent to any aspect of
              these provisions shall categorically preclude your distinguished
              utilization of the Service.
            </p>
            <p>
              To gain access to and appropriately employ our esteemed Service,
              you are required to unequivocally affirm, in no uncertain terms,
              that you have attained a minimum age of 18 years. This requirement
              underscores our commitment to responsible usage, as the Service is
              exclusively intended for mature individuals of 18 years and above.
              We prioritize the creation of a secure and reliable digital
              environment.
            </p>
            <p>
              In conjunction with these exceptional Terms and Conditions, your
              usage of the Service is subject to the comprehensive regulation
              set forth in our esteemed Privacy Policy. We respectfully urge you
              to meticulously peruse and assimilate the contents of our privacy
              policy, as it meticulously expounds upon our exceptional practices
              concerning the collection, utilization, and disclosure of your
              personal information during your tenure as a valued Service user.
              Our Privacy Policy serves as a testament to our commitment to
              safeguarding your privacy rights and elucidates the legal
              safeguards meticulously afforded to you.
            </p>
            <p>
              Please be advised that the Service may include notable hyperlinks
              to third-party websites. However, to the maximum extent permitted
              by applicable law, the Site and its esteemed suppliers
              categorically disavow any liability for any special, incidental,
              indirect, or consequential damages that may arise from or be
              inextricably linked to the use or inability to use the Service.
              These damages encompass, but are not limited to, the loss of
              profits, data, or other valuable information, as well as the
              interruption of business operations, personal injury, or breaches
              of privacy.
            </p>
            <p>
              The Service is unreservedly provided to you on an "AS IS" and "AS
              AVAILABLE" basis, acknowledging the presence of certain inherent
              flaws and imperfections that lie beyond the scope of any warranty,
              whether express, implied, statutory, or otherwise. To the maximum
              extent permitted by applicable law, the Site, its esteemed
              affiliates, licensors, and service providers explicitly renounce
              all warranties, including implied warranties of merchantability,
              fitness for a specific purpose, title, and non-infringement. We
              aim to maintain transparency and emphasize that the Service is
              subject to inherent limitations and may not always operate
              flawlessly.
            </p>
            <p>
              If you have any queries or concerns regarding these formal Terms
              and Conditions, we kindly invite you to contact us via the
              following email address: support@wildscrowns.com.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
