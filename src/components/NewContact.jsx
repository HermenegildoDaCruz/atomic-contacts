import { useRef } from "react";
import { hasEmptyFields } from "../utils/contactFormValidators";

export default function NewContact({ open, onAddContact, onStopCreating }) {
  const name = useRef();
  const number = useRef();

  function handleSetContact() {
    if (
      hasEmptyFields(name, number)
    ) {
      alert("Fill all fields");
    } else {
      onAddContact(name.current.value, number.current.value);
      name.current.value = "";
      number.current.value = "";
    }
  }

  return (
    <dialog open={open} className="modal">
      <h2>Add new contact</h2>
      <div className="contact-form">
        <input ref={name} type="text" placeholder="First Name" maxLength={20} />
        <input
          ref={number}
          type="number"
          placeholder="Phone Number"
          maxLength={9}
        />
      </div>
      <div className="contact-btns">
        <button className="btn--primary" onClick={handleSetContact}>
          Add
        </button>
        <button className="btn" onClick={onStopCreating}>
          close
        </button>
      </div>
    </dialog>
  );
}
