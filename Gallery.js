function Gallery() {
    try {
        const images = [
            "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=400"
        ];

        return (
            <div className="mb-6" data-name="gallery" data-file="components/Gallery.js">
                <h2 className="section-title px-2">
                    <div className="icon-image text-pink-500"></div>
                    Photo Gallery
                </h2>
                <div className="flex overflow-x-auto gap-3 pb-4 px-1 no-scrollbar snap-x snap-mandatory">
                    {images.map((img, index) => (
                        <div key={index} className="flex-none w-40 h-40 rounded-2xl overflow-hidden shadow-md snap-center relative group">
                            <img 
                                src={img} 
                                alt={`Gallery ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        return null;
    }
}