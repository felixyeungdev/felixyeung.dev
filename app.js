class Profile {
    constructor({
        name,
        about,
        image,
        instagram,
        linkedin,
        github,
        location,
        twitter,
    }) {
        this.name = name;
        this.about = about;
        this.image = image;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.github = github;
        this.location = location;
        this.twitter = twitter;
    }

    updateFromGithubJson(json = {}) {
        if (json["name"]) this.name = json["name"];
        if (json["avatar_url"]) this.image = json["avatar_url"];
        if (json["location"]) this.location = json["location"];
        if (json["bio"]) this.about = json["bio"];
        if (json["html_url"]) this.github = json["html_url"];
        if (json["twitter_username"])
            this.twitter = `https://twitter.com/${json["twitter_username"]}`;
    }
}

// Profile.fromGithubJson = (json) => {
//     return new Profile({});
// };

class Project {
    constructor({
        name,
        description,
        href,
        image,
        icon,
        github,
        type = "public",
    }) {
        this.name = name;
        this.description = description;
        this.href = href;
        this.image = image;
        this.icon = icon;
        this.github = github;
        this.type = type;
    }
}

function renderProfile(profile) {
    const meSection = document.querySelector("#me");
    meSection.innerHTML = "";

    function profileTemplate(profile) {
        let profileElement = document.createElement("div");
        profileElement.classList.add("profile");

        let name = document.createElement("h1");
        name.classList.add("profile-name");
        name.textContent = profile.name;

        let about = document.createElement("p");
        about.classList.add("profile-about");
        about.textContent = profile.about;

        let image = document.createElement("img");
        image.classList.add("profile-image");
        image.src = profile.image;

        let socialMedia = document.createElement("div");
        socialMedia.classList.add("profile-social_media");

        if (profile.instagram) {
            let instagram = document.createElement("a");
            instagram.classList.add("profile-social_media-instagram");
            instagram.classList.add("fab");
            instagram.classList.add("fa-instagram");
            instagram.href = profile.instagram;
            socialMedia.append(instagram);
        }

        if (profile.linkedin) {
            let instagram = document.createElement("a");
            instagram.classList.add("profile-social_media-linkedin");
            instagram.classList.add("fab");
            instagram.classList.add("fa-linkedin");
            instagram.href = profile.linkedin;
            socialMedia.append(instagram);
        }

        if (profile.github) {
            let github = document.createElement("a");
            github.classList.add("profile-social_media-github");
            github.classList.add("fab");
            github.classList.add("fa-github");
            github.href = profile.github;
            socialMedia.append(github);
        }

        if (profile.twitter) {
            let github = document.createElement("a");
            github.classList.add("profile-social_media-twitter");
            github.classList.add("fab");
            github.classList.add("fa-twitter");
            github.href = profile.twitter;
            socialMedia.append(github);
        }

        profileElement.append(name);
        profileElement.append(about);
        profileElement.append(image);
        profileElement.append(socialMedia);

        return profileElement;
    }

    meSection.append(profileTemplate(profile));
}

function renderProjects(projects) {
    const projectsSection = document.querySelector("#projects");

    // projectsSection.style.height = "0px";
    // return;

    function projectElementTemplate(project) {
        let projectElement = document.createElement("div");
        projectElement.classList.add("project");

        let name = document.createElement("h2");
        name.classList.add("project-name");
        name.textContent = project.name;

        let description = document.createElement("p");
        description.classList.add("project-description");
        description.textContent = project.description;

        let image = document.createElement("img");
        image.classList.add("project-image");
        image.src = project.image;

        let icon = document.createElement("img");
        icon.classList.add("project-icon");
        icon.src = project.icon;

        let myUrl = document.createElement("a");
        myUrl.classList.add("my-url");
        myUrl.classList.add("link");
        // myUrl.href = "https://felixyeung.dev/";
        myUrl.textContent = "felixyeung.dev";

        let projectUrl = document.createElement("a");
        projectUrl.classList.add("project-url");
        projectUrl.classList.add("link");
        projectUrl.href = project.href;
        projectUrl.target = "_blank";
        projectUrl.textContent = project.href
            ? project.href.replace("https://", "").slice(0, -1)
            : "";

        if (project.href) {
            image.classList.add("clicky");
            icon.classList.add("clicky");
            image.addEventListener("click", () => previewLink(projectUrl.href));
            icon.addEventListener("click", () => previewLink(projectUrl.href));
        }

        projectElement.append(name);
        projectElement.append(description);
        projectElement.append(icon);
        projectElement.append(image);
        projectElement.append(myUrl);
        projectElement.append(projectUrl);

        return projectElement;
    }

    projects.forEach((project) => {
        projectsSection.append(projectElementTemplate(project));
    });
}

