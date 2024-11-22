export default function Testimonial() {
  return (
    <section className="min-h-screen max-h-[1440px] w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative">
      <h1 className="text-center text-5xl md:text-8xl font-retro font-bold mb-8 drop-shadow-[5px_5px_0_rgba(245,59,64,1)]">
        Testimonial
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center h-full">
        <div className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(245,59,64,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full">
          <img
            src="https://cdn.gdscmpstme.com/medium_Aanchal_Shah_5ff373c32c/medium_Aanchal_Shah_5ff373c32c.jpg"
            className="size-20 rounded-full"
          ></img>
          <blockquote className="font-code">
            For me Cyber Cypher was introduction to the ML domain. Everyone can
            find their own niche and learn a lot.
          </blockquote>
          <cite className="not-italic font-bold block font-code">
            - Aanchal
          </cite>
        </div>

        <div className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(113,208,202,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full">
          <img
            src="https://naitiklodha.tech/_next/image?url=%2Fbook-reading.jpeg&w=640&q=75"
            className="size-20 rounded-full"
          ></img>
          <blockquote className="font-code">
            Cyber Cypher was my first ever hackathon and I had a great
            experience. I would definitely recommend it to anyone who wants to
            get started with hackathons.
          </blockquote>
          <cite className="not-italic font-bold block font-code">- Naitik</cite>
        </div>

        <div className="border border-pink-600 border-double drop-shadow-[1px_1px_0_rgba(140,122,230,1)] transition-all duration-300 ease-in-out items-center space-y-5 p-12 rounded-sm body-lg col text-medium bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 h-full">
          <img
            src="https://cdn.gdscmpstme.com/medium_Tanay_Kumar_8f2ee0d2d2/medium_Tanay_Kumar_8f2ee0d2d2.png"
            className="size-20 rounded-full"
          ></img>
          <blockquote className="font-code">
            Cyber Cypher was the place where i learnt the most about web
            development. It was a great experience
          </blockquote>
          <cite className="not-italic font-bold block font-code">
            - Tanay Kumar{" "}
          </cite>
        </div>
      </div>
    </section>
  );
}
