import client from 'graphql/client';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { format, parseISO } from 'date-fns';
import {
  GetPostsQuery,
  GetProjectsQuery,
  Post as PostType,
  Projeto as ProjetoType,
} from 'graphql/generated/graphql';
import { GET_POSTS, GET_PROJECTS } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';
import Post from 'components/Post';
import Project from 'components/Project';
import FlightRadar from 'components/svg/flightradar';
import GitHub from 'components/svg/github';
import Linkedin from 'components/svg/linkedin';
import Spotify from 'components/svg/spotify';

import jonathan from '../assets/jonathan.jpg';

import { ChecklistIcon, ClockIcon } from '@primer/octicons-react';

import {
  Content,
  LatestPosts,
  PhotoSocial,
  RecentProjects,
  Social,
  TextHome,
  Wrapper,
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
              <h1>Senior UI Developer</h1>
              <p>
                Olá, sou o Jonathan <span className="wave-animation">👋🏼</span>
              </p>
              <p>
                Com mais de dez anos de experiência em interfaces para Web e
                Mobile, ajudo empresas a criar{' '}
                <strong className="text-highlight">
                  produtos digitais acessíveis
                </strong>
                , altamente funcionais e esteticamente agradáveis através do meu
                conhecimento em UI Design & Desenvolvimento Front-end.
              </p>
              <p>
                Atualmente trabalhando remoto na{' '}
                <a
                  href="https://www.fitcard.com.br/"
                  title="Fitcard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitcard
                </a>
                , tenho formação em Análise e Desenvolvimento de Sistemas pela
                UNIP e curso uma especialização em Design Emocional pela Belas
                Artes.
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
                      href="https://my.flightradar24.com/jofelipe"
                      title="myFlightradar24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FlightRadar />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/user/1244967657"
                      title="Spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Spotify />
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
                {posts.map(({ slug, date, title, createdAt, readTime }) => (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <time dateTime={createdAt}>
                        {format(parseISO(date), 'dd/MM/yyyy')}
                      </time>
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
