import Link from 'next/link';
import client from 'graphql/client';

import { GetStaticProps } from 'next';
import {
  GET_PROJECTS,
  GET_PROJECT_AFTER,
  GET_PROJECT_BEFORE,
  GET_PROJECT_BY_SLUG,
} from 'graphql/queries';
import {
  GetProjectsQuery,
  GetProjectBySlugQuery,
  GetProjectBeforeQuery,
  GetProjectAfterQuery,
  Projeto,
} from 'graphql/generated/graphql';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useRouter } from 'next/router';
import useScrollspy from 'hooks/scrollspy';

import Layout from 'layouts/main';

import ReactMarkdown from 'components/ReactMarkdown';
import Footer from 'components/Footer';

import {
  ArrowLeftIcon,
  CalendarIcon,
  ToolsIcon,
  ArrowUpIcon,
  ChecklistIcon,
  GoalIcon,
  BeakerIcon,
  RocketIcon,
} from '@primer/octicons-react';

import {
  Wrapper,
  Navigation,
  Content,
  PostInfo,
  FeaturedImage,
  Pagination,
  BackToTop,
} from 'styles/content/post';

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
                title="Voltar"
              >
                <ArrowLeftIcon size={32} />
              </button>
              <h1>{name}</h1>
            </header>
            <PostInfo>
              <div className="post-date" title="Atuação">
                <ChecklistIcon size={24} /> {role}
              </div>
              <div className="tools" title="Tools">
                <ToolsIcon size={24} /> {tools}
              </div>
              <div className="post-read-time" title="Ano">
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
                  <GoalIcon size={16} /> Desafio
                </button>
              </li>
              <li>
                <button
                  className={activeId === 'process' ? 'active' : ''}
                  type="button"
                  onClick={() => smoothScroll(processRef)}
                >
                  <BeakerIcon size={16} /> Processo
                </button>
              </li>
              <li>
                <button
                  className={activeId === 'solution' ? 'active' : ''}
                  type="button"
                  onClick={() => smoothScroll(solutionRef)}
                >
                  <RocketIcon size={16} /> Solução
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
            <section id="challenge" ref={challengeRef}>
              <div className="title">
                <div className="bg">
                  <GoalIcon size={24} />
                  <h2>Desafio</h2>
                </div>
              </div>

              <ReactMarkdown content={challenge} />
            </section>

            <section id="process" ref={processRef}>
              <div className="title">
                <div className="bg">
                  <BeakerIcon size={24} />
                  <h2>Processo</h2>
                </div>
              </div>

              <ReactMarkdown content={projeto.process} />
            </section>

            <section id="solution" ref={solutionRef}>
              <div className="title">
                <div className="bg">
                  <RocketIcon size={24} />
                  <h2>Solução</h2>
                </div>
              </div>

              <ReactMarkdown content={solution} />
            </section>

            <Pagination className={showScroll ? 'active' : ''}>
              {previousProject && (
                <div className="previous">
                  <Link href={previousProject}>Projeto anterior</Link>
                </div>
              )}
              {nextProject && (
                <div className="next">
                  <Link href={nextProject}>Próximo projeto</Link>
                </div>
              )}
            </Pagination>
          </Content>
        </Wrapper>

        <BackToTop
          className={showScroll ? 'active' : ''}
          onClick={() => smoothScroll(null)}
          title="Voltar para o topo"
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
    first: 50,
  });

  const paths = projetos.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projeto } = await client.request<GetProjectBySlugQuery>(
    GET_PROJECT_BY_SLUG,
    {
      slug: `${params?.slug}`,
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
