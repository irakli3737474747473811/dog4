function Contact() {
    try {
        return (
            <div className="space-y-3 mb-6" data-name="contact" data-file="components/Contact.js">
                <a href="tel:+1234567890" className="btn-primary bg-black hover:bg-gray-800 border-none">
                    <div className="icon-phone text-xl"></div>
                    <span>Call Owner</span>
                </a>
                
                <a href="https://wa.me/1234567890" className="btn-secondary text-green-600 border-green-100 bg-green-50 hover:bg-green-100">
                    <div className="icon-message-circle text-xl"></div>
                    <span>WhatsApp</span>
                </a>
            </div>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}