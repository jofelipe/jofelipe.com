import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Footer from 'components/Footer';

import { Wrapper } from 'styles/content';
import { Content } from 'styles/content/post';

const Projects = () => {
  return (
    <>
      <NextSeo title="Setup" />

      <Layout headerStatic>
        <Wrapper>
          <h1>Setup</h1>
          <Content isPage>
            <p>
              Aqui vou listar tudo relacionado ao meu setup atual, relacionado à
              tecnologia.{' '}
            </p>
            <p className="margin">
              Todos os itens foram acumulados nos últimos anos em que alternei
              entre trabalho presencial e home office, com uma atualização
              chegando 😎
            </p>

            <h3>Computador/Escritório</h3>
            <ul>
              <li>Asus Vivobook 15 X512FJ (Windows/Ubuntu)</li>
              <li>Monitor LG Ultrawide 29" 29UM69G</li>
              <li>Logitech MX Anywhere 2S</li>
              <li>Logitech MX Keys</li>
              <li>Cadeira Alpha Gamer Vega Black</li>
              <li>Google Home Mini</li>
            </ul>

            <h3>Código</h3>
            <ul>
              <li>
                Editor: VSCode (
                <a
                  href="https://gist.github.com/jofelipe/6ddf06dfec00ddee28fc5135c631a9a2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Config
                </a>
                )
              </li>
              <li>
                Tema:{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=rocketseat.theme-omni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Omni
                </a>
              </li>
              <li>Terminal: Windows Terminal/ZSH</li>
            </ul>

            <h3>Áudio/Vídeo</h3>
            <ul>
              <li>Kuba Disco Una</li>
              <li>Kuba Mali</li>
              <li>Logitech C270</li>
            </ul>
          </Content>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export default Projects;
