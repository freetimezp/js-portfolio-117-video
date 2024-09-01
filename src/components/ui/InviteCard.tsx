
import User5Image from "../../../public/assets/user5.jpg";
import User4Image from "../../../public/assets/user4.jpg";

interface IProps {
    className?: string,
};

const InviteCard = ({ className }: IProps) => {
    return (
        <div className={`relative bg-secondary p-4 border border-white/10
            rounded-2xl overflow-hidden ${className}`}>
            <div className="p-4 bg-secondary rounded-2xl">
                <h3 className="text-lg font-semibold mb-2">
                    Invite members
                </h3>
                <p className="text-xs text-muted">
                    Invite participants to join the meeting.
                </p>
                <div className="flex items-center justify-between mt-2 bg-accent py-2
                    px-4 rounded-2xl">
                    <p className="text-xs text-muted">Angela</p>
                    <h4 className="text-xs">Join Now</h4>
                </div>
            </div>

            <div className="p-4 rounded-2xl bg-accent mt-2 shadow-card-inset">
                <div className="flex items-center gap-2 border border-white/10 p-2
                    rounded-2xl">
                    <div className="rounded-profile-small">
                        <img src={User5Image} alt="user" />
                    </div>
                    <div>
                        <h3 className="text-xs">Alina James</h3>
                        <p className="text-xs text-muted">alinajames@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-2xl">
                    <div className="rounded-profile-small">
                        <img src={User4Image} alt="user" />
                    </div>
                    <div>
                        <h3 className="text-xs">Diana Shevchenko</h3>
                        <p className="text-xs text-muted">dianashevchenko@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InviteCard;