function previewLink(link) {
    let previewer = document.createElement("div");
    previewer.classList.add("previewer");

    let loading = document.createElement("div");
    loading.classList.add("previewer-loading");

    let frame = document.createElement("iframe");
    frame.classList.add("previewer-frame");
    frame.src = link;

    let buttons = document.createElement("div");
    buttons.classList.add("previewer-buttons");

    let closeButton = document.createElement("button");
    closeButton.classList.add("previewer-close");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", (e) => {
        previewer.classList.remove("animate");
        document.body.classList.remove("no-scroll");
        setTimeout((e) => {
            previewer.remove();
        }, 250);
    });

    let newTabButton = document.createElement("button");
    newTabButton.classList.add("previewer-new_tab");
    newTabButton.textContent = "Open in New Tab";
    newTabButton.addEventListener("click", (e) => {
        window.open(link, "_blank");
    });

    buttons.append(closeButton);
    buttons.append(newTabButton);

    previewer.append(loading);
    previewer.append(frame);
    previewer.append(buttons);

    document.body.append(previewer);
    document.body.classList.add("no-scroll");

    setTimeout((e) => {
        previewer.classList.add("animate");
    });
}

const myProjects = [
    new Project({
        name: "CovidHK",
        description: "Detailed statistics for coronavirus in Hong Kong",
        href: "https://covidhk.feli.page/",
        image: "/assets/images/covidhk.png",
        icon: "/assets/icons/covidhk.png",
    }),
    new Project({
        name: "ETS",
        description: "An HKDSE ICT SBA Project: Event Ticketing System",
        image: "/assets/images/ets.png",
        icon: "/assets/icons/ets.png",
        type: "private",
    }),
    new Project({
        name: "Homework",
        description: "A homework app integrated with Google Calendar",
        image: "/assets/images/hw.png",
        icon: "/assets/icons/hw.png",
        type: "private",
    }),
    new Project({
        name: "Next Train",
        description:
            "A redesign of MTR's Next Train, provides realtime arrival time information",
        href: "https://nexttrain.feli.page/",
        image: "/assets/images/nexttrain.png",
        icon: "/assets/icons/nexttrain.png",
    }),
    new Project({
        name: "URL Shortener",
        description: "A simple URL Shortener app",
        href: "https://url.feli.page/",
        image: "/assets/images/url.png",
        icon: "/assets/icons/url.png",
    }),
];

const fallbackProfile = new Profile({
    name: "Felix Yeung",
    about: "A full-time student, also a programmer",
    image: "/assets/icons/felixyeung.png",
    instagram: "https://www.instagram.com/felixyeung.dev/",
    linkedin: "https://www.linkedin.com/in/felixyeungdev/",
    github: "https://github.com/felixyeungdev/",
    twitter: "https://twitter.com/felixyeungdev",
});

async function getGithubProfile(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let json = await response.json();
        return json;
    } catch (error) {}
}

async function main() {
    renderProjects(myProjects);
    renderProfile(fallbackProfile);

    let githubProfile = await getGithubProfile("felixyeungdev");
    if (githubProfile) {
        fallbackProfile.updateFromGithubJson(githubProfile);
    }
    renderProfile(fallbackProfile);
}

main();
