function Emergency() {
    try {
        return (
            <div className="bg-red-50 border-2 border-red-100 rounded-3xl p-5 mb-4 shadow-sm" data-name="emergency" data-file="components/Emergency.js">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                        <div className="icon-siren text-red-500 text-lg"></div>
                    </div>
                    <h2 className="font-bold text-red-800 text-lg">If I am lost...</h2>
                </div>
                <p className="text-red-700 text-sm leading-relaxed">
                    Please help me get back home! I might be scared but I am friendly. My owner misses me very much. 🐾❤️
                </p>
            </div>
        );
    } catch (error) {
        console.error('Emergency component error:', error);
        return null;
    }
}