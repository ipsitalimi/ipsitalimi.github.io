
import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gold">Nicole</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-gray-800 rounded-lg aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=600&fit=crop"
                  alt="Nicole with a happy dog"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in space-y-6">
              <div className="text-lg md:text-xl text-white/90 leading-relaxed space-y-6">
                <p>
                  Hi, I'm Nicole, and I've been passionately grooming dogs for over 12 years. 
                  What started as a love for animals has blossomed into a boutique grooming 
                  experience that treats every dog like family.
                </p>
                
                <p>
                  My approach is simple: create a calm, stress-free environment where your 
                  pet feels safe and loved. I believe grooming should be a positive experience, 
                  not a stressful one. That's why I take the time to build trust with each 
                  furry client, working at their pace and comfort level.
                </p>

                <p>
                  I specialize in breed-specific cuts, creative styling, and therapeutic grooming 
                  for senior dogs or those with special needs. Every dog is unique, and their 
                  grooming should reflect their personality while keeping them healthy and comfortable.
                </p>

                <p>
                  When I'm not at the salon, you'll find me volunteering at local animal rescues 
                  or spending time with my own rescue dogs, Max and Luna. They're my daily reminder 
                  of why this work means so much to me.
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
    </div>
  );
};

export default About;
