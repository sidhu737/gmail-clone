import React from "react";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={10} />
      <SidebarOption Icon={AccessTimeFilledIcon} title="Snoozed" number={2} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={32} />
      <SidebarOption Icon={SendIcon} title="Sent" number={27} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={16} />

      <SidebarOption Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
