import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h1 className="section-title-mobile md:text-5xl font-bold text-white mb-6">
              Get In <span className="gold-shine">Touch</span>
            </h1>
            <p className="body-text-mobile text-white/80 max-w-3xl mx-auto mb-8 md:mb-12 px-4">
              We respond within 24 hours — though occasionally, life (and dogs) get in the way! 🐾
              Please book 6–8 weeks in advance — we're in high demand and can't wait to pamper your pooch.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Facebook Contact */}
            <div className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20 card-hover text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Facebook Messenger</h3>
              <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6">
                Send me a message on Facebook for appointments and questions
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61556352770769&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm md:text-base"
              >
                Message on Facebook
              </a>
            </div>

            {/* Text/Phone Contact */}
            <div className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20 card-hover text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Text Message</h3>
              <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6">
                Text me directly for the fastest response (preferred method)
              </p>
              <a
                href="sms:+61413247210"
                className="btn-gold text-sm md:text-base"
              >
                Text: +61 413 247 210
              </a>
            </div>
          </div>

          {/* Business Hours & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Hours */}
            <div className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20">
              <h3 className="text-xl md:text-2xl font-semibold gold-shine mb-4 md:mb-6 text-center">Salon Hours</h3>
              <div className="space-y-2 md:space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-white/10 text-sm md:text-base">
                  <span className="text-white">Monday - Friday</span>
                  <span className="text-gold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm md:text-base">
                  <span className="text-white">Saturday - Sunday</span>
                  <span className="text-gold">Closed</span>
                </div>
                <div className="text-xs text-white/60 text-center mt-2">
                  (Only Open for appointments and services, no walk-ins)
                </div>
              </div>
              
              <h4 className="text-lg md:text-xl font-semibold gold-shine mb-3 md:mb-4 text-center">Appointment Booking Hours (By Phone)</h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10 text-sm md:text-base">
                  <span className="text-white">Monday - Saturday</span>
                  <span className="text-gold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 text-sm md:text-base">
                  <span className="text-white">Sunday</span>
                  <span className="text-gold">Closed</span>
                </div>
                <div className="text-xs text-white/60 text-center mt-2">
                  (For inquiries and scheduling only — salon may be closed during these times)
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-dark-bg/60 p-6 md:p-8 rounded-lg border border-gold/20">
              <h3 className="text-xl md:text-2xl font-semibold gold-shine mb-4 md:mb-6 text-center">Location</h3>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="text-sm md:text-base">
                  <p className="text-white font-medium">Coat by Cole</p>
                  <p className="text-white/80">21 Riverland Drive</p>
                  <p className="text-white/80">Stake Hill, Perth, WA 6181</p>
                  <p className="text-white/80">Australia</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4821969855765!2d115.773354915136!3d-32.49572788096252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32751c04a8a8e3%3A0xa6160fd2f9c368b7!2s21%20Riverland%20Dr%2C%20Stake%20Hill%20WA%206181%2C%20Australia!5e0!3m2!1sen!2sin!4v1720271200000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '0.75rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Coat by Cole Location"
                ></iframe>
                <a
                  href="https://maps.google.com/?q=21+Riverland+Drive+Stake+Hill+Perth+WA+6181+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-block text-sm md:text-base"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Booking Information */}
          <div className="bg-black/20 p-6 md:p-8 rounded-lg text-center">
            <h3 className="text-xl md:text-2xl font-bold gold-shine mb-4">Booking Information</h3>
            <div className="text-white/80 space-y-4 max-w-2xl mx-auto text-sm md:text-base text-center">
              <p><strong>Please include:</strong> Your dog's name, breed, size, and preferred appointment time</p>
              <p><strong>Response Time:</strong> We respond within 24 hours — though occasionally, life (and dogs) get in the way! </p>
              <p><strong>Advance Booking:</strong> Please book 6–8 weeks in advance — we're in high demand and can't wait to pamper your pooch</p>
              <p><strong>Appointment Hours:</strong> Monday to Saturday, 8:00 AM – 4:00 PM (Phone Only)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
