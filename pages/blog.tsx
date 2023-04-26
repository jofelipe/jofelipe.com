import client from 'graphql/client';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { format, parseISO } from 'date-fns';
import { GetPostsQuery } from 'graphql/generated/graphql';
import { GET_POSTS } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Footer from 'components/Footer';
import Post from 'components/Post';

import { staticPosts } from 'content/staticPosts';

import {
  ClockIcon,
  LinkExternalIcon,
  SearchIcon,
} from '@primer/octicons-react';

import { BlogHeader, NoPostsFound, Search, Wrapper } from 'styles/content';

import t from 'content/translation.json';

export default function Blog({ posts }: GetPostsQuery) {
  const allPosts = [...posts, ...staticPosts];

  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { locale } = router;

  const filteredBlogPosts = allPosts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <NextSeo title="Blog" />

      <Layout headerStatic>
        <Wrapper>
          <BlogHeader>
            <h1>Blog</h1>
            <p>{t[locale].blog.description}</p>
          </BlogHeader>

          <Search>
            <SearchIcon size={32} />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t[locale].blog.searchText}
              autoFocus
            />
          </Search>

          <Masonry
            breakpointCols={masonryColumns}
            className="masonry"
            columnClassName="masonry-column"
          >
            {!searchValue &&
              allPosts.map(({ date, readTime, createdAt, slug, title }) =>
                slug.startsWith('https://') ? (
                  <Post key={slug}>
                    <a href={slug} target="_blank">
                      <time dateTime={createdAt}>{date}</time>
                      <h3>
                        {title} <LinkExternalIcon size={16} />
                      </h3>
                      <span>
                        <ClockIcon size={16} />
                        {`${readTime} ${t[locale].blog.readTimeText}`}
                      </span>
                    </a>
                  </Post>
                ) : (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <time dateTime={createdAt}>
                        {format(parseISO(date), 'dd/MM/yyyy')}
                      </time>
                      <h3>{title}</h3>
                      <span>
                        <ClockIcon size={16} />{' '}
                        {`${readTime} ${t[locale].blog.readTimeText}`}
                      </span>
                    </Link>
                  </Post>
                )
              )}

            {!filteredBlogPosts.length && (
              <NoPostsFound>{t[locale].blog.notFound}</NoPostsFound>
            )}

            {searchValue &&
              filteredBlogPosts.map(
                ({ date, readTime, createdAt, slug, title }) =>
                  slug.startsWith('https://') ? (
                    <Post key={slug}>
                      <a href={slug} target="_blank">
                        <time dateTime={createdAt}>{date}</time>
                        <h3>
                          {title} <LinkExternalIcon size={16} />
                        </h3>
                        <span>
                          <ClockIcon size={16} />{' '}
                          {`${readTime} ${t[locale].blog.readTimeText}`}
                        </span>
                      </a>
                    </Post>
                  ) : (
                    <Post key={slug}>
                      <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                        <time dateTime={createdAt}>
                          {format(parseISO(date), 'dd/MM/yyyy')}
                        </time>
                        <h3>{title}</h3>
                        <span>
                          <ClockIcon size={16} />{' '}
                          {`${readTime} ${t[locale].blog.readTimeText}`}
                        </span>
                      </Link>
                    </Post>
                  )
              )}
          </Masonry>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, {
    first: 50,
  });

  if (!posts) {
    return { notFound: true };
  }

  return {
    props: {
      posts,
    },
  };
};
