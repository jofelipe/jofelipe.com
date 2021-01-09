interface IPost {
  title: string;
  description?: string;
  readTime: number;
  date: string;
  dateISO: string;
  featuredImage?: string;
  openGraphImage?: string;
  external?: boolean;
  url?: string;
}

interface IProject {
  title: string;
  description: string;
  roles: string;
  featuredImage: string;
  openGraphImage: string;
}

export interface IFrontMatterPost {
  content?: string;
  frontmatter: IPost;
  slug: string;
}

export interface IFrontMatterProject {
  content?: string;
  frontmatter: IProject;
  slug: string;
}
