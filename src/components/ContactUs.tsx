import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    customOrderDetails: '',
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessDialog(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: '',
      customOrderDetails: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
      {/* Header */}
      <div className="mb-12 pb-6 border-b-2 border-dashed border-[#C1CFD6] text-center">
        <h1 className="text-[40px] text-[#2E2E4E] mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
          Contact Us
        </h1>
        <p className="text-[#2E2E4E] max-w-3xl mx-auto" style={{ fontFamily: 'Comfortaa, cursive' }}>
          We'd love to hear from you. Send us a message or request a custom order.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="border-2 border-[#C1CFD6] p-8 bg-white">
            <h2 className="text-[30px] text-[#2E2E4E] mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Get in Touch
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#5C2E5C]" />
                </div>
                <div>
                  <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                    Address
                  </h3>
                  <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                    123 Literary Lane<br />
                    Book District<br />
                    Reading City, RC 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#3E5641]" />
                </div>
                <div>
                  <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                    Phone
                  </h3>
                  <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                    (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#742C36]" />
                </div>
                <div>
                  <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                    Email
                  </h3>
                  <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                    info@bookhaven.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#3F5461]" />
                </div>
                <div>
                  <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                    Business Hours
                  </h3>
                  <div className="text-[#2E2E4E] text-sm space-y-1" style={{ fontFamily: 'Calibri, sans-serif' }}>
                    <p>Monday – Friday: 9:00 a.m. – 8:00 p.m.</p>
                    <p>Saturday: 10:00 a.m. – 6:00 p.m.</p>
                    <p>Sunday: 11:00 a.m. – 5:00 p.m.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Orders Info */}
          <div className="border-2 border-[#C1CFD6] p-6 bg-[#F8F8F8]">
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-6 h-6 text-[#5C2E5C]" />
              <h3 className="text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Custom Orders
              </h3>
            </div>
            <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Looking for a specific book or need a bulk order? We can help! Select "Custom Order Request" 
              in the form and provide details about what you're looking for. We'll get back to you within 
              24-48 hours with availability and pricing.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border-2 border-[#C1CFD6] p-8 bg-white">
          <h2 className="text-[30px] text-[#2E2E4E] mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E]"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E]"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E] p-2 rounded"
                style={{ fontFamily: 'Calibri, sans-serif' }}
              >
                <option value="general">General Inquiry</option>
                <option value="custom">Custom Order Request</option>
                <option value="feedback">Feedback</option>
                <option value="support">Customer Support</option>
              </select>
            </div>

            {formData.subject === 'custom' && (
              <div className="border-2 border-[#5C2E5C] p-4 bg-[#F8F8F8]">
                <label htmlFor="customOrderDetails" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Custom Order Details *
                </label>
                <Textarea
                  id="customOrderDetails"
                  name="customOrderDetails"
                  required={formData.subject === 'custom'}
                  value={formData.customOrderDetails}
                  onChange={handleChange}
                  className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E] min-h-[100px]"
                  placeholder="Please provide details: book title, author, ISBN, quantity, special requirements, etc."
                  style={{ fontFamily: 'Calibri, sans-serif' }}
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-[#2E2E4E] mb-2 text-sm" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-[#C1CFD6] bg-white text-[#2E2E4E] min-h-[150px]"
                placeholder="Type your message here..."
                style={{ fontFamily: 'Calibri, sans-serif' }}
              />
            </div>

            <Button
              type="submit"
              className="w-full border-2 border-[#C1CFD6] bg-[#3E5641] hover:bg-[#5C2E5C] text-white flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="border-2 border-[#C1CFD6] bg-white">
          <DialogHeader>
            <DialogTitle className="text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Message Sent Successfully!
            </DialogTitle>
          </DialogHeader>
          <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
            Thank you for contacting Book Haven. We'll respond to your {formData.subject === 'custom' ? 'custom order request' : 'message'} within 24-48 hours.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
}
