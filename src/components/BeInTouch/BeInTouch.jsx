import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import notices from "../../helpers/Notification.js";
import "./BeInTouch.scss";

function BeInTouch() {
  const sendEmail = (e) => {
    e.preventDefault();

    notices.showSuccess("Thanks. Now you are in touch with us");

    e.target.reset();
  };

  return (
    <div className="beInTouch">
      <div className="beInTouchWraper">
        <span>BE IN TOUCH WITH US:</span>
        <form onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Enter your email..."
            className="beInTouchInput"
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          ></input>
          <button type="submit" className="beInTouchBtn">
            JOIN US
          </button>
        </form>
        <div className="iconList">
          <FacebookIcon className="beInTouchIcon" />
          <InstagramIcon className="beInTouchIcon" />
          <TwitterIcon className="beInTouchIcon" />
          <GoogleIcon className="beInTouchIcon" />
          <PinterestIcon className="beInTouchIcon" />
        </div>
      </div>
    </div>
  );
}

export default BeInTouch;
