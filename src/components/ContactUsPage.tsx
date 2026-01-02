import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';

interface ContactUsPageProps {
  onNavigateHome: () => void;
}

export function ContactUsPage({ onNavigateHome }: ContactUsPageProps) {
  const [formType, setFormType] = useState<'general' | 'special-order'>('general');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#3F5461] border-b-2 border-[#C1CFD6] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl text-white">
              Contact Us
            </h1>
            <p className="text-xl text-[#C1CFD6]">
              We'd love to hear from you. Get in touch with Book Haven today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
            <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Get In Touch
            </h2>
            <p className="text-[#3F5461]" style={{ fontFamily: 'Comfortaa, cursive' }}>
              Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <div className="border-2 border-[#C1CFD6] p-6 bg-white text-center hover:bg-[#f5f5f7] transition-colors">
              <div className="inline-flex p-4 rounded-full bg-[#3E5641] border-2 border-[#3E5641] mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#2E2E4E] mb-2">Phone</h3>
              <p className="text-[#2E2E4E]">
                (555) 867-5309
              </p>
              <p className="text-sm text-[#2E2E4E] mt-2">
                Mon-Fri: 9am-8pm
              </p>
            </div>

            {/* Email Card */}
            <div className="border-2 border-[#C1CFD6] p-6 bg-white text-center hover:bg-[#f5f5f7] transition-colors">
              <div className="inline-flex p-4 rounded-full bg-[#742C36] border-2 border-[#742C36] mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#2E2E4E] mb-2">Email</h3>
              <p className="text-[#2E2E4E]">
                contact@bookhaven.com
              </p>
              <p className="text-sm text-[#2E2E4E] mt-2">
                We reply within 24 hours
              </p>
            </div>

            {/* Location Card */}
            <div className="border-2 border-[#C1CFD6] p-6 bg-white text-center hover:bg-[#f5f5f7] transition-colors">
              <div className="inline-flex p-4 rounded-full bg-[#5C2E5C] border-2 border-[#5C2E5C] mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#2E2E4E] mb-2">Visit Us</h3>
              <p className="text-[#2E2E4E]">
                123 Literary Lane<br />
                Booktown, BK 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Instructions */}
            <div className="border-2 border-[#C1CFD6] p-8 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#3F5461] border-2 border-[#3F5461]">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[25px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Send Us a Message
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-[#2E2E4E] leading-relaxed">
                  Whether you have a general inquiry or need to request a special order, we're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>

                <div className="border-2 border-dashed border-[#C1CFD6] p-4 bg-[#f5f5f7]">
                  <h4 className="text-[#2E2E4E] mb-2">General Comments</h4>
                  <p className="text-sm text-[#2E2E4E]">
                    Questions about our store, book recommendations, store hours, or general feedback.
                  </p>
                </div>

                <div className="border-2 border-dashed border-[#C1CFD6] p-4 bg-[#f5f5f7]">
                  <h4 className="text-[#2E2E4E] mb-2">Special Orders</h4>
                  <p className="text-sm text-[#2E2E4E]">
                    Can't find a specific book? Request a special order and we'll track it down for you. Include as much detail as possible.
                  </p>
                </div>
              </div>

              <div className="border-2 border-[#C1CFD6] p-4 bg-[#3F5461]">
                <h4 className="text-white mb-2">Response Time</h4>
                <ul className="text-sm text-[#C1CFD6] space-y-1">
                  <li>• Email inquiries: Within 24 hours</li>
                  <li>• Special orders: 2-3 business days</li>
                  <li>• Phone calls: During business hours</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-2 border-[#C1CFD6] p-8 bg-[#2E2E4E]">
              <h3 className="text-[25px] text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Contact Form
              </h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 text-sm">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="border-2 border-white bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2 text-sm">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="border-2 border-white bg-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2 text-sm">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-2 border-white bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-type" className="block text-white mb-2 text-sm">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry-type"
                    className="w-full border-2 border-white rounded-md px-3 py-2 text-sm bg-white"
                    value={formType}
                    onChange={(e) => setFormType(e.target.value as 'general' | 'special-order')}
                    required
                  >
                    <option value="general">General Comments</option>
                    <option value="special-order">Special Order Request</option>
                  </select>
                </div>

                {formType === 'special-order' && (
                  <>
                    <div>
                      <label htmlFor="bookTitle" className="block text-white mb-2 text-sm">
                        Book Title
                      </label>
                      <Input
                        id="bookTitle"
                        type="text"
                        placeholder="Title of the book you're looking for"
                        className="border-2 border-white bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="author" className="block text-white mb-2 text-sm">
                        Author
                      </label>
                      <Input
                        id="author"
                        type="text"
                        placeholder="Author name (if known)"
                        className="border-2 border-white bg-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="isbn" className="block text-white mb-2 text-sm">
                        ISBN
                      </label>
                      <Input
                        id="isbn"
                        type="text"
                        placeholder="ISBN number (if known)"
                        className="border-2 border-white bg-white"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="message" className="block text-white mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder={formType === 'special-order' ? 
                      "Please provide any additional details about the book you're looking for..." : 
                      "Tell us what's on your mind..."}
                    className="w-full border-2 border-white rounded-md px-3 py-2 text-sm bg-white"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full border-2 border-white bg-[#5C2E5C] hover:bg-[#742C36] text-white flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
            <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border-2 border-[#C1CFD6] p-6 bg-white">
              <h3 className="text-[#2E2E4E] mb-2">What are your store hours?</h3>
              <p className="text-[#2E2E4E]">
                We're open Monday–Friday: 9 a.m. to 8 p.m., Saturday: 10 a.m. to 6 p.m., and Sunday: 11 a.m. to 5 p.m.
              </p>
            </div>

            <div className="border-2 border-[#C1CFD6] p-6 bg-white">
              <h3 className="text-[#2E2E4E] mb-2">How long do special orders take?</h3>
              <p className="text-[#2E2E4E]">
                Most special orders arrive within 7-10 business days. We'll contact you within 2-3 business days with availability and pricing.
              </p>
            </div>

            <div className="border-2 border-[#C1CFD6] p-6 bg-white">
              <h3 className="text-[#2E2E4E] mb-2">Do you buy used books?</h3>
              <p className="text-[#2E2E4E]">
                Yes! We accept gently used books for trade-in credit or cash. Bring them to the store during business hours for an evaluation.
              </p>
            </div>

            <div className="border-2 border-[#C1CFD6] p-6 bg-white">
              <h3 className="text-[#2E2E4E] mb-2">Is parking available?</h3>
              <p className="text-[#2E2E4E]">
                Free parking is available in our rear parking lot, with a wheelchair accessible entrance on the east side of the building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#3E5641] border-t-2 border-[#C1CFD6]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 border-2 border-dashed border-[#C1CFD6] p-8">
            <h2 className="text-3xl text-white">
              Start Browsing Our Collection
            </h2>
            <p className="text-[#C1CFD6]">
              Explore thousands of titles across all genres and discover your next favorite book.
            </p>
            <Button
              onClick={onNavigateHome}
              className="border-2 border-[#C1CFD6] bg-[#2E2E4E] hover:bg-[#5C2E5C] text-white"
            >
              Browse Books
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}