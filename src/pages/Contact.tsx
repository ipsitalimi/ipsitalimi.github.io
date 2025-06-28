
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Ready to book an appointment? Message me on Facebook or text me directly to schedule. 
              Text messages are preferred for faster response times.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Facebook Contact */}
            <div className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20 card-hover text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Facebook Messenger</h3>
              <p className="text-white/80 mb-6">
                Send me a message on Facebook for appointments and questions
              </p>
              <a
                href="https://facebook.com/pawsandpolishgrooming"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Message on Facebook
              </a>
            </div>

            {/* Text/Phone Contact */}
            <div className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20 card-hover text-center">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Text Message</h3>
              <p className="text-white/80 mb-6">
                Text me directly for the fastest response (preferred method)
              </p>
              <a
                href="sms:+15551234567"
                className="btn-gold"
              >
                Text: (555) 123-4567
              </a>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Hours */}
            <div className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold text-gold mb-6 text-center">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white">Monday - Friday</span>
                  <span className="text-gold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-white">Saturday</span>
                  <span className="text-gold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white">Sunday</span>
                  <span className="text-gold">Closed</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-dark-bg/60 p-8 rounded-lg border border-gold/20">
              <h3 className="text-2xl font-semibold text-gold mb-6 text-center">Location</h3>
              <div className="text-center space-y-4">
                <div>
                  <p className="text-white font-medium">Paws & Polish Grooming</p>
                  <p className="text-white/80">123 Main Street</p>
                  <p className="text-white/80">Your City, State 12345</p>
                </div>
                <a
                  href="https://maps.google.com/?q=123+Main+Street+Your+City+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-block"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-black/20 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gold mb-4">Booking Information</h3>
            <div className="text-white/80 space-y-3 max-w-2xl mx-auto">
              <p>
                🐕 <strong>Please include:</strong> Your dog's name, breed, size, and preferred appointment time
              </p>
              <p>
                ⏰ <strong>Response Time:</strong> I typically respond within 2-4 hours during business days
              </p>
              <p>
                📅 <strong>Advance Booking:</strong> I recommend booking 1-2 weeks in advance, especially for weekends
              </p>
              <p>
                🚨 <strong>Emergency Grooming:</strong> Same-day appointments may be available - just ask!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
