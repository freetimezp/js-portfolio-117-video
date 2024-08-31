import {
    Command,
    Copy,
    Crown,
    Disc2,
    Ellipsis,
    MessageCircleMore,
    MicOff,
    Phone,
    Search,
    VideoOff
} from "lucide-react";

import Logo from "../Logo";

import Profile1Img from "../../../public/assets/profile1.jpg";
import User1Img from "../../../public/assets/user1.jpg";
import User2Img from "../../../public/assets/user2.jpg";
import User3Img from "../../../public/assets/user3.jpg";
import User4Img from "../../../public/assets/user4.jpg";
import User5Img from "../../../public/assets/user5.jpg";

import SummaryCard from "./SummaryCard";
import MessageCard from "./MessageCard";

const users = [
    {
        name: "Andrea",
        image: User2Img,
    },
    {
        name: "Joseph",
        image: User3Img,
    },
    {
        name: "Devid",
        image: User4Img,
    },
    {
        name: "Leya",
        image: User5Img,
    },
];

const buttons = [
    {
        icon: MicOff,
        isActive: false,
    },
    {
        icon: VideoOff,
        isActive: false,
    },
    {
        icon: Disc2,
        isActive: false,
    },
    {
        icon: Copy,
        isActive: false,
    },
    {
        icon: MessageCircleMore,
        isActive: true,
    },
    {
        icon: Ellipsis,
        isActive: false,
    },
];

const DashboardUI = () => {
    return (
        <div className="bg-background rounded-2xl shadow-card-inset">
            {/* start top bar */}
            <div className="flex items-center justify-between gap-2 p-4 rounded-t-2xl
                bg-secondary border-b border-white/10 shadow-card-inset">
                <div className="hidden sm:block">
                    <Logo />
                </div>

                <div className="inline-block h-[100%] w-0.5 self-stretch bg-white/10" />

                <h2 className="hidden lg:block text-sm">
                    OneMeet is the best platform for video conference
                </h2>

                <div className="flex items-center rounded-lg bg-accent px-2 border 
                    border-white/10">
                    <div className="flex items-center text-sm text-primary">
                        <Command size={14} /> + L
                    </div>
                    <input
                        type="text"
                        placeholder="Search message"
                        className="p-2 w-full flex-1 bg-transparent text-white border-none
                            outline-none"
                    />
                    <Search size={18} className="text-muted cursor-pointer" />
                </div>

                <div className="flex items-center gap-1">
                    <div className="rounded-profile">
                        <img src={Profile1Img} alt="profile" />
                    </div>
                    <div>
                        <h3 className="text-sm">Zoya Lerua</h3>
                        <div className="flex items-center gap-1">
                            <Crown size={14} className="text-orange-400" />
                            <p className="text-sm text-muted">Verified</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end top bar */}

            {/* start main content */}
            <div className="flex flex-grow p-4 flex-col items-center min-[900px]:flex-row
                min-[900px]:justify-between">
                {/* start video section */}
                <div className="flex-1 w-full md:p-6">
                    <div className="relative flex items-center justify-center bg-accent
                        rounded-2xl shadow-card h-50 lg:h-96 overflow-hidden">
                        <div className="absolute top-4 right-4 z-10 py-2 px-4 bg-secondary/50
                            backdrop-blur-3xl rounded-lg text-xs">
                            Marina
                        </div>

                        <img src={User1Img} alt="user" className="h-full w-full" />

                        <div className="absolute bottom-4 z-10 w-full flex items-center justify-center">
                            <p className="py-2 px-3 max-w-[90%] bg-secondary/50 backdrop-blur-3xl
                                rounded-lg text-xs line-clamp-2">
                                This some test meeting for showing something new
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-4">
                        {users.map((user, i) => (
                            <div key={i} className="relative rounded-2xl overflow-hidden">
                                <div className="overflow-hidden h-fit lg:h-[150px]">
                                    <img src={user.image} alt="user" />
                                </div>
                                <div className="absolute bottom-2 w-full flex items-center 
                                    justify-between px-2">
                                    <div className="rounded-icon bg-red-500 hover:bg-red-700
                                        transition-all cursor-pointer">
                                        <MicOff size={14} />
                                    </div>
                                    <p className="p-2 bg-secondary/50 backdrop-blur-3xl rounded-lg
                                        text-xs">{user.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between flex-col gap-5 mt-6 lg:flex-row">
                        <div className="flex items-center gap-3">
                            {buttons.map((button, index) => (
                                <div key={index} className={`rounded-icon border border-white/10
                                hover:bg-primary/30 cursor-pointer transition-all 
                                ${button.isActive && "bg-primary"}`}>
                                    <button.icon size={14} />
                                </div>
                            ))}
                        </div>
                        <button className="btn flex bg-red-600 hover:bg-red-700 hover:text-white
                            shadow-card-inset items-center gap-1 text-xs">
                            <Phone size={13} /> Leave call
                        </button>
                    </div>
                </div>
                {/* end video section */}


                {/* start sidebar */}
                <div className="w-full sm:w-80">
                    <SummaryCard className="my-5 left-10 rotate-12 hover:rotate-0
                        hover:left-0" />

                    <MessageCard className="mt-8" />
                </div>
                {/* end sidebar */}
            </div>
            {/* end main content */}
        </div>
    );
}

export default DashboardUI;
