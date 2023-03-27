import Link from 'next/link';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import client from 'graphql/client';

import { GetStaticProps } from 'next';
import { GET_POSTS, GET_PROJECTS } from 'graphql/queries';
import {
  GetPostsQuery,
  GetProjectsQuery,
  Post as PostType,
  Projeto as ProjetoType,
} from 'graphql/generated/graphql';
import { NextSeo } from 'next-seo';
import { format, parseISO } from 'date-fns';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Linkedin from 'components/svg/linkedin';
import GitHub from 'components/svg/github';
import Spotify from 'components/svg/spotify';
import FlightRadar from 'components/svg/flightradar';
import Academia from 'components/svg/academia';
import Post from 'components/Post';
import Project from 'components/Project';
import Footer from 'components/Footer';

import jonathan from '../assets/jonathan.jpg';

import { ClockIcon, ChecklistIcon } from '@primer/octicons-react';

import {
  Wrapper,
  TextHome,
  Content,
  PhotoSocial,
  Social,
  LatestPosts,
  RecentProjects,
} from 'styles/index';

type Home = {
  posts: PostType[];
  projetos: ProjetoType[];
};

export default function Home({ posts, projetos }: Home) {
  return (
    <>
      <NextSeo title="Página inicial" />

      <Layout>
        <Wrapper>
          <TextHome>
            <div className="fixed-scroll">
              <h1>
                UI Designer &amp;
                <br />
                Front-end Dev.
              </h1>
              <p>
                Olá, sou o Jonathan <span className="wave-animation">👋🏼</span>
              </p>
              <p>
                Com mais de dez anos de experiência em interfaces para Web e
                Mobile, tenho formação em Análise e Desenvolvimento de Sistemas
                pela UNIP, e atualmente curso uma especialização em Design
                Emocional pela Belas Artes.
              </p>
              <p>
                Como UI Designer, meu objetivo é combinar meu conhecimento em
                Design e minha experiência como Desenvolvedor para criar
                interfaces acessíveis, altamente funcionais e{' '}
                <strong className="text-highlight">
                  esteticamente agradáveis.
                </strong>
              </p>
              <Button href="/sobre">Quero saber mais</Button>
            </div>
          </TextHome>

          <Content>
            <PhotoSocial>
              <Social>
                <p>
                  <span>Psycho</span>social
                </p>
                <ul>
                  <li>
                    <a
                      href="https://linkedin.com/in/jofelipe"
                      title="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jofelipe"
                      title="GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://belasartes.academia.edu/jofelipe"
                      title="Academia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Academia />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://my.flightradar24.com/jofelipe"
                      title="myFlightradar24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FlightRadar />
                    </a>
                  </li>
                </ul>
              </Social>
              <Image
                src={jonathan}
                alt="Jonathan Felipe"
                className="photo"
                quality={90}
                placeholder="blur"
              />
            </PhotoSocial>

            <RecentProjects>
              <h2>Projetos recentes</h2>

              <Masonry
                breakpointCols={masonryColumns}
                className="masonry"
                columnClassName="masonry-column"
              >
                {projetos.map(
                  ({ slug, thumbnail, name, description, role }) => (
                    <Project key={slug}>
                      <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                        <Image
                          src={thumbnail.url}
                          alt={name}
                          width={480}
                          height={316}
                          quality={100}
                        />
                        <div className="spacing">
                          <h3>{name}</h3>
                          <p>{description}</p>
                          <span>
                            <ChecklistIcon size={16} /> {role}
                          </span>
                        </div>
                      </Link>
                    </Project>
                  )
                )}
              </Masonry>
            </RecentProjects>

            <LatestPosts>
              <h2>Posts recentes</h2>

              <Masonry
                breakpointCols={masonryColumns}
                className="masonry"
                columnClassName="masonry-column"
              >
                {posts.map(({ slug, date, title, readTime }) => (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <time>{format(parseISO(date), 'dd/MM/yyyy')}</time>
                      <h3>{title}</h3>
                      <span>
                        <ClockIcon size={16} /> {readTime} minutos de leitura
                      </span>
                    </Link>
                  </Post>
                ))}
              </Masonry>
            </LatestPosts>

            <Footer />
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, {
    first: 6,
  });

  const { projetos } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 4,
  });

  if (!posts || !projetos) {
    return { notFound: true };
  }

  return {
    props: {
      posts,
      projetos,
    },
  };
};
