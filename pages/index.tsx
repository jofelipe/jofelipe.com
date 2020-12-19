import Link from 'next/link';
import Image from 'next/image';

import { GetStaticProps } from 'next';
import { IFrontMatterPost, IFrontMatterProject } from 'types';
import { NextSeo } from 'next-seo';
import { getPosts, getProjects } from 'services/getStaticFiles';

import Layout from 'layouts/main';

import Linkedin from 'components/svg/linkedin';
import GitHub from 'components/svg/github';
import Peakseekers from 'components/svg/peakseekers';
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

interface IHome {
  posts: IFrontMatterPost[];
  projects: IFrontMatterProject[];
}

const Home = ({ posts, projects }: IHome) => {
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
                👋🏼 Meu objetivo atualmente é desenvolver novos produtos que
                impactam milhões de pessoas no Brasil através da{' '}
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
                  <img src="/assets/svg/figma.svg" alt="Figma" title="Figma" />
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
                    src="/assets/svg/react-react-native.svg"
                    alt="React &amp; React Native"
                    title="React &amp; React Native"
                  />
                </li>
                <li>
                  <img
                    src="/assets/svg/nextjs.svg"
                    alt="Next.js"
                    title="Next.js"
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
                  <img src="/assets/svg/jest.svg" alt="Jest" title="Jest" />
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
                      rel="noopener noreferrer"
                    >
                      <Linkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/jofelipe"
                      title="GitHub"
                      rel="noopener noreferrer"
                    >
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://peakseekers.app/jow"
                      title="Peakseekers"
                      rel="noopener noreferrer"
                    >
                      <Peakseekers />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://my.flightradar24.com/jofelipe"
                      title="myFlightradar24"
                      rel="noopener noreferrer"
                    >
                      <FlightRadar />
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
              />
            </PhotoSocial>

            <LatestPosts>
              <h2>Últimos posts</h2>

              <div className="mansory">
                {posts
                  .slice(0, 6)
                  .map(
                    ({
                      frontmatter: { title, readTime, date, fromMedium, url },
                      slug,
                    }) =>
                      fromMedium ? (
                        <Post key={slug}>
                          <a href={url} target="_blank">
                            <time>{date}</time>
                            <h3>
                              {title} <LinkExternalIcon size={16} />
                            </h3>
                            <span>
                              <ClockIcon size={16} /> {readTime} minutos de
                              leitura
                            </span>
                          </a>
                        </Post>
                      ) : (
                        <Post key={slug}>
                          <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                            <a>
                              <time>{date}</time>
                              <h3>{title}</h3>
                              <span>
                                <ClockIcon size={16} /> {readTime} minutos de
                                leitura
                              </span>
                            </a>
                          </Link>
                        </Post>
                      )
                  )}
              </div>
            </LatestPosts>

            <RecentProjects>
              <h2>Projetos recentes</h2>

              <div className="hover-effect">
                <Project>
                  <Link href="/">
                    <a>
                      <h3>Peakseekers</h3>
                      <p>
                        Uma descrição bem curta sobre este projeto e seus
                        diferenciais
                      </p>
                      <span>
                        <ZapIcon size={16} /> UI Design, Desenvolvimento
                        Front-end &amp; Back-end
                      </span>
                    </a>
                  </Link>
                </Project>

                {projects.map(
                  ({ frontmatter: { title, description, roles }, slug }) => (
                    <Project key={title}>
                      <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                        <a>
                          <h3>{title}</h3>
                          <p>{description}</p>
                          <span>
                            <ZapIcon size={16} /> {roles}
                          </span>
                        </a>
                      </Link>
                    </Project>
                  )
                )}
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
                ciclismo e uma das minhas maiores paixões: montanhismo.
              </p>
              <p>
                O que fiz nos últimos meses? Escutei muito{' '}
                <a
                  href="https://open.spotify.com/artist/4RnBFZRiMLRyZy0AzzTg2C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Run The Jewels
                </a>{' '}
                e{' '}
                <a
                  href="https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rammstein
                </a>
                , estudei muito sobre Desenvolvimento Web através dos canais{' '}
                <a
                  href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rocketseat
                </a>{' '}
                e{' '}
                <a
                  href="https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev Soutinho
                </a>
                , me atualizei através das newsletters da{' '}
                <a
                  href="https://thehack.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Hack
                </a>{' '}
                e{' '}
                <a
                  href="https://uilab.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UI Lab
                </a>
                , e por fim, li muito sobre Biologia, Privacidade e os
                malefícios das redes sociais.
              </p>
              <p>
                E é isso. Caso queira falar um “oi”, me encontre em{' '}
                <a href="mailto:hi@jofelipe.com">hi@jofelipe.com</a>
              </p>
            </Now>

            <Footer />
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPosts();
  const projects = getProjects();

  return {
    props: {
      posts,
      projects,
    },
  };
};

export default Home;
