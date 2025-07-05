
import Navigation from "@/components/Navigation";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mock gallery images - in a real app, these would come from a database
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop",
      alt: "Golden Retriever after grooming"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&h=600&fit=crop",
      alt: "Poodle with stylish cut"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=600&h=600&fit=crop",
      alt: "Labrador mix after spa treatment"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
      alt: "Shih Tzu with bow tie"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581888227599-779811939961?w=600&h=600&fit=crop",
      alt: "Husky after brushing"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=600&fit=crop",
      alt: "Corgi looking fresh"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&h=600&fit=crop",
      alt: "German Shepherd groomed"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=600&fit=crop",
      alt: "Mixed breed happy after grooming"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=600&fit=crop",
      alt: "Beagle with fresh cut"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Gallery</span>
            </h1>
            <p className="body-text-mobile text-white/80 max-w-3xl mx-auto px-4">
              See the amazing transformations of our furry clients. Each photo tells a story of care, love, and professional grooming.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square bg-gray-800 rounded-lg overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gold text-3xl font-bold"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
