import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import matter from 'gray-matter';

import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { format } from 'date-fns';

import Layout from 'layouts/main';

import Linkedin from 'components/svg/linkedin';
import GitHub from 'components/svg/github';
import Peakseekers from 'components/svg/peakseekers';
import FlightRadar from 'components/svg/flightradar';
import Post from 'components/Post';
import Footer from 'components/Footer';

import { ClockIcon, ZapIcon, LinkExternalIcon } from '@primer/octicons-react';

import { Wrapper, TextHome, Content, PhotoSocial, Social, LatestPosts, RecentProjects, Project, Now } from 'styles/index';

const Home = ({ posts, projects }) => {
  return (
    <>
      <NextSeo title="Página inicial" />

      <Layout>
        <Wrapper>
          <TextHome>
            <div className="fixed-scroll">
              <h1>UI Designer &amp; <br />Front-end Dev.</h1>
              <p>Meu objetivo atualmente é desenvolver novos produtos que impactam milhares de pessoas no Brasil através da <a href="https://www.fitcard.com.br/" target="_blank" rel="noopener noreferrer">Fitcard</a>.</p>
              <p>Desde 2012 já participei de mais de 40 projetos para a Web, trabalhando em  projetos para grandes empresas como AstraZeneca, Brasil Kirin, ICC Brazil e USP.</p>
              <p>Minha stack atualmente consiste em:</p>

              <ul className="current-stack">
                <li><img src="/assets/svg/figma.svg" alt="Figma" title="Figma" /></li>
                <li><img src="/assets/svg/net-core.svg" alt=".NET Core" title=".NET Core" /></li>
                <li><img src="/assets/svg/react-react-native.svg" alt="React &amp; React Native" title="React &amp; React Native" /></li>
                <li><img src="/assets/svg/nextjs.svg" alt="Next.js" title="Next.js" /></li>
                <li><img src="/assets/svg/typescript.svg" alt="TypeScript" title="TypeScript" /></li>
                <li><img src="/assets/svg/jest.svg" alt="Jest" title="Jest" /></li>
              </ul>
            </div>
          </TextHome>

          <Content>
            <PhotoSocial>
              <Social>
                <p><span>Psycho</span>social</p>
                <ul>
                  <li><a href="https://linkedin.com/in/jofelipe" title="Linkedin" rel="noopener noreferrer"><Linkedin /></a></li>
                  <li><a href="https://github.com/jofelipe" title="GitHub" rel="noopener noreferrer"><GitHub /></a></li>
                  <li><a href="https://peakseekers.app/jow" title="Peakseekers" rel="noopener noreferrer"><Peakseekers /></a></li>
                  <li><a href="https://my.flightradar24.com/jofelipe" title="myFlightradar24" rel="noopener noreferrer"><FlightRadar /></a></li>
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
                {posts.map(({ frontmatter: { title, readTime, date }, slug }) => (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a>
                        <time>{date}</time>
                        <h3>{title}</h3>
                        <span><ClockIcon size={16} /> {readTime} minutos de leitura</span>
                      </a>
                    </Link>
                  </Post>
                ))}

                <Post>
                  <a href="https://medium.com/@jofelipe.com/2019-meu-ano-em-livros-8270ee742577?source=rss-cc6b8aa235ee------2" target="_blank" rel="noopener noreferrer">
                    <time>12/02/2020</time>
                    <h3>2019  —  Meu ano em livros <LinkExternalIcon size={16} /></h3>
                    <span><ClockIcon size={16} /> 3 minutos de leitura</span>
                  </a>
                </Post>
                <Post>
                  <a href="https://medium.com/@jofelipe.com/lac-blanc-minha-primeira-trilha-nos-alpes-c6bd009ac307?source=rss-cc6b8aa235ee------2" target="_blank" rel="noopener noreferrer">
                    <time>15/01/2020</time>
                    <h3>Lac Blanc  —  Minha primeira trilha nos Alpes <LinkExternalIcon size={16} /></h3>
                    <span><ClockIcon size={16} /> 10 minutos de leitura</span>
                  </a>
                </Post>
                <Post>
                  <a href="https://medium.com/@jofelipe.com/hackear-pessoas-%C3%A9-mais-f%C3%A1cil-do-que-hackear-sistemas-33c0cbec5960" target="_blank" rel="noopener noreferrer">
                    <time>15/01/2020</time>
                    <h3>Hackear pessoas é mais fácil do que hackear sistemas <LinkExternalIcon size={16} /></h3>
                    <span><ClockIcon size={16} /> 6 minutos de leitura</span>
                  </a>
                </Post>
                <Post>
                  <a href="https://medium.com/@jofelipe.com/de-mil%C3%A3o-para-maranello-conhecendo-a-casa-da-ferrari-33cbab2ea87a" target="_blank" rel="noopener noreferrer">
                    <time>15/01/2020</time>
                    <h3>De Milão para Maranello. Conhecendo a casa da Ferrari <LinkExternalIcon size={16} /></h3>
                    <span><ClockIcon size={16} /> 4 minutos de leitura</span>
                  </a>
                </Post>
              </div>
            </LatestPosts>

            <RecentProjects>
              <h2>Projetos recentes</h2>

              <div className="hover-effect">
                <Project>
                  <Link href="/">
                    <a>
                      <h3>Peakseekers</h3>
                      <p>Uma descrição bem curta sobre este projeto e seus diferenciais</p>
                      <span><ZapIcon size={16} /> UI Design, Desenvolvimento Front-end &amp; Back-end</span>
                    </a>
                  </Link>
                </Project>

                {projects.map(({ frontmatter: { title, description, roles }, slug }) => (
                  <Project key={title}>
                    <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                      <a>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <span><ZapIcon size={16} /> {roles}</span>
                      </a>
                    </Link>
                  </Project>
                ))}
              </div>
            </RecentProjects>

            <Now>
              <h4>E agora?</h4>
              <p>Extremamente curioso, passo meu tempo livre buscando aprender mais sobre meus hobbies atuais: Astronomia e Fotografia.</p>
              <p>Fora da internet, busco me conectar a natureza através do ciclismo e uma das minhas maiores paixões: montanhismo.</p>
              <p>O que fiz nos últimos meses? Escutei muito <a href="https://open.spotify.com/artist/4RnBFZRiMLRyZy0AzzTg2C" target="_blank" rel="noopener noreferrer">Run The Jewels</a> e <a href="https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP" target="_blank" rel="noopener noreferrer">Rammstein</a>, estudei muito sobre Desenvolvimento Web através dos canais <a href="https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg" target="_blank" rel="noopener noreferrer">Rocketseat</a> e <a href="https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA" target="_blank" rel="noopener noreferrer">Dev Soutinho</a>, me atualizei através das newsletters da <a href="https://thehack.com.br/" target="_blank" rel="noopener noreferrer">The Hack</a> e <a href="https://uilab.com.br/" target="_blank" rel="noopener noreferrer">UI Lab</a>, e por fim, li muito sobre Biologia, Privacidade e os malefícios das redes sociais.</p>
              <p>E é isso. Caso queira falar um “oi”, me encontre em <a href="mailto:hi@jofelipe.com">hi@jofelipe.com</a></p>
            </Now>

            <Footer />
          </Content>
        </Wrapper>
      </Layout>
    </>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const filesPosts = fs.readdirSync(`${process.cwd()}/content/posts`);
  const filesProjects = fs.readdirSync(`${process.cwd()}/content/projects`);

  const posts = filesPosts.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const formattedDate = format(data.date, 'dd/MM/yyyy');

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  const projects = filesProjects.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/projects/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
      projects,
    },
  };
};

export default Home;