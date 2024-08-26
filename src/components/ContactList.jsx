import React from "react";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

function ContactList() {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item, key) => (
        <ContactItem item={item} key={key} />
      ))}
    </div>
  );
}

export default ContactList;
