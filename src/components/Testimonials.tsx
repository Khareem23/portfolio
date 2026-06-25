import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  content, author, position, image 
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Quote size={20} className="text-blue-600" />
        </div>
      </div>
      <p className="text-gray-700 mb-6 italic text-center">"{content}"</p>
      <div className="flex items-center justify-center">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "One of the most skilled engineers I've ever worked with. Their expertise in both frontend and backend technologies helped our team deliver enterprise solutions ahead of schedule.",
      author: "Sarah Johnson",
      position: "CTO, Tech Innovations",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "Their mentorship completely transformed our development team. The knowledge shared about cloud infrastructure and CI/CD practices increased our deployment efficiency by 70%.",
      author: "Michael Chen",
      position: "Lead Developer, Digital Systems",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      content: "An exceptional problem solver with deep technical knowledge. Their ability to architect complex systems while mentoring junior developers is truly remarkable.",
      author: "Emily Rodriguez",
      position: "Product Manager, Enterprise Solutions",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Others Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from colleagues and clients I've had the pleasure to work with throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;