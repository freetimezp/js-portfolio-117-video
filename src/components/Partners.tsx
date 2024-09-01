

import {
    amazon,
    facebook,
    google,
    linkedin,
    microsoft,
    netflix,
    paypal,
    samsung,
    skype,
    whatsapp
} from "../../public/assets/index";

const partners = [
    { name: "Amazon", logo: amazon },
    { name: "Facebook", logo: facebook },
    { name: "Google", logo: google },
    { name: "Linkedin", logo: linkedin },
    { name: "Microsoft", logo: microsoft },
    { name: "Netflix", logo: netflix },
    { name: "Paypal", logo: paypal },
    { name: "Samsung", logo: samsung },
    { name: "Skype", logo: skype },
    { name: "Whatsapp", logo: whatsapp },
    { name: "Amazon", logo: amazon },
    { name: "Facebook", logo: facebook },
    { name: "Google", logo: google },
    { name: "Linkedin", logo: linkedin },
    { name: "Microsoft", logo: microsoft },
    { name: "Netflix", logo: netflix },
    { name: "Paypal", logo: paypal },
    { name: "Samsung", logo: samsung },
    { name: "Skype", logo: skype },
    { name: "Whatsapp", logo: whatsapp },
];

const Partners = () => {
    return (
        <div className="py-20 max-w-screen-lg mx-auto">
            <div className="mb-10 p-4">
                <h1 className="main-title">
                    Chosen by companies at
                </h1>
            </div>

            <div className="relative overflow-hidden whitespace-nowrap py-4 group">
                <div className="logo-slide bg-background inline-block animate-slide-logo
                    group-hover:[animation-play-state:paused]">
                    {partners.map((partner, index) => (
                        <img
                            key={index}
                            src={partner.logo}
                            alt={partner.name}
                            className="inline-block h-[30px] w-auto mx-8 filter grayscale
                            object-contain"
                        />
                    ))}
                </div>

                {/* shadows */}
                <div className="absolute left-0 top-0 h-full w-[50px] bg-gradient-to-l
                    from-transparent to-background" />
                <div className="absolute right-0 top-0 h-full w-[50px] bg-gradient-to-r
                    from-transparent to-background" />
            </div>
        </div>
    );
}

export default Partners;
