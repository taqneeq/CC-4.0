import Card from "./card.svg";
import Image from "next/image";

export default function Pdomains() {
  const domains = [
    {
      title: "Healthcare",
      description:
        "The importance of UI/UX in healthcare applications rests in its capacity to carefully strike a balance between user-centric design and technological functioning, promoting improved accessibility, user-friendly navigation, and increased user engagement in general for a more effective healthcare experience.",
    },
    // Add more domain objects here as needed
  ];

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center p-8">
      <h1 className="text-center text-4xl font-retro font-bold mb-8">
        Prior Domains
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="relative h-52 w-32 bg-white/5 rounded-lg overflow-hidden"
          >
            <Image
              src={Card}
              alt="Card"
              fill
              className="object-cover rounded-lg"
            />
            <div className="relative z-10 p-4 flex flex-col h-full w-full">
              <h2 className="text-xl font-retro font-bold text-center truncate">
                {domain.title}
              </h2>
              <p className="text-[6px]  mt-2 overflow-y-auto text-center line-clamp-6">
                {domain.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
