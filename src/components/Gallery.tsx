import bookImage1 from 'figma:asset/2c672929bb5044740b1ea318f56eb2b08662215a.png';
import bookImage2 from 'figma:asset/44dfd1a3165e31d0a36c367e10994cc2ce0b97cf.png';
import bookImage3 from 'figma:asset/f004e553b9d8f9ce2808b18b6e85304e0de116e3.png';
import magazineImage1 from 'figma:asset/4c96faa8f158d609eaf25ec8cc945644a202634c.png';
import magazineImage2 from 'figma:asset/6affcab7fb4cbb4dbf66f6e9224444fdf889309c.png';
import magazineImage3 from 'figma:asset/f91549ef92546cb7db076e3d1967ffc22c28fc01.png';
import merchandiseImage1 from 'figma:asset/f1979c066ad28d7d4598abad3652c9043196b1fd.png';
import merchandiseImage2 from 'figma:asset/a3caa678d19efdbc4a627c245ced50beeaddd25b.png';
import merchandiseImage3 from 'figma:asset/321161bdb73717a2b28474f367862884e601e3cf.png';

const galleryImages = [
  {
    id: 1,
    url: bookImage1,
    title: "Brie Mine 4Ever, a book for cheese lovers"
  },
  {
    id: 2,
    url: bookImage2,
    title: "Glory Riders, a book about bikers"
  },
  {
    id: 3,
    url: bookImage3,
    title: "Sorcerer's Shadowed Chronicles, a fantasy book"
  },
  {
    id: 4,
    url: magazineImage1,
    title: "Bali, a magazine about pickleball"
  },
  {
    id: 5,
    url: magazineImage2,
    title: "Travel, a magazine for travelers"
  },
  {
    id: 6,
    url: magazineImage3,
    title: "Eat, a magazine for foodies"
  },
  {
    id: 7,
    url: merchandiseImage1,
    title: "A canvas tote bag with black lettering that says ALL I DO IS READ READ READ"
  },
  {
    id: 8,
    url: merchandiseImage2,
    title: "A notebook with text on the cover that says Book Haven Bookstore"
  },
  {
    id: 9,
    url: merchandiseImage3,
    title: "A set of four Book Haven Bookstore stickers that promote reading"
  }
];

export function Gallery() {
  return (
    <section className="py-12 container mx-auto px-4 border-b-2 border-[#C1CFD6]">
      <div className="mb-8 pb-4 border-b-2 border-dashed border-[#C1CFD6]">
        <h2 className="text-[30px] text-[#2E2E4E] mb-2" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>
          Gallery
        </h2>
        <p className="text-[#3F5461]" style={{ fontFamily: 'Comfortaa, cursive' }}>
          Explore our curated collection of books and reading experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="border-2 border-[#C1CFD6] overflow-hidden hover:border-[#5C2E5C] transition-colors bg-[#E8E8E8]"
          >
            <div className="aspect-square overflow-hidden bg-[#E8E8E8] flex items-center justify-center p-8">
              <img
                src={image.url}
                alt={image.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white border-t-2 border-[#C1CFD6]">
              <p className="text-[#2E2E4E]" style={{ fontFamily: 'Calibri, sans-serif' }}>
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}