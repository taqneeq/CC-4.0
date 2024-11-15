export default function About() {
  return (
    <section className="min-h-screen  w-full flex-col items-center text-center justify-around md:ml-auto p-8 space-y-20 relative max-w-7xl mx-auto">
      <div className="flex flex-col items-start justify-start gap-4 md:gap-2 lg:gap-4 w-full text-left">
        <h1 className="text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          What is Cyber Cypher?
        </h1>
        <p className="text-xl font-code max-w-prose md:text-justify">
          The goal of the 18-hour hackathon Cyber Cypher is to provide aspiring
          and seasoned programmers a platform. Our aim is to reach engineering
          students across all skill levels, from those with little coding
          experience to those with extensive knowledge. Cyber Cypher aims to
          awaken in the participants the boundless potential that this dynamic
          field of computer sciences holds for them—potential that currently
          lies dormant.
        </p>
      </div>
      <div className="flex flex-col items-end justify-end gap-4 md:gap-2 lg:gap-4 w-full text-left">
        <h1 className="text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
          Organizers
        </h1>
        <p className="text-xl font-code max-w-prose md:text-justify md:[text-align-last:right]">
          The goal of the 18-hour hackathon Cyber Cypher is to provide aspiring
          and seasoned programmers a platform. Our aim is to reach engineering
          students across all skill levels, from those with little coding
          experience to those with extensive knowledge. Cyber Cypher aims to
          awaken in the participants the boundless potential that this dynamic
          field of computer sciences holds for them—potential that currently
          lies dormant.
        </p>
      </div>
    </section>
  );
}
