export interface Video {
    priority : number;
    thumbnail : string;
    topic : string;
    videoLink : string;
    heading : string;
    description : string;
    author : string;
}

export interface Blog {
    priority : number;
    thumbnail : string;
    blogUrl : string;
    heading : string;
    author : string;
    authorImage : string;
}

export interface Course {
    priority : number;
    name : string;
    topics : string;
    imageLink : string;
    courseId : string;
    description : string;
    duration : string;
}