import Link from 'next/link';

import { GetStaticProps } from 'next';
import { IFrontMatterProject } from 'types';
import { getProjects } from 'services/getStaticFiles';
import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Project from 'components/Project';
import Footer from 'components/Footer';

import { ZapIcon } from '@primer/octicons-react';

import { Wrapper } from 'styles/content';

interface IProjects {
  projects: IFrontMatterProject[];
}

const Projects = ({ projects }: IProjects) => {
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
            {projects.map(
              ({ frontmatter: { title, description, roles }, slug }) => (
                <Project key={slug}>
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
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects();

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
