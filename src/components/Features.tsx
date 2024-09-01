import { MessageCircleHeart, ReceiptCent, User } from "lucide-react";

import InviteCard from "./ui/InviteCard";
import MessageCard from "./ui/MessageCard";
import SummaryCard from "./ui/SummaryCard";

const features = [
    {
        title: "Invite people to join the meeting",
        icon: User,
        component: <InviteCard className="bg-secondary/70 backdrop-blur-3xl" />,
        bgStyle: "bg-invite bg-cover",
        description: "Easily invite participants to join the meeting with a simple click",
    },
    {
        title: "Instant Messaging for Seamless Communication",
        icon: MessageCircleHeart,
        component: <MessageCard className="bg-secondary/70 backdrop-blur-3xl" />,
        bgStyle: "bg-message bg-cover",
        description: "Send and recieve messages in real time to keep your team connected and informed throughout the meeting",
    },
    {
        title: "Transform notes info insights with out AI summary tool",
        icon: ReceiptCent,
        component: <SummaryCard className="bg-secondary/70 backdrop-blur-3xl" />,
        bgStyle: "bg-summary bg-cover",
        description: "Capture key points, decisions and actions automatically. Stay organized and productive while AI handles the details.",
    },
];

const Features = () => {
    return (
        <div className="relative py-20 max-w-screen-lg mx-auto">
            <div className="absolute left-[-300px] w-[322px] h-[348px] bg-gradient-to-r 
                from-primary/50 to-primary-accent rounded-full blur-[150px] z-0" />

            <div className="max-w-[800px] mx-auto p-4">
                <h1 className="main-title">
                    Enchance your productivity in work and life with seamless meeting
                    notes for all video conferences.
                </h1>
                <p className="text-sm text-muted text-center mt-6">
                    Our meeting notes tool is your key to boosting productivity
                    whether you're at work or on the go.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 p-4 mt-10 min-[900px]:grid-cols-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-stretch justify-between
                        bg-accent rounded-2xl shadow-card-inset overflow-hidden box">
                        <div className={`p-4 h-[250px] overflow-hidden ${feature.bgStyle}`}>
                            {feature.component}
                        </div>

                        <div className="flex-1 p-4 bg-accent rounded-b-2xl shadow-card-inset">
                            <feature.icon />
                            <h3 className="text-sm my-2">{feature.title}</h3>
                            <p className="text-xs text-muted line-clamp-2">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
