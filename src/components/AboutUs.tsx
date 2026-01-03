import { Book, Clock, MapPin, Heart, Users, Star } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
      {/* Header */}
      <div className="mb-12 pb-6 border-b-2 border-dashed border-[#C1CFD6] text-center">
        <h1 className="text-[40px] text-[#2E2E4E] mb-4" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
          About Book Haven Bookstore
        </h1>
        <p className="text-[#2E2E4E] max-w-3xl mx-auto" style={{ fontFamily: 'Comfortaa, cursive' }}>
          A local treasure offering books, magazines, journals, and office supplies
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-12 border-2 border-[#C1CFD6] p-8 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
          <Book className="w-8 h-8 text-[#5C2E5C]" />
          <h2 className="text-[30px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
            Our Story
          </h2>
        </div>
        <div className="space-y-4 text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
          <p>
            Welcome to Book Haven Bookstore, your neighborhood destination for literary exploration and discovery. 
            Since our founding, we have been dedicated to fostering a love of reading in our community by providing 
            a carefully curated selection of books across all genres, ages, and interests.
          </p>
          <p>
            What began as a small independent bookstore has grown into a beloved local treasure, serving readers 
            who appreciate the personal touch that only a community bookstore can provide. We take pride in knowing 
            our customers and helping them find their next great read.
          </p>
          <p>
            Beyond books, we offer an extensive collection of magazines, journals, and office supplies to meet all 
            your reading and writing needs. Whether you're searching for the latest bestseller, a rare classic, or 
            quality stationery, Book Haven is here to serve you.
          </p>
        </div>
      </div>

      {/* Store Hours */}
      <div className="mb-12 border-2 border-[#C1CFD6] p-8 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
          <Clock className="w-8 h-8 text-[#3E5641]" />
          <h2 className="text-[30px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
            Store Hours
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-2 border-[#C1CFD6] p-6 bg-[#F8F8F8]">
            <h3 className="text-[#2E2E4E] mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Monday – Friday
            </h3>
            <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
              9:00 a.m. – 8:00 p.m.
            </p>
          </div>
          <div className="border-2 border-[#C1CFD6] p-6 bg-[#F8F8F8]">
            <h3 className="text-[#2E2E4E] mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Saturday
            </h3>
            <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
              10:00 a.m. – 6:00 p.m.
            </p>
          </div>
          <div className="border-2 border-[#C1CFD6] p-6 bg-[#F8F8F8]">
            <h3 className="text-[#2E2E4E] mb-3" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
              Sunday
            </h3>
            <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
              11:00 a.m. – 5:00 p.m.
            </p>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="mb-12 border-2 border-[#C1CFD6] p-8 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
          <Star className="w-8 h-8 text-[#742C36]" />
          <h2 className="text-[30px] text-[#2E2E4E]" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
            What We Offer
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-2 border-[#C1CFD6] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                <Book className="w-6 h-6 text-[#5C2E5C]" />
              </div>
              <div>
                <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Books
                </h3>
                <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  An extensive collection spanning fiction, non-fiction, bestsellers, classics, children's books, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#C1CFD6] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#3E5641]" />
              </div>
              <div>
                <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Magazines
                </h3>
                <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  The latest issues covering lifestyle, travel, food, sports, and various special interests.
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#C1CFD6] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-[#742C36]" />
              </div>
              <div>
                <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Journals
                </h3>
                <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  Beautiful journals and notebooks for writers, artists, and anyone who loves putting pen to paper.
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-[#C1CFD6] p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-[#C1CFD6] bg-[#E8E8E8] flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-[#3F5461]" />
              </div>
              <div>
                <h3 className="text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
                  Office Supplies
                </h3>
                <p className="text-[#2E2E4E] text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                  Quality stationery, pens, pencils, and other essentials for your workspace and creative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="border-2 border-[#C1CFD6] p-8 bg-[#F8F8F8]">
        <h2 className="text-[30px] text-[#2E2E4E] mb-6 pb-4 border-b-2 border-dashed border-[#C1CFD6] text-center" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
          Our Mission
        </h2>
        <p className="text-[#2E2E4E] text-center max-w-3xl mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
          At Book Haven, we believe in the transformative power of reading and the importance of community. 
          Our mission is to provide a welcoming space where readers of all ages can discover new worlds, 
          expand their horizons, and connect with others who share their love of literature. We are committed 
          to supporting local authors, hosting community events, and being a gathering place for book lovers 
          throughout the neighborhood.
        </p>
      </div>
    </section>
  );
}
