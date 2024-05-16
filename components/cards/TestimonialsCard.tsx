import Image from "next/image";

const testimonials = [
  {
    description: "I had the pleasure of working with Adekunle at Punch. He consistently demonstrated exceptional professionalism and a strong work ethic, successfully completing various projects. His creativity, attention to detail, and ability to work effectively in a team environment made a significant impact on our organization. I highly recommend Adekunle for any role in which he is interested and am confident he will excel.",
    name: "Malik Muhammad Ali",
    title: "HR at Software Finder",
    imageSrc: "/malik.png"
  },
   {
    description: "Deeply code-driven, consistently demonstrating a strong passion for coding and a relentless pursuit of excellence. His growth-oriented mindset is evident in his continuous pursuit of new challenges and opportunities for improvement. With a genuine addiction to coding, he is immerse in his work, consistently pushing boundaries and delivering high-quality results.",
    name: "Odumakinde Ayomide",
    title: "Research Scholar at Cohere",
    imageSrc: "/ay.jpeg"
  },
    {
    description: "Adekunle has always been honest and dependable. He is a natural born leader and is always willing to help solve any challenge.",
    name: "Tolulope Akinniyi",
    title: "Software Developer, at Corehealth",
    imageSrc: "/tol.jpeg"
  },
];


export default function TestimonialsCard() {
  return (
    <div className="sm:rounded-3xl sm:bg-secondary sm:border w-full space-y-2 sm:space-y-6 overflow-hidden sm:p-6 lg:p-8">
      <h2 className="text-xl">Testimonials</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 lg:pb-8">
  {testimonials.map((testimonial, index) => (
    <div className="w-full space-y-4" key={index}>
      <p className="text-sm leading-relaxed text-muted-foreground lg:line-clamp-2">
        {testimonial.description}
      </p>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full border overflow-hidden">
          <Image
            src={testimonial.imageSrc}
            alt="testimonial"
            priority
            width={48}
            height={48}
            className="object-cover grayscale"
          />
        </div>
        <div>
          <h2 className="leading-none font-semibold">{testimonial.name}</h2>
          <p className="text-muted-foreground text-sm">{testimonial.title}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}
