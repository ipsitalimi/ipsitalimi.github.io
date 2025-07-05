
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Full Grooming",
      description: "Complete spa treatment including wash, cut, and styling",
      price: "From $45"
    },
    {
      title: "Teeth Cleaning",
      description: "Professional dental care for your pet's oral health",
      price: "From $25"
    },
    {
      title: "Nail Trimming",
      description: "Safe and gentle nail care service",
      price: "From $15"
    }
  ];

  const testimonials = [
    {
      text: "Nicole is absolutely amazing! My dog comes out looking like a show dog every time. She's so gentle and caring.",
      author: "Sarah M."
    },
    {
      text: "Best groomer in town! Professional, affordable, and my pup actually enjoys going there now.",
      author: "Mike R."
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/c47f6374-7ad2-465d-bbfb-046c5aed3ab1.png" 
              alt="CoatbyCole Logo" 
              className="h-24 w-24 mx-auto mb-6 opacity-90"
            />
          </div>
          <h1 className="hero-title-mobile font-bold text-white mb-6 leading-tight">
            Premier <span className="text-gradient">Dog Grooming</span>
          </h1>
          <p className="body-text-mobile text-white/80 mb-8 max-w-2xl mx-auto px-4">
            Where luxury meets love. Professional grooming services tailored for your beloved companion.
          </p>
          <Link to="/contact" className="btn-gold-mobile">
            Book Appointment
          </Link>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-mobile px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="body-text-mobile text-white/90 leading-relaxed px-4">
            With over a decade of experience, I provide personalized grooming services in a calm, 
            stress-free environment. Every dog deserves to look and feel their absolute best.
          </p>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section-mobile px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title-mobile font-bold text-center text-white mb-8 md:mb-12">
            Our <span className="text-gold">Services</span>
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20 card-hover text-center group"
              >
                <h3 className="text-xl font-semibold text-gold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-4">{service.description}</p>
                <p className="text-gold font-medium mb-6">{service.price}</p>
                <Link to="/services" className="btn-gold">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden carousel-container">
            <div className="carousel-scroll px-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="carousel-item bg-dark-bg/60 p-6 rounded-lg border border-gold/20 text-center"
                >
                  <h3 className="text-lg font-semibold text-gold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">{service.description}</p>
                  <p className="text-gold font-medium mb-4">{service.price}</p>
                  <Link to="/services" className="btn-gold text-sm px-4 py-2">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-mobile px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title-mobile font-bold text-white mb-8 md:mb-12">
            Recent <span className="text-gold">Transformations</span>
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 md:mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-800 rounded-lg overflow-hidden card-hover">
                <img
                  src={`https://images.unsplash.com/photo-158256212481${i}-c09040d0a901?w=300&h=300&fit=crop`}
                  alt={`Groomed dog ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden carousel-container mb-8">
            <div className="carousel-scroll px-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="carousel-item aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-158256212481${i}-c09040d0a901?w=300&h=300&fit=crop`}
                    alt={`Groomed dog ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <Link to="/gallery" className="btn-gold-mobile">
            View Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-mobile px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title-mobile font-bold text-white mb-8 md:mb-12">
            What <span className="text-gold">Clients Say</span>
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20">
                <p className="text-white/90 text-lg mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-gold font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden carousel-container">
            <div className="carousel-scroll px-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="carousel-item bg-dark-bg/60 p-6 rounded-lg border border-gold/20">
                  <p className="text-white/90 text-base mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="text-gold font-medium">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-mobile px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title-mobile font-bold text-white mb-6">
            Ready to Pamper Your <span className="text-gold">Pup</span>?
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
      <footer className="py-8 px-4 border-t border-gold/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/c47f6374-7ad2-465d-bbfb-046c5aed3ab1.png" 
              alt="CoatbyCole Logo" 
              className="h-8 w-8 mr-3 opacity-70"
            />
            <span className="text-gold font-semibold">CoatbyCole</span>
          </div>
          <p className="text-white/60">
            © 2024 Paws & Polish. Made with ❤️ for our furry friends.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
