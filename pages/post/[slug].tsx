import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import { IFrontMatterPost } from 'types';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import { format, formatISO } from 'date-fns';

import Layout from 'layouts/main';

import ReactMarkdown from 'components/ReactMarkdown';
import Disqus from 'components/Disqus';
import Footer from 'components/Footer';

import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  ArrowUpIcon,
} from '@primer/octicons-react';

import {
  Wrapper,
  Content,
  PostInfo,
  FeaturedImage,
  Comments,
  BackToTop,
} from 'styles/content/post';

const Post = ({ content, frontmatter, slug }: IFrontMatterPost) => {
  const router = useRouter();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          url: `${process.env.NEXT_PUBLIC_URL}/post/${slug}`,
          type: 'article',
          article: {
            publishedTime: frontmatter.dateISO,
            authors: [`${process.env.NEXT_PUBLIC_URL}/`],
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}${frontmatter.openGraphImage}`,
              width: 1200,
              height: 1200,
              alt: frontmatter.title,
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_URL}/post/${slug}`}
        title={frontmatter.title}
        images={[`${process.env.NEXT_PUBLIC_URL}${frontmatter.openGraphImage}`]}
        datePublished={frontmatter.dateISO}
        authorName={['Jonathan Felipe']}
        publisherName="Jonathan Felipe"
        publisherLogo={`${process.env.NEXT_PUBLIC_URL}/assets/img/jonathan.jpg`}
        description={frontmatter.description}
      />

      <Layout headerStatic>
        <Wrapper>
          <Content>
            <header>
              <button
                className="btn-back"
                onClick={() => router.back()}
                title="Voltar"
              >
                <ArrowLeftIcon size={32} />
              </button>
              <h1>{frontmatter.title}</h1>
            </header>
            <PostInfo>
              <div className="post-date">
                <CalendarIcon size={24} /> {frontmatter.date}
              </div>
              <div className="post-read-time">
                <ClockIcon size={24} /> {frontmatter.readTime} minutos de
                leitura
              </div>
            </PostInfo>
          </Content>

          <FeaturedImage
            style={{ backgroundImage: `url(${frontmatter.featuredImage})` }}
          />

          <Content>
            <ReactMarkdown content={content} />
          </Content>

          <Comments>
            <Content>
              <Disqus
                id={frontmatter.title}
                title={frontmatter.title}
                url="http://localhost:3000/post"
              />
            </Content>
          </Comments>
        </Wrapper>

        <BackToTop
          onClick={scrollTop}
          title="Voltar para o topo"
          style={{ display: showScroll ? 'block' : 'none' }}
        >
          <ArrowUpIcon size={32} />
        </BackToTop>

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
  const dateISO = formatISO(data.date);

  const frontmatter = {
    ...data,
    date: formattedDate,
    dateISO,
  };

  return {
    props: {
      content,
      frontmatter,
      slug,
    },
  };
};

export default Post;
