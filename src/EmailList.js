import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section
          Icon={InboxIcon}
          title="Primary "
          color="red "
          selected
        ></Section>
        <Section Icon={PeopleIcon} title="Social " color="#1A73E8 "></Section>
        <Section
          Icon={LocalOfferIcon}
          title="Promotions "
          color="green "
        ></Section>
      </div>
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Twitch"
          subject="Hey brother"
          description="This is a test"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Instagram"
          subject="New Sign In"
          description="This is a test2   j"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
      <div className="emailList__list">
        <EmailRow
          title="Facebook"
          subject="Password changed"
          description="Testtttt"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
