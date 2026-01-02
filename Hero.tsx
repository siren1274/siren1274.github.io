import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative bg-white border-2 border-[#C1CFD6] py-12">
      <div className="container mx-auto px-4">
        <div className="space-y-6 border-2 border-dashed border-[#C1CFD6] p-8">
          <h1 className="text-5xl lg:text-6xl text-[#2E2E4E]">
            Discover Your Next Great Read
          </h1>
          <p className="text-xl">
            Explore thousands of books across all genres. From bestsellers to hidden gems, find your perfect book today.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="border-2">Browse Books</Button>
            <Button size="lg" variant="outline" className="border-2 border-[#C1CFD6]">New Arrivals</Button>
          </div>
        </div>
      </div>
    </section>
  );
}