import { Link } from "react-router-dom";

import DashboardUI from "./ui/DashboardUI";

const Hero = () => {
    return (
        <div className="max-w-screen-lg mx-auto py-24">
            <div className="flex flex-col items-center justify-center gap-6 p-4">
                <h1 className="main-title">
                    Experience Unlimited Connectivity with
                    <span>OneMeet</span> Video Conferencing
                </h1>
                <div className="join-btn">
                    <Link to={"/"} target="_blank"
                        className="btn primary shadow-card-inset text-lg py-3">
                        Get Started for free
                    </Link>
                </div>
            </div>

            <div className="dashboard my-4 p-4">
                <DashboardUI />
            </div>
        </div>
    );
}

export default Hero;
