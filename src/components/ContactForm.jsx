import { useState } from "react";
import { formatContactNumber } from "../utils/formatContactNumber";
export default function ContactForm({
  contactData,
  inputNameRef,
  inputNumberRef,
}) {
  const [formattedNumber, setFormatedNumber] = useState("");

  function handleFormatContactNumber(el) {
    el.value = formatContactNumber(el.value);
    setFormatedNumber(formatContactNumber(el.value));
  }

  return (
    <div className="contact-form">
      <input
        ref={inputNameRef}
        type="text"
        placeholder="First Name"
        maxLength={20}
        defaultValue={contactData ? contactData.name : ""}
      />
      <input
        ref={inputNumberRef}
        type="text"
        placeholder="Phone Number"
        maxLength={20}
        defaultValue={contactData ? contactData.number : formattedNumber}
        onChange={(e) => handleFormatContactNumber(e.target)}
      />
    </div>
  );
}
