import Link from 'next/link';

import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Project from 'components/Project';
import Footer from 'components/Footer';

import { ZapIcon } from '@primer/octicons-react';

import { Wrapper } from 'styles/content';

const Projects = () => {
  return (
    <>
      <NextSeo title="Projetos" />

      <Layout headerStatic>
        <Wrapper>
          <h1>Projetos</h1>

          <div className="mansory">
            <Project>
              <Link href="/post/criando-uma-rede-social-do-zero">
                <a>
                  <h3>Peakseekers</h3>
                  <p>
                    Peakseekers é um aplicativo específico para aventureiros
                    compartilharem motivações, emoções, dicas e suas reflexões
                    sobre a relação de humanos com montanhas
                  </p>
                  <span>
                    <ZapIcon size={16} /> UI/UX Design, Desenvolvimento
                    Front-end &amp; Back-end
                  </span>
                </a>
              </Link>
            </Project>
          </div>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export default Projects;
