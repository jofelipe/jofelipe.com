import Link from 'next/link';
import client from 'graphql/client';

import { GetStaticProps } from 'next';
import { GET_POSTS } from 'graphql/queries';
import { GetPostsQuery } from 'graphql/generated/graphql';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { format, parseISO } from 'date-fns';

import Layout from 'layouts/main';

import Post from 'components/Post';
import Footer from 'components/Footer';

import { staticPosts } from 'content/staticPosts';

import {
  ClockIcon,
  LinkExternalIcon,
  SearchIcon,
} from '@primer/octicons-react';

import { Wrapper, BlogHeader, Search, NoPostsFound } from 'styles/content';

export default function Blog({ posts }: GetPostsQuery) {
  const allPosts = [...posts, ...staticPosts];

  const [searchValue, setSearchValue] = useState('');

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
            <p>
              Aqui escrevo sobre meus hobbies, viagens e o mundo front-end 😊
            </p>
          </BlogHeader>

          <Search>
            <SearchIcon size={32} />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar por..."
              autoFocus
            />
          </Search>

          <div className="mansory">
            {!searchValue &&
              allPosts.map(({ date, readTime, slug, title }) =>
                slug.startsWith('https://') ? (
                  <Post key={slug}>
                    <a href={slug} target="_blank">
                      <time>{date}</time>
                      <h3>
                        {title} <LinkExternalIcon size={16} />
                      </h3>
                      <span>
                        <ClockIcon size={16} /> {readTime} minutos de leitura
                      </span>
                    </a>
                  </Post>
                ) : (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a>
                        <time>{format(parseISO(date), 'dd/MM/yyyy')}</time>
                        <h3>{title}</h3>
                        <span>
                          <ClockIcon size={16} /> {readTime} minutos de leitura
                        </span>
                      </a>
                    </Link>
                  </Post>
                )
              )}

            {!filteredBlogPosts.length && (
              <NoPostsFound>Nenhum post encontrado 😭</NoPostsFound>
            )}

            {searchValue &&
              filteredBlogPosts.map(({ date, readTime, slug, title }) =>
                slug.startsWith('https://') ? (
                  <Post key={slug}>
                    <a href={slug} target="_blank">
                      <time>{date}</time>
                      <h3>
                        {title} <LinkExternalIcon size={16} />
                      </h3>
                      <span>
                        <ClockIcon size={16} /> {readTime} minutos de leitura
                      </span>
                    </a>
                  </Post>
                ) : (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a>
                        <time>{format(parseISO(date), 'dd/MM/yyyy')}</time>
                        <h3>{title}</h3>
                        <span>
                          <ClockIcon size={16} /> {readTime} minutos de leitura
                        </span>
                      </a>
                    </Link>
                  </Post>
                )
              )}
          </div>
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
