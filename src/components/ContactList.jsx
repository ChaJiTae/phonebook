import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

function ContactList() {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  return (
    <div className="contactListSet">
      <div className="searchBox">
        <div className="searchBoxTitle">이름으로 검색</div>
        <SearchBox />
      </div>
      <div className="contactList">
        <div>연락처 수 : {filteredList.length}</div>
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
