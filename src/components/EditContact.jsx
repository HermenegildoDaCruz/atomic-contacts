import { useRef } from "react";
import { hasEmptyFields } from "../utils/contactFormValidators";
export default function EditContact({
  open,
  contact,
  onUpdateContact,
  onStopEditing,
}) {
  const name = useRef();
  const number = useRef();

  function handleUpdateContact() {
    if (
      hasEmptyFields(name, number)
    ) {
      alert("Fill all fields");
    } else {
      onUpdateContact(name.current.value, number.current.value);
    }
  }
  return (
    <dialog open={open} className="modal">
      <div className="selected-contact-info">
        <div className="contact-cover">{contact.name[0]}</div>
        <span>{contact.name}.</span>
      </div>
      <div className="contact-form">
        <input
          ref={name}
          type="text"
          placeholder="First Name"
          maxLength={20}
          defaultValue={contact.name}
        />
        <input
          ref={number}
          type="number"
          placeholder="Phone Number"
          maxLength={9}
          defaultValue={contact.number}
        />
      </div>
      <div className="contact-btns">
        <button className="btn--primary" onClick={handleUpdateContact}>
          Update
        </button>
        <button className="btn" onClick={onStopEditing}>
          close
        </button>
      </div>
    </dialog>
  );
}
