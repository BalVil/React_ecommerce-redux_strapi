import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import styles from "./ButtonClose.module.scss";

function ButtonClose({ variant = "closeBtn", type = "button", onClick }) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      <CloseOutlinedIcon fontSize="large" />
    </button>
  );
}

export default ButtonClose;
