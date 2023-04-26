import client from 'graphql/client';

import { format, parseISO } from 'date-fns';
import { GetPostBySlugQuery, GetPostsQuery } from 'graphql/generated/graphql';
import { GET_POSTS, GET_POST_BY_SLUG } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from 'layouts/main';

import Footer from 'components/Footer';
import ReactMarkdown from 'components/ReactMarkdown';

import {
  ArrowLeftIcon,
  ArrowUpIcon,
  CalendarIcon,
  ClockIcon,
} from '@primer/octicons-react';

import {
  BackToTop,
  Content,
  FeaturedImage,
  PostInfo,
  Wrapper,
} from 'styles/content/post';

import t from 'content/translation.json';

export default function Post({ post }: GetPostBySlugQuery) {
  const router = useRouter();
  const { locale } = router;

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
                title={t[locale].post.backText}
              >
                <ArrowLeftIcon size={32} />
              </button>
              <h1>{title}</h1>
            </header>
            <PostInfo>
              <div className="post-date" title={t[locale].post.dateText}>
                <CalendarIcon size={24} />{' '}
                {format(parseISO(date), 'dd/MM/yyyy')}
              </div>
              <div className="post-read-time" title={t[locale].post.readTime}>
                <ClockIcon size={24} />{' '}
                {`${readTime} ${t[locale].post.readTimeText}`}
              </div>
            </PostInfo>
          </Content>

          <FeaturedImage
            style={{ backgroundImage: `url(${featuredImage.url})` }}
          />

          <Content>
            <ReactMarkdown content={content} />
          </Content>
        </Wrapper>

        <BackToTop
          className={showScroll ? 'active' : ''}
          onClick={scrollTop}
          title={t[locale].post.backToTop}
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
