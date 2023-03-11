import { Modal, Typography } from "@mui/material";
import React from "react";
import { changeAlert } from "../../../store/actions/alert.action";
import { useDispatch, useSelector } from "react-redux";

import { CheckCircle, Error } from "@mui/icons-material";

export default function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alertReducer);
  if(alert.open){
    setTimeout(()=> dispatch( changeAlert({open:false})), alert.time);
  }
  return (
    <Modal
      open={alert.open}
      onClose={() => dispatch(changeAlert({ open: false }))}
      className="d-flex flex-column align-items-center justify-content-center h-100"
    >
      <div className="bg-white rounded d-flex align-items-center p-4 px-5" style={{ width: "14%", maxWidth: "600px", height: "9%" }}>
        {alert.class === "success" && (
          <CheckCircle style={{ fontSize: "2.5rem" }} className="mr-3 text-success" />
        )}
        {alert.class === "error" && (
          <Error style={{ fontSize: "2.5rem" }} className="mr-3 text-danger" />
        )}
        <Typography className="fw-bold fs-4  text-center " >
          {alert.msg}
        </Typography>
      </div>
    </Modal>
  );
}
