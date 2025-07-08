import Navigation from "@/components/Navigation";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Bec Mullins",
      rating: 5,
      text: "My 2 Oodles visited Nicole today and I'm delighted with the results! Franki the Groodle's first groom was a huge success and Albie the Moodle came home pretty happy with himself. I loved that Nicole listened to my requests and worked so well with my boys. We will be back, and I won't hesitate to recommend her. Thanks a million, Nicole!",
      date: "3 weeks ago"
    },
    {
      id: 2,
      name: "Karina Storen",
      rating: 5,
      text: "Nicole goes above & beyond!! I can't recommend her highly enough. A beautiful, welcoming set-up for her furry clients, complete with treats. She takes time, she takes care & she takes notice. Humans are made to feel just as welcome when dropping off & picking up dogs too. I wish we found her years ago!! Do yourself & your dogs a favour — Coats By Cole is the ONLY place to go for dog grooming, paws down.",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Michelle Joans",
      rating: 5,
      text: "So happy with Lulu's haircut! She will be back for the same again... my daughter was so impressed, she'll be bringing her pooch to you too!",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "Jessica Gomersall",
      rating: 5,
      text: "My Toby looks so beautiful. Highly recommend Nicole for all your poochy grooming needs! Her patience and kindness to each and every individual doggy should be commended! Not only does she do a gorgeous job, she takes her time and cares so deeply for their souls! Thank you so much, Nicole! We will definitely be back! xxxxx",
      date: "5 days ago"
    },
    {
      id: 5,
      name: "Alice Wolfe",
      rating: 5,
      text: "Amazing private groomer. My dog Remy has a very wiry coat and came back smelling of bubblegum and feeling like silk. Very reasonable pricing — great for fussy dogs who don't like being groomed.",
      date: "4 weeks ago"
    },
    {
      id: 6,
      name: "Kylie Taylor",
      rating: 5,
      text: "Our dog just loves going here. Such a great cut every time. Highly recommend Nicole!",
      date: "2 months ago"
    },
    {
      id: 7,
      name: "Tracy Kelsey",
      rating: 5,
      text: "Such a gorgeous environment and my boy came out happy and beautifully groomed.",
      date: "1 week ago"
    },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-28 md:pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold gold-shine mb-6">
              Real Reviews from Our Happy Clients
            </h1>
          </div>

          {/* Reviews List */}
          <div className="space-y-6 md:space-y-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20 card-hover animate-fade-in"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  {/* Review Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h3 className="text-lg md:text-xl font-semibold gold-shine truncate">
                        {review.name}
                      </h3>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {/* Star Rating */}
                        <div className="flex space-x-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 md:w-5 md:h-5 text-gold fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-black/20 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-white/80 text-sm md:text-base mb-6 px-4">
              Book your appointment today and see why our clients love bringing their dogs to us!
            </p>
            <a
              href="/contact"
              className="btn-gold-mobile"
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
