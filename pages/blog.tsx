import Link from 'next/link';

import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { IFrontMatterPost } from 'types';
import { GetStaticProps } from 'next';
import { getPosts } from 'services/getStaticFiles';

import Layout from 'layouts/main';

import Post from 'components/Post';
import Footer from 'components/Footer';

import {
  ClockIcon,
  LinkExternalIcon,
  SearchIcon,
} from '@primer/octicons-react';

import { Wrapper, Search, NoPostsFound } from 'styles/content';

interface IBlog {
  posts: IFrontMatterPost[];
}

const Blog = ({ posts }: IBlog) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.frontmatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <NextSeo title="Blog" />

      <Layout headerStatic>
        <Wrapper>
          <h1>Blog</h1>

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
              posts.map(
                ({
                  frontmatter: { title, readTime, date, fromMedium, url },
                  slug,
                }) =>
                  fromMedium ? (
                    <Post key={slug}>
                      <a href={url} target="_blank">
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
                          <time>{date}</time>
                          <h3>{title}</h3>
                          <span>
                            <ClockIcon size={16} /> {readTime} minutos de
                            leitura
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
              filteredBlogPosts.map((post) =>
                post.frontmatter.fromMedium ? (
                  <Post key={post.slug}>
                    <a href={post.frontmatter.url} target="_blank">
                      <time>{post.frontmatter.date}</time>
                      <h3>
                        {post.frontmatter.title} <LinkExternalIcon size={16} />
                      </h3>
                      <span>
                        <ClockIcon size={16} /> {post.frontmatter.readTime}{' '}
                        minutos de leitura
                      </span>
                    </a>
                  </Post>
                ) : (
                  <Post key={post.slug}>
                    <Link href={'/post/[slug]'} as={`/post/${post.slug}`}>
                      <a>
                        <time>{post.frontmatter.date}</time>
                        <h3>{post.frontmatter.title}</h3>
                        <span>
                          <ClockIcon size={16} /> {post.frontmatter.readTime}{' '}
                          minutos de leitura
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
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
