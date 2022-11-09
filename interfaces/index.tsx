export type Technology = {
    name: string;
    date: Date;
    url: string;
};
export type Technologies = Technology[];

export type Project = {
    name: string;
    link: string;
    description: string;
    images: string[];
    deprecated?: boolean;
};

export type Projects = Project[];
