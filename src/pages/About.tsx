import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold text-white mb-6">
            Welcome to <span className="gold-shine">Coats by Cole</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-fade-in flex flex-col items-center">
              <div className="text-white/80 text-sm md:text-base mb-2 text-center font-playfair">“Meet Nicole's own furry best friends”</div>
              <div className="bg-gray-800 rounded-lg aspect-square overflow-hidden w-full">
                <img
                  src="/gallery/1A.jpg"
                  alt="Nicole's own furry best friends"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Desktop CTA Button & Text */}
              <div className="hidden lg:flex flex-col items-center mt-8">
                <a href="/contact" className="btn-gold-mobile">Book a Meet & Greet</a>
                <div className="text-white/80 mt-3 text-base">Come meet me in real life with your furry bestfriend.</div>
              </div>
            </div>

            <div className="animate-fade-in space-y-6">
              <div className="body-text-mobile text-white/90 leading-relaxed space-y-6 px-4 lg:px-0">
                <p>
                  Hi, I'm Nicole — the heart (and hands!) behind Coats by Cole. The name? A playful nod to both my own name and the beautiful coats I get to style every day. I'm a passionate dog groomer and stylist, slowly expanding in the gentle, stress-free bath & bubbles business to keep those pup smiles and coats sparkling!
                </p>
                <p>
                  Over the years, my little business has taken breaks for big life chapters like IVF and motherhood, but one thing's always stayed the same — my clients return, tails wagging. Not just for the precision teddy bear cuts, but because I take time to build real relationships — with both the dogs and their humans.
                </p>
                <p>
                  I believe grooming should be more than just functional — it should feel safe, familiar, and a little bit fabulous. That's why you'll meet my own dogs here before you even see me — a reminder that this space is built for wagging tails, warm hearts, and the kind of trust only pups truly understand.
                </p>
                <p>
                  Whether it's a fresh trim or a bubblegum-scented glow-up, you'll leave with a happy pup and a happy heart.
                </p>
              </div>

              <div className="bg-dark-bg/60 p-6 rounded-lg border border-gold/20">
                <h3 className="text-xl font-semibold text-gold mb-4">My Mission</h3>
                <p className="text-white/90">
                  To provide exceptional, personalized grooming services that enhance the bond 
                  between pets and their families, while ensuring every dog leaves looking and 
                  feeling their absolute best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile CTA Button & Text */}
      <div className="flex flex-col items-center mt-8 mb-16 lg:hidden">
        <a href="/contact" className="btn-gold-mobile">Book a Meet & Greet</a>
        <div className="text-white/80 mt-3 text-base text-center">Come meet me in real life with your furry bestfriend.</div>
      </div>
    </div>
  );
};

export default About;
