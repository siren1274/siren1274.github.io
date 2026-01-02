import { Book, MapPin, Heart, Users, Award, Sparkles, Clock, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AboutUsPageProps {
  onNavigateHome: () => void;
}

export function AboutUsPage({ onNavigateHome }: AboutUsPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#3F5461] border-b-2 border-[#C1CFD6] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-5xl text-white">
              About BookHaven
            </h1>
            <p className="text-xl text-[#C1CFD6]">
              Your trusted partner in the world of books since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
            <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Our Story
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-[#C1CFD6] p-8 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#5C2E5C] border-2 border-[#5C2E5C]">
                  <Book className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[25px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Who We Are
                </h3>
              </div>
              <p className="text-[#2E2E4E] leading-relaxed mb-4">
                Book Haven Bookstore is a local treasure for book enthusiasts, offering a diverse selection of books, magazines, journals, and office supplies. With a deep-rooted commitment to fostering literary exploration and a love for reading, we are dedicated to creating both a physical and digital presence that celebrates the world of words.
              </p>
              <p className="text-[#2E2E4E] leading-relaxed">
                Serving a broad audience of avid readers, students, and knowledge seekers, we provide high-quality reading materials and office essentials to support your intellectual journey.
              </p>
            </div>

            <div className="border-2 border-[#C1CFD6] p-8 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-[#742C36] border-2 border-[#742C36]">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[25px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-[#2E2E4E] leading-relaxed mb-4">
                Our mission is to amplify our visibility, cultivate a vibrant literary community, and simplify the process of book inquiries and purchases. We believe in celebrating the written word and creating an inviting space—both physical and digital—that encourages literary discovery.
              </p>
              <p className="text-[#2E2E4E] leading-relaxed">
                Through our carefully curated collection and dedicated service, we strive to support intellectual growth and connect readers with the books and materials that will enrich their lives.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="border-2 border-dashed border-[#C1CFD6] p-8 mb-8">
            <h3 className="text-[25px] text-[#2E2E4E] mb-6 text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-[#3E5641] border-2 border-[#3E5641] mb-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#2E2E4E] mb-2">Quality</h4>
                <p className="text-sm text-[#3F5461]">
                  Only the finest books, carefully selected for our readers
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-[#5C2E5C] border-2 border-[#5C2E5C] mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#2E2E4E] mb-2">Community</h4>
                <p className="text-sm text-[#3F5461]">
                  Building connections through shared love of literature
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-[#3F5461] border-2 border-[#3F5461] mb-3">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#2E2E4E] mb-2">Discovery</h4>
                <p className="text-sm text-[#3F5461]">
                  Helping readers find their next great adventure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Order Section */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
            <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Special Orders
            </h2>
            <p className="text-[#3F5461]" style={{ fontFamily: 'Comfortaa, cursive' }}>
              Can't find what you're looking for? We'll help you track it down.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Special Order Info */}
            <div className="border-2 border-[#C1CFD6] p-8 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#3E5641] border-2 border-[#3E5641]">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[25px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  How It Works
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5C2E5C] text-white flex items-center justify-center border-2 border-[#5C2E5C]">
                    1
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Submit Your Request</h4>
                    <p className="text-sm text-[#3F5461]">
                      Fill out the form with book details including title, author, ISBN, or any other information you have.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5C2E5C] text-white flex items-center justify-center border-2 border-[#5C2E5C]">
                    2
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">We Search</h4>
                    <p className="text-sm text-[#3F5461]">
                      Our team will search our network of suppliers and publishers to locate your requested book.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5C2E5C] text-white flex items-center justify-center border-2 border-[#5C2E5C]">
                    3
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Get Notified</h4>
                    <p className="text-sm text-[#3F5461]">
                      Within 2-3 business days, we'll contact you with availability and pricing information.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5C2E5C] text-white flex items-center justify-center border-2 border-[#5C2E5C]">
                    4
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Receive Your Book</h4>
                    <p className="text-sm text-[#3F5461]">
                      Once ordered, most special requests arrive within 7-10 business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border-2 border-dashed border-[#C1CFD6] bg-[#f5f5f7]">
                <p className="text-sm text-[#3F5461]">
                  <strong>Note:</strong> Special orders are non-refundable. Processing time may vary for rare or out-of-print titles.
                </p>
              </div>
            </div>

            {/* Special Order Form */}
            <div className="border-2 border-[#C1CFD6] p-8 bg-[#5C2E5C]">
              <h3 className="text-[25px] text-white mb-6" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                Request a Special Order
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
                  <label htmlFor="bookTitle" className="block text-white mb-2 text-sm">
                    Book Title *
                  </label>
                  <Input
                    id="bookTitle"
                    type="text"
                    placeholder="The title you're looking for"
                    className="border-2 border-white bg-white"
                    required
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

                <div>
                  <label htmlFor="details" className="block text-white mb-2 text-sm">
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    rows={4}
                    placeholder="Any other information that might help us find your book..."
                    className="w-full border-2 border-white rounded-md px-3 py-2 text-sm bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full border-2 border-white bg-[#3E5641] hover:bg-[#2E2E4E] text-white"
                >
                  Submit Special Order Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
            <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Visit Our Store
            </h2>
            <p className="text-[#3F5461]" style={{ fontFamily: 'Comfortaa, cursive' }}>
              Come explore our collection in person. We'd love to see you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="border-2 border-[#C1CFD6] p-8 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-[#5C2E5C] border-2 border-[#5C2E5C]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[25px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Store Information
                </h3>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-[#3F5461] border-2 border-[#3F5461] h-fit">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Address</h4>
                    <p className="text-[#3F5461]">
                      123 Literary Lane<br />
                      Booktown, BK 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-[#3E5641] border-2 border-[#3E5641] h-fit">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Phone</h4>
                    <p className="text-[#3F5461]">
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-[#742C36] border-2 border-[#742C36] h-fit">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Email</h4>
                    <p className="text-[#3F5461]">
                      hello@bookhaven.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-2 rounded-full bg-[#5C2E5C] border-2 border-[#5C2E5C] h-fit">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2E2E4E] mb-1">Store Hours</h4>
                    <div className="text-[#3F5461] space-y-1">
                      <p>Monday–Friday: 9 a.m. to 8 p.m.</p>
                      <p>Saturday: 10 a.m. to 6 p.m.</p>
                      <p>Sunday: 11 a.m. to 5 p.m.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 border-2 border-dashed border-[#C1CFD6] bg-[#f5f5f7]">
                <p className="text-sm text-[#3F5461]">
                  <strong>Free Parking:</strong> Available in the rear parking lot. Wheelchair accessible entrance on the east side.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="border-2 border-[#C1CFD6] bg-white overflow-hidden">
              <div className="relative w-full h-full min-h-[500px] bg-[#E8EEF2] flex items-center justify-center">
                {/* Wireframe Map Placeholder */}
                <div className="absolute inset-0 p-8">
                  <div className="w-full h-full border-2 border-dashed border-[#C1CFD6] flex flex-col items-center justify-center gap-4 bg-white">
                    <MapPin className="w-16 h-16 text-[#5C2E5C]" />
                    <div className="text-center space-y-2">
                      <h4 className="text-[#2E2E4E]">Interactive Map</h4>
                      <p className="text-sm text-[#3F5461] max-w-xs">
                        123 Literary Lane, Booktown, BK 12345
                      </p>
                    </div>
                    
                    {/* Wireframe Grid Pattern */}
                    <div className="absolute inset-8 grid grid-cols-8 grid-rows-8 opacity-20">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-[#C1CFD6]" />
                      ))}
                    </div>

                    {/* Wireframe Marker */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-[#742C36] border-4 border-white shadow-lg flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-white border-2 border-[#2E2E4E] px-3 py-1 rounded shadow-lg">
                          <p className="text-xs text-[#2E2E4E]">BookHaven</p>
                        </div>
                      </div>
                    </div>

                    {/* Wireframe Streets */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#C1CFD6]" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#C1CFD6]" />
                      <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-[#C1CFD6] opacity-50" />
                      <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-[#C1CFD6] opacity-50" />
                      <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-[#C1CFD6] opacity-50" />
                      <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-[#C1CFD6] opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="mt-8 border-2 border-[#C1CFD6] p-6 bg-[#3F5461]">
            <h3 className="text-[25px] text-white mb-4 text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Getting Here
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-white">
              <div className="text-center">
                <h4 className="text-[#C1CFD6] mb-2">By Car</h4>
                <p className="text-sm">
                  Take Exit 45 from Highway 101. Turn left on Literary Lane. We're on the right side.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-[#C1CFD6] mb-2">By Public Transit</h4>
                <p className="text-sm">
                  Bus routes 12, 34, and 56 stop at Literary Lane & Book Street, one block away.
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-[#C1CFD6] mb-2">By Bike</h4>
                <p className="text-sm">
                  Bike racks available at the front entrance. We're on the city bike path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-[#2E2E4E] border-t-2 border-[#C1CFD6]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 border-2 border-dashed border-[#3F5461] p-8">
            <h2 className="text-3xl text-white">
              Ready to Explore Our Collection?
            </h2>
            <p className="text-[#C1CFD6]">
              Browse thousands of books across all genres and find your next great read today.
            </p>
            <Button
              onClick={onNavigateHome}
              className="border-2 border-[#C1CFD6] bg-[#5C2E5C] hover:bg-[#742C36] text-white"
            >
              Browse Books
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}