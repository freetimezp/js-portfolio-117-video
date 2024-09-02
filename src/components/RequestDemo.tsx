import { Link } from "react-router-dom";


const RequestDemo = () => {
    return (
        <div className="py-20 max-w-screen-lg mx-auto">
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
