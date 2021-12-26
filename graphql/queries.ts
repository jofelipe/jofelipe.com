import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query getPosts($first: Int) {
    posts(first: $first, orderBy: date_DESC) {
      title
      slug
      date
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
