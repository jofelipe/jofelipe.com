import client from 'graphql/client';

import { GetStaticProps } from 'next';
import { GET_POSTS, GET_POST_BY_SLUG } from 'graphql/queries';
import { GetPostsQuery, GetPostBySlugQuery } from 'graphql/generated/graphql';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { format, parseISO } from 'date-fns';

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

export default function Post({ post }: GetPostBySlugQuery) {
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

  if (router.isFallback) {
    return null;
  }

  const {
    content,
    date,
    description,
    featuredImage,
    readTime,
    slug,
    title,
    openGraphImage,
  } = post;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          url: `${process.env.NEXT_PUBLIC_URL}/post/${slug}`,
          type: 'article',
          article: {
            publishedTime: date,
            authors: [`${process.env.NEXT_PUBLIC_URL}/`],
          },
          images: [
            {
              url: openGraphImage.url,
              width: 1200,
              height: 1200,
              alt: title,
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_URL}/post/${slug}`}
        title={title}
        images={[`${openGraphImage.url}`]}
        datePublished={date}
        authorName={['Jonathan Felipe']}
        publisherName="Jonathan Felipe"
        publisherLogo={`${process.env.NEXT_PUBLIC_URL}/assets/img/jonathan.jpg`}
        description={description}
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
              <h1>{title}</h1>
            </header>
            <PostInfo>
              <div className="post-date">
                <CalendarIcon size={24} />{' '}
                {format(parseISO(date), 'dd/MM/yyyy')}
              </div>
              <div className="post-read-time">
                <ClockIcon size={24} /> {readTime} minutos de leitura
              </div>
            </PostInfo>
          </Content>

          <FeaturedImage
            style={{ backgroundImage: `url(${featuredImage.url})`, backgroundPosition: 'center', backgroundSize: 'cover', height: 480, marginBottom: 64 }}
          />

          <Content>
            <ReactMarkdown content={content} />
          </Content>

          <Comments>
            <Content>
              <Disqus
                id={title}
                title={title}
                url={`${process.env.NEXT_PUBLIC_URL}/post/${slug}`}
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
}

export async function getStaticPaths() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, {
    first: 50,
  });

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
