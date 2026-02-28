export interface Project {
    slug: string;
    title: string;
    titleKz?: string;
    titleEn?: string;
    category: "roads" | "rvs" | "pipelines" | "construction" | "welding" | "plumbing";
    location: "atyrau" | "tengiz" | "kulsary" | "other";
    year: number;
    duration: string;
    volume: string;
    coverImage: string;
    gallery: string[];
    beforeAfter?: {
        before: string;
        after: string;
    };
    description: string;
    worksDone: string[];
    result: string;
    clientReview?: string;
    clientCompany?: string;
    featured: boolean;
}
