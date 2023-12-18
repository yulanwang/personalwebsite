import data from "../../data/index.json";

export default function Experiences() {
    return (
        <section className="experiences--section" id="Experiences">
            <div className="experiences--container">
                <p className="section--title">My Experieces</p>
                <h2 className="experiences-section--heading">Experience</h2>
            </div>
            <div className="experiences--section--container">
                {data?.experiences?.map((item, index) => (
                    <div key={index} className="experiences--section--card">
                        <div className="experiences--section--card--content">
                            <h3 className="experiences--section--title">{item.title}</h3>
                            <p className="experiences--section--dates">{item.dates}</p>
                            <p className="experiences--section--description">{item.description}</p>
                            <p className="text-sm experiences--link">
                                {item.link}
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                                >
                                    <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}