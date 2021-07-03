import Link from 'next/link';
import Image from 'next/image';

import { GetStaticProps } from 'next';
import { IFrontMatterPost } from 'types';
import { NextSeo } from 'next-seo';
import { getPosts } from 'services/getStaticFiles';

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
}

const Home = ({ posts }: IHome) => {
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
                      href="https://peakseekers.app/jow"
                      title="Peakseekers"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Peakseekers />
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
                {posts
                  .slice(0, 6)
                  .map(
                    ({
                      frontmatter: { title, readTime, date, external, url },
                      slug,
                    }) =>
                      external ? (
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
                mais sobre meus hobbies atuais: Astronomia e Baixo 🎸
              </p>
              <p>
                Fora da internet, busco me conectar a natureza através do
                ciclismo e uma das minhas maiores paixões: montanhismo.
              </p>
              <p>
                O que fiz nos últimos meses? Escutei muito{' '}
                <a
                  href="https://open.spotify.com/artist/1Ffb6ejR6Fe5IamqA5oRUF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bring Me The Horizon
                </a>{' '}
                e{' '}
                <a
                  href="https://open.spotify.com/artist/7c8kQb9AUntvapfnuC3IhF"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terno Rei
                </a>
                , estudei muito sobre Desenvolvimento Web através dos canais do{' '}
                <a
                  href="https://www.youtube.com/user/willjusten"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Willian Justen
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
                  href="https://medium.com/startup-da-real/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Startup da Real
                </a>{' '}
                e{' '}
                <a
                  href="https://manualdousuario.net/acompanhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manual do Usuário
                </a>
                , e por fim, li muito sobre Astronomia, Finanças e biografias em
                geral.
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

  return {
    props: {
      posts,
    },
  };
};

export default Home;
