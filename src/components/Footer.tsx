import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";


const navigation = [
    {
        title: "Pages",
        routes: [
            { label: "Home", href: "/" },
            { label: "About", href: "#" },
            { label: "Resources", href: "#" },
            { label: "Pricing", href: "#" },
        ],
    },
    {
        title: "Services",
        routes: [
            { label: "HD Video Calls", href: "#" },
            { label: "Screen Sharing", href: "#" },
            { label: "Meeting Recording", href: "#" },
            { label: "Virtual background", href: "#" },
        ],
    },
    {
        title: "Support",
        routes: [
            { label: "Feedback", href: "#" },
            { label: "Help Center", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
];

const socialData = [
    {
        name: "Facebook",
        icon: Facebook,
        href: "#",
    },
    {
        name: "Youtube",
        icon: Youtube,
        href: "#",
    },
    {
        name: "Instagram",
        icon: Instagram,
        href: "#",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "#",
    },
];

const Footer = () => {
    return (
        <div className="py-20 px-4 max-w-screen-lg mx-auto">
            <div className="flex items-center justify-center flex-col gap-5 px-4 py-10
                rounded-2xl shadow-card-inset newsletter">
                <div className="text-center">
                    <h1 className="text-2xl heading">
                        Stay Updated with Our Newsletter
                    </h1>
                    <p className="text-sm text-muted mt-2 description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Corporis molestiae sequi eius reprehenderit itaque consequuntur
                        cum ratione rem quisquam ipsa.
                    </p>
                </div>

                <div className="flex bg-secondary p-2 rounded-2xl shadow-card-inset form">
                    <input type="text" placeholder="Email Address" className="bg-transparent w-full
                    border-none outline-none h-[40px] px-3" />
                    <button className="btn primary">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 md:grid-cols-4">
                <div>
                    <div className="flex justify-center sm:justify-start">
                        <Logo />
                    </div>
                    <p className="text-lg text-muted mt-2 text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit ipsum
                        molestiae amet possimus minima alias.
                    </p>
                </div>
                {navigation.map((nav, index) => (
                    <div key={index} className="space-y-2">
                        <h1 className="text-xl font-semibold text-center sm:text-left">
                            {nav.title}
                        </h1>

                        {nav.routes.map((route, i) => (
                            <Link to={route.href} key={i} className="block text-lg text-muted
                                text-center sm:text-left transition-all hover:text-white
                                hover:translate-x-1">
                                {route.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between gap-4 flex-col md:flex-row
                py-6 px-4 mt-10 border-t border-white/10 shadow-card-inset rounded-3xl">
                <div className="flex items-center gap-4">
                    {socialData.map((social, index) => (
                        <Link key={index} to={social.href} target="_blank"
                            className="rounded-icon shadow-card-inset hover:bg-primary/50
                                transition-all">
                            <social.icon size={15} />
                        </Link>
                    ))}
                </div>

                <div className="text-sm text-center">
                    Copyright &copy; OneRoom - 2024 Freetime.
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/" className="text-sm text-muted transition-all hover:text-primary
                        hover:underline">
                        Term of use
                    </Link>
                    <Link to="/" className="text-sm text-muted transition-all hover:text-primary
                        hover:underline">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
