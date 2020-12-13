import Link from 'next/link';

import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Linkedin from 'components/svg/linkedin';
import GitHub from 'components/svg/github';
import Peakseekers from 'components/svg/peakseekers';
import FlightRadar from 'components/svg/flightradar';
import Post from 'components/Post';
import Footer from 'components/Footer';

import { ClockIcon, ZapIcon } from '@primer/octicons-react';

import { Wrapper, TextHome, Content, PhotoSocial, Social, LatestPosts, RecentProjects, Project, Now } from 'styles/index';

const Home = () => {
  return (
    <>
      <NextSeo title="Página inicial" />

      <Layout>
        <Wrapper>
          <TextHome>
            <div className="fixed-scroll">
              <h1>UI Designer &amp; <br />Front-end Dev.</h1>
              <p>Meu objetivo atualmente é desenvolver novos produtos que impactam milhares de pessoas no Brasil através da Fitcard.</p>
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
                  <li><a href="#" title="Linkedin"><Linkedin /></a></li>
                  <li><a href="#" title="GitHub"><GitHub /></a></li>
                  <li><a href="#" title="Peakseekers"><Peakseekers /></a></li>
                  <li><a href="#" title="myFlightradar24"><FlightRadar /></a></li>
                </ul>
              </Social>
              <img src="/assets/img/jonathan.jpg" alt="Jonathan Felipe" className="photo" />
            </PhotoSocial>

            <LatestPosts>
              <h2>Últimos posts</h2>

              <div className="mansory">
                <Post>
                  <Link href="/">
                    <a>
                      <time>15/01/2019</time>
                      <h3>2019  —  Meu ano em livros</h3>
                      <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                    </a>
                  </Link>
                </Post>
                <Post>
                  <Link href="/">
                    <a>
                      <time>15/01/2019</time>
                      <h3>Lac Blanc  —  Minha primeira trilha nos Alpes</h3>
                      <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                    </a>
                  </Link>
                </Post>
                <Post>
                  <Link href="/">
                    <a>
                      <time>15/01/2019</time>
                      <h3>Hackear pessoas é mais fácil do que hackear sistemas</h3>
                      <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                    </a>
                  </Link>
                </Post>
                <Post>
                  <Link href="/">
                    <a>
                      <time>15/01/2019</time>
                      <h3>De Milão para Maranello. Conhecendo a casa da Ferrari</h3>
                      <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                    </a>
                  </Link>
                </Post>
                <Post>
                  <Link href="/">
                    <a>
                      <time>15/01/2019</time>
                      <h3>Criatividade, ideias boas y otras cositas más</h3>
                      <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                    </a>
                  </Link>
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

                <Project>
                  <Link href="/">
                    <a>
                      <h3>Prime Dashboard</h3>
                      <p>Uma descrição bem curta sobre este projeto e seus diferenciais</p>
                      <span><ZapIcon size={16} /> UI Design &amp; Desenvolvimento Front-end</span>
                    </a>
                  </Link>
                </Project>

                <Project>
                  <Link href="/">
                    <a>
                      <h3>Router</h3>
                      <p>Uma descrição bem curta sobre este projeto e seus diferenciais</p>
                      <span><ZapIcon size={16} /> UI Design &amp; Desenvolvimento Front-end</span>
                    </a>
                  </Link>
                </Project>
              </div>
            </RecentProjects>

            <Now>
              <h4>E agora?</h4>
              <p>Extremamente curioso, passo meu tempo livre buscando aprender mais sobre meus hobbies atuais: Astronomia e Fotografia.</p>
              <p>Fora da internet, busco me conectar a natureza através do ciclismo e uma das minhas maiores paixões: montanhismo.</p>
              <p>O que fiz nos últimos meses? Escutei muito Run The Jewels e Rammstein, estudei muito sobre Desenvolvimento Web através dos canais Rocketseat e Dev Soutinho, me atualizei através das newsletters da The Hack e UI Lab, e por fim, li muito sobre Biologia, Privacidade e os malefícios das redes sociais.</p>
              <p>E é isso. Caso queira falar um “oi”, me encontre em <a href="mailto:hi@jofelipe.com">hi@jofelipe.com</a></p>
            </Now>

            <Footer />
          </Content>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Home;