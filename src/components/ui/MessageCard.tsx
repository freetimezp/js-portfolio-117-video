import { ArrowRightToLine } from "lucide-react";

import User2Image from "../../../public/assets/user2.jpg";
import User3Image from "../../../public/assets/user3.jpg";
import User4Image from "../../../public/assets/user4.jpg";

interface IProps {
    className?: string;
};

const messages = [
    {
        name: "Hanna",
        image: User2Image,
        message: "Can you hear me guys? I reconnected before..",
        time: "08:45",
    },
    {
        name: "Freddy",
        image: User3Image,
        message: "Yes, I can hear you.",
        time: "08:47",
    },
    {
        name: "Alice",
        image: User4Image,
        message: "Let's start!",
        time: "08:48",
    },
];

const MessageCard = ({ className }: IProps) => {
    return (
        <div className={`relative bg-secondary p-4 border border-white/10 
        rounded-2xl overflow-hidden ${className}`}>
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                <ArrowRightToLine size={15} />
            </div>

            <div className="p-4 pb-11 rounded-md space-y-4 h-48 overflow-hidden
                overflow-y-auto">
                {messages.map((message, index) => (
                    <div className="space-x-2 max-w-fit py-2 px-3 bg-accent/70 
                        hover:bg-accent rounded-lg" key={index}>
                        <div className="flex items-center gap-2">
                            <div className="rounded-profile-small">
                                <img src={message.image} alt="message" />
                            </div>
                            <h3 className="text-sm">{message.name}</h3>
                            <p className="text-xs text-muted ml-auto">{message.time}</p>
                        </div>
                        <p className="text-xs mt-2 text-muted">{message.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MessageCard;
