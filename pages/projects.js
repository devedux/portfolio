import Layout from "@/components/layout/Layout"
import ProjectMe from "@/components/projects/ProjectMe"
import Wrapper from "@/components/UI/Wrapper"

const projectsMe = [
    {
        title: "Terapygo Psicologos Online",
        etiquetas: ["Producción","Startup"],
        description: "TerapyGo te ayuda a encontrar tu terapeuta ideal, y podrás llevar a cabo las citas por medio de vídeo o llamada; y los planes mensuales incluyen mensajería de texto con tu psicólogo.",
        actions: [
            {
                description: "VIEW WEB",
                path: "https://terapygoperu.com/",
                bg: "primary"
            }
        ]
    },
    {
        title: "Country Quiz",
        etiquetas: ["Producción","Practice"],
        description: "Country Quiz es un mini clone de Quiz, con respecto a los paises.",
        actions: [
            {
                description: "VIEW WEB",
                path: "https://country-quiz-eight.vercel.app/",
                bg: "primary"
            },
            {
                description: "VIEW CODE",
                path: "https://github.com/devedux/country-quiz"
            }
        ]
    },
    {
        title: "BlockBuster",
        etiquetas: ["Producción","Practice"],
        description: "Aplicación web de peliculas que te filtra por los mas recomendados o menos recomendados donse se añadio un scroll infinito",
        actions: [
            {
                description: "VIEW WEB",
                path: "https://devedux.github.io/blockbuster-app/",
                bg: "primary"
            },
            {
                description: "VIEW CODE",
                path: "https://github.com/devedux/blockbuster-app"
            }
        ]
    },
]

const Projects = () => {
    return (
        <Layout>
            <Wrapper>
                <ProjectMe projects={projectsMe} />
            </Wrapper>
        </Layout>
    )
}

export default Projects