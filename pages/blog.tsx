import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { format } from 'date-fns';

import Layout from 'layouts/main';

import Post from 'components/Post';
import Footer from 'components/Footer';

import { ClockIcon, LinkExternalIcon } from '@primer/octicons-react';

import { Wrapper } from 'styles/blog';

const Blog = ({ posts }) => {
  return (
    <>
      <NextSeo title="Blog" />

      <Layout headerStatic>
        <Wrapper>
          <h1>Blog</h1>

          <div className="mansory">
            {posts.map(({ frontmatter: { title, readTime, date }, slug }) => (
              <Post key={slug}>
                <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                  <a>
                    <time>{date}</time>
                    <h3>{title}</h3>
                    <span><ClockIcon size={16} /> {readTime} minutos de leitura</span>
                  </a>
                </Link>
              </Post>
            ))}
            <Post>
              <a href="https://medium.com/@jofelipe.com/2019-meu-ano-em-livros-8270ee742577?source=rss-cc6b8aa235ee------2" target="_blank" rel="noopener noreferrer">
                <time>12/02/2020</time>
                <h3>2019  —  Meu ano em livros <LinkExternalIcon size={16} /></h3>
                <span><ClockIcon size={16} /> 3 minutos de leitura</span>
              </a>
            </Post>
            <Post>
              <a href="https://medium.com/@jofelipe.com/lac-blanc-minha-primeira-trilha-nos-alpes-c6bd009ac307?source=rss-cc6b8aa235ee------2" target="_blank" rel="noopener noreferrer">
                <time>15/01/2020</time>
                <h3>Lac Blanc  —  Minha primeira trilha nos Alpes <LinkExternalIcon size={16} /></h3>
                <span><ClockIcon size={16} /> 10 minutos de leitura</span>
              </a>
            </Post>
            <Post>
              <a href="https://medium.com/@jofelipe.com/hackear-pessoas-%C3%A9-mais-f%C3%A1cil-do-que-hackear-sistemas-33c0cbec5960" target="_blank" rel="noopener noreferrer">
                <time>15/01/2020</time>
                <h3>Hackear pessoas é mais fácil do que hackear sistemas <LinkExternalIcon size={16} /></h3>
                <span><ClockIcon size={16} /> 6 minutos de leitura</span>
              </a>
            </Post>
            <Post>
              <a href="https://medium.com/@jofelipe.com/de-mil%C3%A3o-para-maranello-conhecendo-a-casa-da-ferrari-33cbab2ea87a" target="_blank" rel="noopener noreferrer">
                <time>15/01/2020</time>
                <h3>De Milão para Maranello. Conhecendo a casa da Ferrari <LinkExternalIcon size={16} /></h3>
                <span><ClockIcon size={16} /> 4 minutos de leitura</span>
              </a>
            </Post>
            <Post>
              <a href="https://medium.com/@jofelipe.com/criatividade-ideias-boas-y-otras-cositas-m%C3%A1s-6480dc06e972" target="_blank" rel="noopener noreferrer">
                <time>15/01/2020</time>
                <h3>Criatividade, ideias boas y otras cositas más <LinkExternalIcon size={16} /></h3>
                <span><ClockIcon size={16} /> 3 minutos de leitura</span>
              </a>
            </Post>
          </div>
        </Wrapper>

        <Footer />
      </Layout>
      
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const formattedDate = format(data.date, 'dd/MM/yyyy');

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Blog;