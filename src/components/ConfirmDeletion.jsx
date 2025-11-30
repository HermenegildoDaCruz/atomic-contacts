export default function ConfirmDeletion({open, onDelete, onStopDeleting}){
    
    return <dialog open={open} className="modal">
        <h2>Are you sure you want delete this contact?</h2>
        <div className="contact-btns">
            <button className="btn--primary" onClick={onDelete}>Confirm</button>
            <button className="btn" onClick={onStopDeleting}>close</button>
        </div>
    </dialog>
}