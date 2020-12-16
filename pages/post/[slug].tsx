import ReactMarkdown from 'react-markdown/with-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GetStaticProps, GetStaticPaths } from 'next';
import { NextSeo } from 'next-seo';
import { format } from 'date-fns';

import Layout from 'layouts/main';

import Disqus from 'components/Disqus';
import Footer from 'components/Footer';

import { CalendarIcon, ClockIcon } from '@primer/octicons-react';

import { Wrapper, Content, PostInfo, FeaturedImage, Comments } from 'styles/blog/post';

const Post = ({ content, frontmatter }) => {
  return (
    <>
      <NextSeo title={frontmatter.title} />

      <Layout headerStatic>
        <Wrapper>
          <Content>
            <h1>{frontmatter.title}</h1>
            <PostInfo>
              <div className="post-date">
                <CalendarIcon size={24} /> {frontmatter.date}
              </div>
              <div className="post-read-time">
                <ClockIcon size={24} /> {frontmatter.readTime} minutos de leitura
              </div>
            </PostInfo>
          </Content>

          <FeaturedImage />
          
          <Content>
            <ReactMarkdown escapeHtml={false} source={content} />
          </Content>

          <Comments>
            <Content>
              <Disqus id={frontmatter.name} title={frontmatter.title} url="http://localhost:3000/post" />
            </Content>
          </Comments>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const formattedDate = format(data.date, 'dd/MM/yyyy');

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

export default Post;