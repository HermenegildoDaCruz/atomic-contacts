import contact_img from "../assets/contact-img.jpg"

export default function Contact(){
    return <div className="contact">
        <img src={contact_img} alt="Contact image" className="contact-img" />
        <div className="contact-info">
            <span className="contact-name">Andrea</span>
            <span className="contact-number">934-234-124</span>
            <div className="contact-btns">
                <button className="btn--primary">Edit</button>
                <button className="btn">
                    <ion-icon name="copy-outline" className = "icon"></ion-icon>
                    {/* <ion-icon name="checkmark-outline" className = "icon"></ion-icon> */}
                </button>
            </div>
        </div>
    </div>
        
}