import { BrainCircuit, Maximize2, MoveRight } from "lucide-react";

interface IProps {
    className?: string;
};

const SummaryCard = ({ className }: IProps) => {
    return (
        <div className={`bg-background relative py-6 px-4 shadow-card-inset
            rounded-2xl transition-all duration-500 ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex items-center gap-4">
                    <Maximize2 size={15} />
                    <MoveRight size={15} />
                </div>
            </div>

            <div className="mt-4">
                <h4 className="font-bold mb-2">Objective</h4>
                <div className="text-sm text-gray-300 line-clamp-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    a cumque at numquam nisi beatae vitae quos distinctio accusantium
                    dignissimos quis deserunt eius voluptates consequatur debitis,
                    architecto hic velit odit? Deserunt temporibus rerum mollitia velit,
                    molestias numquam vitae esse praesentium dolores, molestiae amet
                    adipisci eum unde itaque eligendi repellendus obcaecati sint quibusdam.
                    Quos accusamus architecto, commodi voluptatem expedita quia eos.
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4 shadow-card-inset p-4 rounded-2xl">
                <BrainCircuit size={18} className="text-blue-500" />
                <p>Powered by AI</p>
            </div>
        </div>
    );
}

export default SummaryCard;
