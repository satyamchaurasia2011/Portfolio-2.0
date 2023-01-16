interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string,
    backgroundInformation: string,
    email: string;
    role: string;
    image: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    progress: string;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: string;
    image: Image;
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    technologies: Technology[];
    points: string[];
}

export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    title: string;
    summary: string;
    technologies: Technology[];
    linkToBuild: string; 
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}