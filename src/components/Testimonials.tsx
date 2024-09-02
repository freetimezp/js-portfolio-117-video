import { Crown, Star } from "lucide-react";
import User5Image from "/assets/user5.jpg";
import User6Image from "/assets/user6.jpg";
import User7Image from "/assets/user7.jpg";
import User8Image from "/assets/user8.jpg";


const testimonials = [
    {
        name: "Sam",
        image: User7Image,
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero consequuntur incidunt repellat suscipit tempora minus.`
    },
    {
        name: "Emmanuel",
        image: User8Image,
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero consequuntur incidunt repellat suscipit tempora minus.`
    },
    {
        name: "Julli",
        image: User6Image,
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero consequuntur incidunt repellat suscipit tempora minus.`
    },
    {
        name: "Zoya",
        image: User5Image,
        review: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero consequuntur incidunt repellat suscipit tempora minus.`
    },
];


const Testimonials = () => {
    return (
        <div className="py-20 max-w-screen-lg mx-auto">
            <div className="max-w-[800px] mx-auto p-4">
                <h1 className="main-title">
                    What people are saying about OneMeet
                </h1>
                <p className="text-sm text-muted text-center mt-6">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Libero consequuntur incidunt repellat suscipit tempora minus.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8 p-4 sm:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 shadow-card-inset rounded-3xl review-card">
                        <div className="flex items-center gap-2 text-yellow-500">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <div className="my-4">
                            <p className="text-sm text-muted">
                                {testimonial.review}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="rounded-profile">
                                <img src={testimonial.image} alt="testimonial" />
                            </div>
                            <div>
                                <h3 className="text-sm">{testimonial.name}</h3>
                                <div className="flex items-center gap-2 text-muted text-sm">
                                    <Crown size={14} className="text-primary" /> Pro user
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
