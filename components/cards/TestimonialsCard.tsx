import Image from "next/image";

export default function TestimonialsCard() {
  return (
    <div className="sm:rounded-3xl sm:bg-secondary sm:border w-full space-y-2 sm:space-y-6 overflow-hidden sm:p-6 lg:p-8">
      <h2 className="text-xl">Testimonials</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7 lg:pb-8">
        {[1, 2].map((_, _key) => (
          <div className="w-full space-y-4" key={_key}>
            <p className="text-sm leading-relaxed text-muted-foreground lg:line-clamp-2">
              My journey in the world of technology and product design has been
              an exhilarating adventure.
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border overflow-hidden">
                <Image
                  src="/user.jpg"
                  alt="Abdullahi Salihu"
                  priority
                  width={48}
                  height={48}
                  className="object-cover grayscale"
                />
              </div>

              <div>
                <h2 className="leadnig-none font-semibold">Abdullahi Salihu</h2>
                <p className="text-muted-foreground text-sm">CEO at Vibey</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
