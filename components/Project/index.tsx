import { Project as ProjectType } from "@interfaces/index";
import beautifyLinks from "utils/beautifyLinks";

interface ProjectProps {
    project?: ProjectType;
    featured?: boolean;
    reverse?: boolean;
}

const Project = ({ project, featured = false, reverse }: ProjectProps) => {
    const singleImage = project?.images?.length === 1;
    if (!project) throw new Error("Project required");
    return (
        <div
            className={
                reverse
                    ? "md:flex my-12 md:my-8 flex-row-reverse"
                    : "md:flex my-12 md:my-8"
            }
        >
            <div
                className={
                    reverse
                        ? "md:w-1/2 flex flex-col justify-center pl-8"
                        : "md:w-1/2 flex flex-col justify-center pl-2"
                }
            >
                {featured && (
                    <span className="uppercase text-gray-500 text-center md:text-left">
                        Featured Project
                    </span>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-bold">
                    {project.name}
                </h2>
                <a
                    className="text-feli text-center md:text-left"
                    target="_blank"
                    href={project.link}
                    rel="noreferrer"
                >
                    {beautifyLinks(project.link)}
                </a>
                <p className="md:mt-4 md:w-10/12 text-center md:text-left">
                    {project.description}
                </p>
            </div>
            <div className="md:w-1/2 flex">
                {project.images.map((img, i) => (
                    <div
                        key={img}
                        className={singleImage ? "p-2 " : "p-2 w-1/3"}
                    >
                        <img
                            className="rounded-xl shadow-xl"
                            src={img}
                            alt={`${project.name} screenshot ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
