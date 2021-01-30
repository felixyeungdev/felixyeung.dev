const beautifyLinks = (link: string): string => {
    return new URL(link).host;
};

export default beautifyLinks;
