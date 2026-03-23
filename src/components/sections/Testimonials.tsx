import { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            Más de 10,000 personas confían en N-Cargo para sus envíos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text} *** This is a placeholder for the testimonial
                text. In a real application, this would be replaced with the
                actual feedback from the customer. The text should be concise
                and highlight the key benefits of using N-Cargo, such as
                reliability, speed, and excellent customer service.***
              </p>

              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-linear-to-br ${testimonial.avatarColors}`}
                >
                  {testimonial.initials}
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}{" "}
                    <span className="ml-1">{testimonial.flag}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
