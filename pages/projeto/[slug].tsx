import client from 'graphql/client';
import Link from 'next/link';

import {
  GetProjectAfterQuery,
  GetProjectBeforeQuery,
  GetProjectBySlugQuery,
  GetProjectsQuery,
  Projeto,
} from 'graphql/generated/graphql';
import {
  GET_PROJECTS,
  GET_PROJECT_AFTER,
  GET_PROJECT_BEFORE,
  GET_PROJECT_BY_SLUG,
} from 'graphql/queries';
import useScrollspy from 'hooks/scrollspy';
import { GetStaticProps } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

import Layout from 'layouts/main';

import Footer from 'components/Footer';
import ReactMarkdown from 'components/ReactMarkdown';

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  BeakerIcon,
  CalendarIcon,
  ChecklistIcon,
  GoalIcon,
  RocketIcon,
  ToolsIcon,
} from '@primer/octicons-react';

import {
  BackToTop,
  Content,
  FeaturedImage,
  Navigation,
  Pagination,
  PostInfo,
  Wrapper,
} from 'styles/content/post';

import t from 'content/translation';

type Project = {
  projeto: Projeto;
  previousProject: string | null;
  nextProject: string | null;
};

export default function Post({
  projeto,
  previousProject,
  nextProject,
}: Project) {
  const router = useRouter();
  const { locale } = router;

  const challengeRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  const navigationHeight = 68;

  const ids = ['challenge', 'process', 'solution'];
  const activeId = useScrollspy(ids, navigationHeight);

  const [showScroll, setShowScroll] = useState(false);

  const smoothScroll = (ref: MutableRefObject<HTMLDivElement> | null) =>
    window.scrollTo({
      top: ref ? ref.current.offsetTop - 40 : 0,
      behavior: 'smooth',
    });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  if (router.isFallback) {
    return null;
  }

  const {
    slug,
    name,
    description,
    thumbnail,
    year,
    tools,
    role,
    featuredImage,
    challenge,
    solution,
    intro,
  } = projeto;

  return (
    <>
      <NextSeo
        title={name}
        description={description}
        openGraph={{
          title: name,
          description: description,
          url: `${process.env.NEXT_PUBLIC_URL}/post/${slug}`,
          type: 'article',
          article: {
            publishedTime: String(year),
            authors: [`${process.env.NEXT_PUBLIC_URL}/`],
          },
          images: [
            {
              url: thumbnail.url,
              width: 796,
              height: 524,
              alt: name,
            },
          ],
        }}
      />

      <ArticleJsonLd
        url={`${process.env.NEXT_PUBLIC_URL}/post/${slug}`}
        title={name}
        images={[`${thumbnail.url}`]}
        datePublished={String(year)}
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
                title={t[locale].project.backText}
              >
                <ArrowLeftIcon size={32} />
              </button>
              <h1>{name}</h1>
            </header>
            <PostInfo>
              <div className="post-date" title={t[locale].project.roleText}>
                <ChecklistIcon size={24} /> {role}
              </div>
              <div className="tools" title={t[locale].project.toolsText}>
                <ToolsIcon size={24} /> {tools}
              </div>
              <div
                className="post-read-time"
                title={t[locale].project.yearText}
              >
                <CalendarIcon size={24} /> {year}
              </div>
            </PostInfo>
          </Content>

          <Navigation>
            <ul>
              <li>
                <button
                  className={activeId === 'challenge' ? 'active' : ''}
                  type="button"
                  onClick={() => smoothScroll(challengeRef)}
                >
                  <GoalIcon size={16} /> {t[locale].project.challengeText}
                </button>
              </li>
              <li>
                <button
                  className={activeId === 'process' ? 'active' : ''}
                  type="button"
                  onClick={() => smoothScroll(processRef)}
                >
                  <BeakerIcon size={16} /> {t[locale].project.processText}
                </button>
              </li>
              <li>
                <button
                  className={activeId === 'solution' ? 'active' : ''}
                  type="button"
                  onClick={() => smoothScroll(solutionRef)}
                >
                  <RocketIcon size={16} /> {t[locale].project.solutionText}
                </button>
              </li>
            </ul>
          </Navigation>

          <FeaturedImage
            style={{
              backgroundImage: `url(${featuredImage.url})`,
            }}
          />

          <Content className="project-page">
            {intro && <ReactMarkdown content={intro} />}

            <section id="challenge" ref={challengeRef}>
              <div className="title">
                <div className="bg">
                  <GoalIcon size={24} />
                  <h2>{t[locale].project.challengeText}</h2>
                </div>
                <button type="button" onClick={() => smoothScroll(solutionRef)}>
                  {t[locale].project.jumpSolution} <ArrowDownIcon size={14} />
                </button>
              </div>

              <ReactMarkdown content={challenge} />
            </section>

            <section id="process" ref={processRef}>
              <div className="title">
                <div className="bg">
                  <BeakerIcon size={24} />
                  <h2>{t[locale].project.processText}</h2>
                </div>
              </div>

              <ReactMarkdown content={projeto.process} />
            </section>

            <section id="solution" ref={solutionRef}>
              <div className="title">
                <div className="bg">
                  <RocketIcon size={24} />
                  <h2>{t[locale].project.solutionText}</h2>
                </div>
              </div>

              <ReactMarkdown content={solution} />
            </section>

            <Pagination className={showScroll ? 'active' : ''}>
              {previousProject && (
                <div className="previous">
                  <Link href={previousProject}>
                    {t[locale].project.previousProject}
                  </Link>
                </div>
              )}
              {nextProject && (
                <div className="next">
                  <Link href={nextProject}>
                    {t[locale].project.nextProject}
                  </Link>
                </div>
              )}
            </Pagination>
          </Content>
        </Wrapper>

        <BackToTop
          className={showScroll ? 'active' : ''}
          onClick={() => smoothScroll(null)}
          title={t[locale].project.backToTop}
        >
          <ArrowUpIcon size={32} />
        </BackToTop>

        <Footer />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const { projetos } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 10,
    locale: 'pt',
  });

  const paths = projetos.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { projeto } = await client.request<GetProjectBySlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      slug: `${params?.slug}`,
      locale: locale === 'default' ? 'pt' : locale,
    }
  );

  if (!projeto) {
    return {
      notFound: true,
    };
  }

  const nextProject = await client.request<GetProjectBeforeQuery>(
    GET_PROJECT_BEFORE,
    {
      id: projeto.id,
    }
  );

  const previousProject = await client.request<GetProjectAfterQuery>(
    GET_PROJECT_AFTER,
    {
      id: projeto.id,
    }
  );

  return {
    props: {
      projeto,
      previousProject:
        Object.keys(previousProject.projetos).length === 0
          ? null
          : previousProject.projetos[0].slug,
      nextProject:
        Object.keys(nextProject.projetos).length === 0
          ? null
          : nextProject.projetos[0].slug,
    },
  };
};
