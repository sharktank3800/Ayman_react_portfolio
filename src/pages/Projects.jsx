function Projects() {

    const projects = [
        {
            title: "Note taker",
            description: "",
            image: "",
            url: "",
            github: ""
        },

        {
            title: "save-smart",
            description: "",
            image: "",
            url: "",
            github: ""
        },

        {
            title: "weather_dashboard",
            description: "",
            image: "weather.png",
            url: "",
            github: ""
        },



    ]

    return (
        <main>
            <div>
                <h1>Recent Projects:</h1>
            </div>

            <div>
                <ul>
                    {projects.map((project, i) => (
                        <li key={i}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <img src={project.image} alt={project.title} />
                            <p>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
                            <p>GitHub: <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    )
}

export default Projects