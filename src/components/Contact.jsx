import useIsActive from "../hooks/useIsActive";
import { motion } from "motion/react";

export default function Contact({
  contactId,
  contactName,
  contactNumber,
  isFavorite,
  onStartDeletion,
  onStartEditing,
  onSetFavorite,
}) {
  const { active, handleToggleIsActive } = useIsActive(false, true);

  return (
    <motion.div
      initial={{
        transform: "scale(0)",
        opacity: 0,
      }}
      whileInView={{
        transform: "scale(1)",
        opacity: 1,
      }}
      transition={{ duration: 0.8 }}
      className="contact"
    >
      <div className="contact-cover">{contactName[0]}</div>
      <div className="contact-info">
        <div className="contact-header">
          <div>
            <span className="contact-name">{contactName}</span>
            <span className="contact-number">{contactNumber}</span>
          </div>
          <button className="btn" onClick={() => onStartDeletion(contactId)}>
            <ion-icon name="trash-bin-outline" className="icon"></ion-icon>
          </button>
        </div>
        <div className="contact-btns">
          <button
            className="btn--primary"
            onClick={() => onStartEditing(contactId)}
          >
            Edit
          </button>
          <button className="btn" onClick={handleToggleIsActive}>
            {active ? (
              <ion-icon name="checkmark-outline" className="icon"></ion-icon>
            ) : (
              <ion-icon name="copy-outline" className="icon"></ion-icon>
            )}
          </button>
          <button className="btn" onClick={() => onSetFavorite(contactId)}>
            {isFavorite ? (
              <ion-icon name="star" className="icon"></ion-icon>
            ) : (
              <ion-icon name="star-outline" className="icon"></ion-icon>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
