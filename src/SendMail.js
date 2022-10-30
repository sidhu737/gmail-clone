import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";
function SendMail() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    db.collection("emails").add({
      to: data.to,
      subject: data.subject,
      message: data.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register("to", { required: "To is required" })}
        />
        {errors.to && <span className="sendMail__error">To is required</span>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <span className="sendMail__error">Subject is required</span>
        )}
        <input
          name="message"
          placeholder="Message..."
          className="sendMail__message"
          type="text"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="sendMail__error">Message is required</span>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            type="submit"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
