import Navigation from "@/components/Navigation";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Mock gallery images - in a real app, these would come from a database
  const galleryImages = [
    { id: 1, src: "/gallery/1.jpg", alt: "Two fluffy Shelties after grooming", caption: "Double the fluff!" },
    { id: 2, src: "/gallery/2.jpg", alt: "Two dogs with Coats by Cole bandanas", caption: "Best friends, best bandanas" },
    { id: 3, src: "/gallery/3.jpg", alt: "Poodle with green bow after grooming", caption: "Ready for cuddles!" },
    { id: 4, src: "/gallery/4.jpg", alt: "Three small dogs with bows after grooming", caption: "Distinguished gentleman" },
    { id: 5, src: "/gallery/5.jpg", alt: "Dog with blue Coats by Cole bandana", caption: "Pretty in pink" },
    { id: 6, src: "/gallery/6.jpg", alt: "Dog with purple Coats by Cole bandana", caption: "Blue bandana, big smiles!" },
    { id: 7, src: "/gallery/7.jpg", alt: "Dog with pink bow after grooming", caption: "Squad goals!" },
    { id: 8, src: "/gallery/8.jpg", alt: "Dog with blue Coats by Cole bandana after grooming", caption: "Bow-tiful in green" },
    { id: 9, src: "/gallery/9.jpg", alt: "Dog with red bow after grooming", caption: "Red bow, ready to go!" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold text-white mb-6">
              Our <span className="gold-shine">Gallery</span>
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
                className="bg-black rounded-lg overflow-hidden card-hover cursor-pointer group flex flex-col"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="gold-shine text-sm text-center py-2 bg-black w-full font-playfair">{image.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grooming Space Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="section-title-mobile md:text-4xl font-bold gold-shine mb-4">Our Grooming Space</h2>
          <p className="body-text-mobile text-white/80 max-w-2xl mx-auto px-4">
            A peek into our clean, cozy, and professional grooming environment — designed to keep your pups relaxed and pampered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: "/salon/salon1.jpg", alt: "Where the magic (and the fluff) happens.", caption: "Where the magic (and the fluff) happens." },
            { src: "/salon/salon2.jpg", alt: "Fresh cuts, bubbly baths, happy tails.", caption: "Fresh cuts, bubbly baths, happy tails." },
            { src: "/salon/salon3.jpg", alt: "One room. Endless pampering.", caption: "One room. Endless pampering" },
          ].map((img, i) => (
            <div key={i} className="bg-black rounded-lg overflow-hidden card-hover flex flex-col w-full max-w-[400px] mx-auto min-w-[80vw] sm:min-w-0 sm:max-w-full">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="gold-shine text-sm text-center py-2 bg-black w-full font-playfair">{img.caption}</div>
            </div>
          ))}
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

      {/* Book Appointment Button */}
      <div className="flex justify-center mt-16 mb-24">
        <a href="/contact" className="btn-gold-mobile">Book an Appointment</a>
      </div>
    </div>
  );
};

export default Gallery;
