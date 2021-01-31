import { Project as ProjectType } from "@interfaces/index";
import Image from "next/image";
import beautifyLinks from "utils/beautifyLinks";
import { HiOutlineExternalLink } from "react-icons/hi";

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
                    ? "lg:flex my-12 lg:my-8 flex-row-reverse"
                    : "lg:flex my-12 lg:my-8"
            }
        >
            <div
                className={
                    reverse
                        ? "lg:w-1/2 flex flex-col justify-center pl-8"
                        : "lg:w-1/2 flex flex-col justify-center pl-2"
                }
            >
                {featured && (
                    <span className="uppercase text-gray-500 dark:text-gray-400 text-center lg:text-left">
                        Featured Project
                    </span>
                )}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left font-bold">
                    {project.name}
                </h2>
                <a
                    className="text-feli-darker hover:text-feli-dark active:text-feli dark:text-feli-lighter dark:hover:text-feli-light text-center lg:text-left flex items-center justify-center lg:justify-start transition-colors"
                    target="_blank"
                    href={project.link}
                    rel="noreferrer"
                >
                    {beautifyLinks(project.link)}
                    <HiOutlineExternalLink className="ml-2" />
                </a>
                <p className="lg:mt-4 lg:w-10/12 text-center lg:text-left text-lg lg:text-xl">
                    {project.description}
                </p>
            </div>
            <div className="lg:w-1/2 flex">
                {project.images.map((img, i) => (
                    <div
                        key={img}
                        className={
                            singleImage
                                ? "p-1 lg:p-2 w-full"
                                : "p-1 lg:p-2 w-1/3"
                        }
                    >
                        <div className="rounded-lg lg:rounded-xl shadow-md lg:shadow-lg w-full overflow-hidden">
                            <Image
                                src={img}
                                alt={`${project.name} screenshot ${i + 1}`}
                                layout="responsive"
                                height={singleImage ? 1440 : 1919}
                                width={singleImage ? 2560 : 1079}
                                quality={100}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
