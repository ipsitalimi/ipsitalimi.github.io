
import Navigation from "@/components/Navigation";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Mitchell",
      rating: 5,
      text: "Nicole is absolutely amazing! My golden retriever Max has been going to her for 2 years now and he actually gets excited when we pull up to the salon. She takes such great care of him and he always comes out looking like a show dog. Highly recommend!",
      date: "2 weeks ago",
      dogPhoto: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=120&h=120&fit=crop"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      rating: 5,
      text: "Best groomer in town! My rescue pit bull was terrified of grooming when I first adopted him. Nicole was so patient and gentle with him. Now he loves going there and looks forward to his spa days. Professional, affordable, and genuinely cares about the dogs.",
      date: "1 month ago",
      dogPhoto: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=120&h=120&fit=crop"
    },
    {
      id: 3,
      name: "Jennifer Liu",
      rating: 5,
      text: "I've been taking my two poodles to Nicole for over a year. She does an incredible job with their cuts and they always smell amazing when I pick them up. The salon is clean, she's always on time, and her prices are very reasonable. Couldn't ask for better service!",
      date: "3 weeks ago",
      dogPhoto: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=120&h=120&fit=crop"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      text: "Nicole groomed my elderly lab mix who has arthritis and some mobility issues. She was so gentle and accommodating, taking breaks when he needed them. He looked great and seemed comfortable the whole time. Thank you for treating senior dogs with such care!",
      date: "1 week ago",
      dogPhoto: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=120&h=120&fit=crop"
    },
    {
      id: 5,
      name: "Amanda Foster",
      rating: 5,
      text: "My husky sheds like crazy and Nicole's de-shedding treatment is a lifesaver! She gets so much undercoat out and my dog feels so much more comfortable afterward. Plus the teeth cleaning service is fantastic - my vet even commented on how clean his teeth were!",
      date: "2 months ago",
      dogPhoto: "https://images.unsplash.com/photo-1581888227599-779811939961?w=120&h=120&fit=crop"
    },
    {
      id: 6,
      name: "Robert Chen",
      rating: 5,
      text: "Brought my corgi puppy for his first grooming experience and Nicole made it so positive. She took her time introducing him to everything and he wasn't scared at all. Now at 8 months old, he runs right into the salon! Great with puppies and new dogs.",
      date: "3 months ago",
      dogPhoto: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=120&h=120&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client <span className="text-gold">Reviews</span>
            </h1>
            <p className="text-xl text-white/80">
              Here's what our clients are saying about their grooming experience
            </p>
          </div>

          {/* Reviews List */}
          <div className="space-y-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20 card-hover animate-fade-in"
              >
                <div className="flex items-start space-x-4">
                  {/* Dog Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.dogPhoto}
                      alt={`${review.name}'s dog`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                    />
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {review.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {/* Star Rating */}
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-gold fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-white/60 text-sm">{review.date}</span>
                      </div>
                    </div>

                    <p className="text-white/90 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-black/20 rounded-lg">
            <h3 className="text-2xl font-bold text-gold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-white/80 mb-6">
              Book your appointment today and see why our clients love bringing their dogs to us!
            </p>
            <a
              href="/contact"
              className="btn-gold text-lg"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
