import { useRef } from "react";

import User6Image from "/assets/user6.jpg";
import User2Image from "/assets/user2.jpg";
import User5Image from "/assets/user5.jpg";
import User8Image from "/assets/user8.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
            .from(".content-box", { opacity: 0, y: 100, stagger: 1 });

    }, { scope: container });

    return (
        <div className="py-20 max-w-screen-lg mx-auto overflow-hidden" ref={container}>
            <div className="p-4">
                <h1 className="main-title">
                    OneMeet helps all kinds of professionals achieve more.
                </h1>
                <p className="text-sm text-muted text-center mt-6">
                    OneMeet boosts productivity for professionals across various
                    fields, helping them accomplish more with ease.
                </p>
            </div>

            {/* start row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10
                mt-8 p-4 content-box">
                <div className="relative bg-secondary p-6 shadow-card-inset w-full
                    md:w-[400px] rounded-3xl mx-auto order-2 md:order-1">
                    <img src={User6Image} alt="user" className="rounded-2xl" />
                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col
                        gap-6">
                        <div className="relative flex items-center gap-2 bg-accent/80
                            backdrop-blur-3xl shadow-card-inset p-4 rounded-3xl left-12">
                            <div className="rounded-profile">
                                <img src={User2Image} alt="user" />
                            </div>
                            <div>
                                <h3 className="text-sm">Angela Smith</h3>
                                <p className="text-xs text-muted">UI/UX Developer</p>
                            </div>
                        </div>

                        <div className="relative flex items-center gap-2 bg-accent/80
                            backdrop-blur-3xl shadow-card-inset p-4 rounded-3xl right-12">
                            <div className="rounded-profile">
                                <img src={User5Image} alt="user" />
                            </div>
                            <div>
                                <h3 className="text-sm">Black Hawk</h3>
                                <p className="text-xs text-muted">Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 self-center order-1 md:order-2">
                    <h1 className="title">
                        Connect with condidates quickly without disrupting your
                        workflow
                    </h1>
                    <p className="text-sm text-center text-muted mt-4">
                        Easily connect with condidates while keeping your workflow
                        uniterrupted
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="btn shadow-card-inset">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
            {/* end row 1 */}

            {/* start row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10
                mt-8 p-4 content-box">
                <div className="flex-1 self-center">
                    <h1 className="title">
                        Share your one on one or booking page with candidates
                    </h1>
                    <p className="text-sm text-center text-muted mt-4">
                        Easily share your 1:1 or booking page with candidates for
                        seamless scheduling
                    </p>
                    <div className="flex justify-center mt-4">
                        <button className="btn shadow-card-inset">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="relative bg-secondary p-6 shadow-card-inset w-full
                    md:w-[400px] rounded-3xl mx-auto">
                    <img src={User8Image} alt="user" className="rounded-2xl" />
                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col
                        gap-6">
                        <div className="relative bg-accent shadow-card-inset p-4 rounded-2xl
                            left-6 sm:left-12">
                            <div className="flex items-center gap-2">
                                <div className="rounded-profile">
                                    <img src={User2Image} alt="user" />
                                </div>
                                <div>
                                    <h3 className="text-sm">Leyla Ques</h3>
                                    <p className="text-xs text-muted">Designer</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-1 mt-5">
                                <div className="btn text-xs shadow-card-inset">8:00 am</div>
                                <div className="btn text-xs shadow-card-inset">9:30 am</div>
                                <div className="btn text-xs shadow-card-inset">11:30 am</div>
                                <div className="btn text-xs shadow-card-inset">12:30 am</div>
                                <div className="btn text-xs shadow-card-inset bg-primary">13:30 am</div>
                                <div className="btn text-xs shadow-card-inset">14:30 am</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end row 2 */}

        </div>
    );
}

export default About;
