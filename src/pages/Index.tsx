import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
const Index = () => {
  const services = [{
    title: "Full Grooming",
    description: "Complete spa treatment including wash, cut, and styling",
    price: "From $45"
  }, {
    title: "Teeth Cleaning",
    description: "Professional dental care for your pet's oral health",
    price: "From $25"
  }, {
    title: "Nail Trimming",
    description: "Safe and gentle nail care service",
    price: "From $15"
  }];
  const testimonials = [{
    text: "Nicole is absolutely amazing! My dog comes out looking like a show dog every time. She's so gentle and caring.",
    author: "Sarah M."
  }, {
    text: "Best groomer in town! Professional, affordable, and my pup actually enjoys going there now.",
    author: "Mike R."
  }];
  return <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-1 md:pt-20 pb-2 md:pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in w-full flex flex-col items-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/lovable-uploads/569c4579-14f8-4574-ac9c-3a611047a536.png"
              alt="Golden Paws Boutique Logo"
              className="h-40 w-40 md:h-56 md:w-56 object-contain mx-auto drop-shadow-lg"
            />
          </div>
          <h1 className="hero-title-mobile font-bold text-white mb-6 leading-tight text-3xl md:text-5xl">
            Premier <span className="gold-shine">Dog Grooming</span>
          </h1>
          <p className="body-text-mobile text-white/80 mb-8 max-w-2xl mx-auto px-4 text-base md:text-lg">
            Where luxury meets love. Professional grooming services tailored for your beloved companion.
          </p>
          <Link to="/contact" className="btn-gold-mobile">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-mobile px-4 bg-black/20 pt-2 pb-12 md:pt-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title-mobile font-bold text-center text-white mb-8 md:mb-6">
            Our <span className="gold-shine">Services</span>
          </h2>
          <p className="text-white text-center max-w-2xl mx-auto mb-10 md:mb-12 text-base md:text-lg font-normal">
            With over a decade of experience, I provide personalized grooming services in a calm, stress-free environment. Every dog deserves to look and feel their absolute best.
          </p>
          {/* Desktop & Mobile Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Full Groom Card */}
            <div className="bg-black/80 border border-gold rounded-xl shadow-lg shadow-gold/10 p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-gold/30 group">
              <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Full Groom</h3>
              <p className="text-white/80 mb-3">13mm or shorter body with longer/fluffy head, nails clipped, ears cleaned.</p>
              <p className="text-gold font-medium mb-6">From $90</p>
              <div className="flex justify-center w-full mt-4">
                <Link to="/services" className="btn-gold px-6 py-2 text-base font-semibold rounded-full transition hover:bg-black hover:text-gold hover:border hover:border-gold">Learn More</Link>
              </div>
            </div>
            {/* Comfort Clip Card */}
            <div className="bg-black/80 border border-gold rounded-xl shadow-lg shadow-gold/10 p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-gold/30 group">
              <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Comfort Clip</h3>
              <p className="text-white/80 mb-3">One length all over (13mm or shorter), nails clipped, ears cleaned.</p>
              <p className="text-gold font-medium mb-6">From $85</p>
              <div className="flex justify-center w-full mt-4">
                <Link to="/services" className="btn-gold px-6 py-2 text-base font-semibold rounded-full transition hover:bg-black hover:text-gold hover:border hover:border-gold">Learn More</Link>
              </div>
            </div>
            {/* Style Groom / Breed Clip Card */}
            <div className="bg-black/80 border border-gold rounded-xl shadow-lg shadow-gold/10 p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-gold/30 group">
              <h3 className="text-xl font-bold text-gold mb-3 group-hover:text-white transition-colors">Style Groom / Breed Clip</h3>
              <p className="text-white/80 mb-3">Styled cut of choice (13mm or longer), nails clipped, ears cleaned.</p>
              <p className="text-gold font-medium mb-6">From $100</p>
              <div className="flex justify-center w-full mt-4">
                <Link to="/services" className="btn-gold px-6 py-2 text-base font-semibold rounded-full transition hover:bg-black hover:text-gold hover:border hover:border-gold">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-mobile px-4 pt-8 pb-12 md:pt-12 md:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title-mobile font-bold text-white mb-8 md:mb-12">
            Recent <span className="gold-shine">Transformations</span>
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-3 gap-4 mb-8 md:mb-12">
            {[
              { src: "/gallery/1.jpg", alt: "Fluffy Shelties after grooming" },
              { src: "/gallery/3.jpg", alt: "Poodle with green bow after grooming" },
              { src: "/gallery/8.jpg", alt: "Dog with blue Coats by Cole bandana after grooming" },
            ].map((img, i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden card-hover">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden carousel-container mb-8">
            <div className="carousel-scroll px-4">
              {[
                { src: "/gallery/1.jpg", alt: "Fluffy Shelties after grooming" },
                { src: "/gallery/3.jpg", alt: "Poodle with green bow after grooming" },
                { src: "/gallery/8.jpg", alt: "Dog with blue Coats by Cole bandana after grooming" },
              ].map((img, i) => (
                <div key={i} className="carousel-item aspect-square bg-gray-800 rounded-lg overflow-hidden mx-auto w-64 sm:w-72 max-w-xs min-w-[80vw]">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          <Link to="/gallery" className="btn-gold-mobile">
            View Gallery
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-mobile px-4 pt-8 pb-12 md:pt-12 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title-mobile font-bold text-white mb-6">
            Ready to Pamper Your <span className="gold-shine">Pup</span>?
          </h2>
          <p className="body-text-mobile text-white/80 mb-8 px-4">
            Book your appointment today and give your dog the luxury treatment they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-gold-mobile">
              Get In Touch
            </Link>
            <Link to="/services" className="btn-gold-mobile">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gold/20 mt-8 md:mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
          
            <span className="gold-shine font-semibold">CoatbyCole</span>
          </div>
          <p className="text-white/60">
            © 2025.    Made with ❤️ for our furry friends.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;