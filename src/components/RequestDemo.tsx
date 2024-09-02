import { useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const RequestDemo = () => {
    const container = useRef(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end: "bottom top",
            }
        });

        timeline
            .from(".main-title", { opacity: 0, x: -50 })
            .from(".text-muted", { opacity: 0, x: -50 })
            .from(".buttons-container", { opacity: 0, x: 100 });

    }, { scope: container });

    return (
        <div className="py-20 max-w-screen-lg mx-auto" ref={container}>
            <div className="max-w-[800px] mx-auto p-4">
                <h1 className="main-title">
                    Host Engaging Meetings with OneMeet
                </h1>
                <p className="text-sm text-muted text-center mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus ipsum omnis enim, illo sapiente id a accusamus
                    fugiat tempora necessitatibus.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8 buttons-container">
                    <Link to={"/join"} target="_blank" className="btn text-lg">
                        Try for Free
                    </Link>
                    <Link to={"/join"} target="_blank" className="btn primary text-lg">
                        Explore More
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RequestDemo;
