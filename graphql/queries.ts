import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query getPosts($first: Int) {
    posts(first: $first, orderBy: date_DESC) {
      title
      slug
      date
      content
      readTime
      createdAt
      featuredImage {
        url
      }
      openGraphImage {
        url
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      date
      description
      content
      readTime
      featuredImage {
        url
      }
      openGraphImage {
        url
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query getProjects($first: Int, $locale: Locale!) {
    projetos(first: $first, orderBy: year_DESC, locales: [$locale, en]) {
      name
      description
      slug
      role
      thumbnail {
        url
      }
    }
  }
`;

export const GET_PROJECT_BEFORE = gql`
  query getProjectBefore($id: String!) {
    projetos(last: 1, before: $id) {
      slug
    }
  }
`;

export const GET_PROJECT_AFTER = gql`
  query getProjectAfter($id: String!) {
    projetos(first: 1, after: $id) {
      slug
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query getProjectBySlug($slug: String!, $locale: Locale!) {
    projeto(locales: [$locale, en], where: { slug: $slug }) {
      id
      name
      slug
      role
      year
      tools
      description
      intro
      challenge
      process
      solution
      featuredImage {
        url
      }
      thumbnail {
        url
      }
    }
  }
`;

export const GET_PAGE_BY_ID = gql`
  query getPageById($id: ID!, $locale: Locale!) {
    page(locales: [$locale, en], where: { id: $id }) {
      title
      content {
        html
      }
      experience {
        html
      }
      skills {
        html
      }
    }
  }
`;
