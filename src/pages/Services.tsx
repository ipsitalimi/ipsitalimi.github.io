import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const groomingServices = [
  {
    title: "Comfort Clip",
    description: "13mm or shorter, one length all over. Nails clipped, ears cleaned.",
    prices: [
      { size: "Small (under 9kg)", price: "$85" },
      { size: "Medium (9–15kg)", price: "$95" },
      { size: "Large (15–22kg)", price: "$110" },
      { size: "XL (22kg+)", price: "$130" },
    ],
  },
  {
    title: "Full Groom",
    description: "13mm or shorter with a longer/fluffy head. Nails clipped, ears cleaned.",
    prices: [
      { size: "Small (under 9kg)", price: "$90" },
      { size: "Medium (9–15kg)", price: "$110" },
      { size: "Large (15–22kg)", price: "$140" },
      { size: "XL (22kg+)", price: "$180" },
    ],
  },
  {
    title: "Style Groom / Breed Clip",
    description: "13mm or longer, style of choice. Nails clipped, ears cleaned.",
    prices: [
      { size: "Small (under 9kg)", price: "$100" },
      { size: "Medium (9–15kg)", price: "$120" },
      { size: "Large (15–22kg)", price: "$150" },
      { size: "XL (22kg+)", price: "$200" },
    ],
  },
  {
    title: "Hygiene Groom",
    description: "Warm bath, blow dry, nails, face trim, paw pads shaved, bum and underneath trimmed.",
    priceNote: "Prices are $15 less than the Full Groom price.",
  },
  {
    title: "Wash & Blow Dry",
    description: "",
    prices: [
      { size: "Small", price: "$35" },
      { size: "Medium", price: "$45" },
      { size: "Large", price: "$55" },
      { size: "XL", price: "$70" },
    ],
  },
  {
    title: "Wash & Towel Dry",
    description: "",
    prices: [
      { size: "Small", price: "$20" },
      { size: "Medium", price: "$30" },
      { size: "Large", price: "$40" },
      { size: "XL", price: "$45" },
    ],
  },
  {
    title: "De-shedding",
    description: "For de-shedding prices, please message me directly.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-black font-['Playfair_Display']">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gold-shine mb-4 tracking-tight">Our Services</h1>
            <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded" />
            <p className="text-white/80 text-lg max-w-2xl mx-auto">Clean, elegant, and tailored for your pup's comfort.</p>
          </div>

          {/* Grooming Services Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold gold-shine mb-8">Grooming Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12">
              {groomingServices.map((service, idx) => (
                <div
                  key={service.title}
                  className="bg-black border border-gold rounded-xl shadow-lg shadow-gold/10 p-7 transition-transform hover:scale-[1.025] hover:shadow-xl hover:shadow-gold/20 group hover:border-gold/90 hover:text-gold"
                >
                  <h3 className="text-xl font-bold gold-shine mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                  {service.description && (
                    <p className="text-white/80 mb-3 text-base whitespace-pre-line">{service.description}</p>
                  )}
                  {service.prices && (
                    <table className="w-full text-left mb-2">
                      <tbody>
                        {service.prices.map((p, i) => (
                          <tr key={i}>
                            <td className="py-1 pr-8 text-white/70 text-sm font-medium">{p.size}</td>
                            <td className="py-1 gold-shine text-sm font-semibold">{p.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  {service.priceNote && (
                    <div className="italic text-gold/80 text-sm mb-1">{service.priceNote}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 text-white/70 text-sm md:text-base text-center">
              <div className="mb-2">Note: Prices may vary depending on oodle breeds and coat conditions.</div>
            </div>
          </section>

          {/* Book Now Button */}
          <div className="flex justify-center mt-16">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gold text-black font-bold text-lg shadow-md transition hover:bg-black hover:text-gold hover:border hover:border-gold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
