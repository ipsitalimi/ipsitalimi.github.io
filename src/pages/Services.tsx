
import Navigation from "@/components/Navigation";

const Services = () => {
  const groomingServices = [
    {
      title: "Full Service Grooming",
      description: "Complete bath, blow dry, nail trim, ear cleaning, and breed-specific cut",
      price: "From $45"
    },
    {
      title: "Bath & Brush",
      description: "Thorough wash with premium shampoo, conditioning treatment, and brush out",
      price: "From $30"
    },
    {
      title: "Puppy Introduction",
      description: "Gentle first grooming experience for puppies 4-6 months old",
      price: "From $35"
    },
    {
      title: "Senior Dog Special",
      description: "Extra gentle care for older dogs with mobility or health concerns",
      price: "From $40"
    },
    {
      title: "De-shedding Treatment",
      description: "Specialized treatment to reduce shedding and promote healthy coat",
      price: "From $25"
    }
  ];

  const dentalServices = [
    {
      title: "Basic Teeth Cleaning",
      description: "Gentle brushing and plaque removal for maintaining oral health",
      price: "From $25"
    },
    {
      title: "Deep Dental Clean",
      description: "Thorough cleaning including gum line and hard-to-reach areas",
      price: "From $40"
    },
    {
      title: "Breath Freshening",
      description: "Quick clean with breath spray for fresher kisses",
      price: "From $15"
    }
  ];

  const extras = [
    { service: "Nail Trimming", price: "$15" },
    { service: "Ear Cleaning", price: "$10" },
    { service: "Anal Gland Expression", price: "$15" },
    { service: "Flea Treatment", price: "$20" },
    { service: "Creative Coloring", price: "$30+" }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="body-text-mobile text-white/80 max-w-3xl mx-auto px-4">
              Professional grooming services tailored to your dog's specific needs and your preferences
            </p>
          </div>

          {/* Grooming Services */}
          <div className="mb-12 md:mb-16">
            <h2 className="section-title-mobile font-bold text-gold mb-6 md:mb-8 text-center">
              Grooming Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {groomingServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-dark-bg/60 p-4 md:p-6 rounded-lg border border-gold/20 card-hover"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gold/20 pt-3 md:pt-4">
                    <p className="text-gold font-semibold text-base md:text-lg">
                      {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dental Services */}
          <div className="mb-12 md:mb-16">
            <h2 className="section-title-mobile font-bold text-gold mb-6 md:mb-8 text-center">
              Teeth Cleaning Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {dentalServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-dark-bg/60 p-4 md:p-6 rounded-lg border border-gold/20 card-hover"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-3 md:mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="border-t border-gold/20 pt-3 md:pt-4">
                    <p className="text-gold font-semibold text-base md:text-lg">
                      {service.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons and Extras */}
          <div className="mb-12 md:mb-16">
            <h2 className="section-title-mobile font-bold text-gold mb-6 md:mb-8 text-center">
              Add-On Services
            </h2>
            <div className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {extras.map((extra, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                    <span className="text-white text-sm md:text-base">{extra.service}</span>
                    <span className="text-gold font-semibold text-sm md:text-base">{extra.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="text-center bg-black/20 p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gold mb-4">Important Notes</h3>
            <div className="text-white/80 space-y-3 max-w-3xl mx-auto text-sm md:text-base">
              <p>
                <strong className="text-gold">Matting Fee:</strong> Dogs with severe matting may require 
                additional time and care. A $15-30 fee may apply depending on severity.
              </p>
              <p>
                <strong className="text-gold">Cancellation Policy:</strong> Please provide at least 
                24 hours notice for cancellations to avoid a $20 fee.
              </p>
              <p>
                <strong className="text-gold">Health Requirements:</strong> All dogs must be up to date 
                on vaccinations and flea-free for the safety of all pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
