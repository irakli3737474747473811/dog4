function Footer() {
    try {
        return (
            <div className="text-center py-6 text-gray-400 text-xs" data-name="footer" data-file="components/Footer.js">
                <div className="flex justify-center items-center gap-1 mb-2">
                    <div className="icon-shield-check text-green-500 w-4 h-4"></div>
                    <span>Verified Pet Profile</span>
                </div>
                <p>© 2026 PetSafe ID. All rights reserved.</p>
            </div>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}