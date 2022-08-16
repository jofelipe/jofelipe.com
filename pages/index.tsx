import Link from 'next/link';
import Image from 'next/image';
import client from 'graphql/client';

import { GetStaticProps } from 'next';
import { GET_POSTS } from 'graphql/queries';
import { GetPostsQuery } from 'graphql/generated/graphql';
import { NextSeo } from 'next-seo';
import { format, parseISO } from 'date-fns';

import Layout from 'layouts/main';

import Linkedin from 'components/svg/linkedin';
import GitHub from 'components/svg/github';
import Spotify from 'components/svg/spotify';
import FlightRadar from 'components/svg/flightradar';
import Post from 'components/Post';
import Project from 'components/Project';
import Footer from 'components/Footer';

import { ClockIcon, ZapIcon, LinkExternalIcon } from '@primer/octicons-react';

import {
  Wrapper,
  TextHome,
  Content,
  PhotoSocial,
  Social,
  LatestPosts,
  RecentProjects,
  Now,
} from 'styles/index';

export default function Home({ posts }: GetPostsQuery) {
  return (
    <>
      <NextSeo title="Página inicial" />

      <Layout>
        <Wrapper>
          <TextHome>
            <div className="fixed-scroll">
              <h1>
                UI Designer &amp; <br />
                Front-end Dev.
              </h1>
              <p>
                Meu objetivo atualmente é desenvolver novos produtos que
                impactam milhares de pessoas no Brasil através da{' '}
                <a
                  href="https://www.fitcard.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fitcard
                </a>
                .
              </p>
              <p>
                Desde 2012 já participei de mais de 40 projetos para a Web,
                trabalhando em produtos para grandes empresas como AstraZeneca,
                Brasil Kirin, ICC Brazil e USP.
              </p>
              <p>Minha stack atualmente consiste em:</p>

              <ul className="current-stack">
                <li>
                  <img
                    src="/assets/svg/react-react-native.svg"
                    alt="ReactJS"
                    title="ReactJS"
                  />
                </li>
                <li>
                  <img
                    src="/assets/svg/nextjs.svg"
                    alt="NextJS"
                    title="NextJS"
                  />
                </li>
                <li>
                  <img
                    src="/assets/svg/typescript.svg"
                    alt="TypeScript"
                    title="TypeScript"
                  />
                </li>
                <li>
                  <img
                    src="/assets/svg/net-core.svg"
                    alt=".NET Core"
                    title=".NET Core"
                  />
                </li>
                <li>
                  <img
                    src="/assets/svg/graph-ql.svg"
                    alt="GraphQL"
                    title="GraphQL"
                  />
                </li>
              </ul>
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
                      href="https://open.spotify.com/user/1244967657?si=08a3ac3771384320"
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
                src="/assets/img/jonathan.jpg"
                alt="Jonathan Felipe"
                className="photo"
                layout="fixed"
                width={275}
                height={275}
                quality={100}
                loading="eager"
              />
            </PhotoSocial>

            <LatestPosts>
              <h2>Últimos posts</h2>

              <div className="mansory">
                {posts.map(({ slug, title, date, readTime }) => (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a>
                        <time>{format(parseISO(date), 'dd/MM/yyyy')}</time>
                        <h3>{title}</h3>
                        <span>
                          <ClockIcon size={16} /> {readTime} minutos de leitura
                        </span>
                      </a>
                    </Link>
                  </Post>
                ))}
              </div>
            </LatestPosts>

            <RecentProjects>
              <h2>Projetos recentes</h2>

              <div className="hover-effect">
                <Project>
                  <Link href="/post/criando-uma-rede-social-do-zero">
                    <a>
                      <h3>Peakseekers</h3>
                      <p>
                        Peakseekers é um aplicativo específico para aventureiros
                        compartilharem motivações, emoções, dicas e suas
                        reflexões sobre a relação de humanos com montanhas
                      </p>
                      <span>
                        <ZapIcon size={16} /> UI/UX Design, Desenvolvimento
                        Front-end &amp; Back-end
                      </span>
                    </a>
                  </Link>
                </Project>
              </div>
            </RecentProjects>

            <Now>
              <h4>Agora</h4>
              <p>
                Extremamente curioso, passo meu tempo livre buscando aprender
                mais sobre meus hobbies atuais: Astronomia e Fotografia.
              </p>
              <p>
                Fora da internet, busco me conectar a natureza através do
                Ciclismo e uma das minhas maiores paixões: Montanhismo.
              </p>
              <p>
                O que fiz nos últimos meses? Escutei muito{' '}
                <a
                  href="https://open.spotify.com/artist/7c8kQb9AUntvapfnuC3IhF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terno Rei
                </a>{' '}
                e{' '}
                <a
                  href="https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Post Malone
                </a>
                , estudei muito sobre UI/UX através de artigos do{' '}
                <a
                  href="https://www.nngroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nielsen Norman Group
                </a>
                , me atualizei através das newsletters{' '}
                <a
                  href="https://uilab.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI Lab News
                </a>{' '}
                e{' '}
                <a
                  href="https://manualdousuario.net/acompanhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manual do Usuário
                </a>
                , e por fim, li muito sobre Criatividade, Design e Política.
              </p>
              <p>
                E é isso. Caso queira falar um “oi”, me encontre no{' '}
                <a
                  href="https://linkedin.com/in/jofelipe"
                  title="Linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </p>
            </Now>

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

  if (!posts) {
    return { notFound: true };
  }

  return {
    props: {
      posts,
    },
  };
};
