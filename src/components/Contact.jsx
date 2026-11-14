import Footer from "../common/Footer";
import Header from "../common/Header";

function Contact() {
	return (
		<div>
		    <Header />
			<form className="contact-form">
                <h1>Contact</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="5" />
                <button type="submit">Send</button>
            </form>
			<Footer />
		</div>
	);
}

export default Contact;
