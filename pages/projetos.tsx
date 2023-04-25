import client from 'graphql/client';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { GetProjectsQuery } from 'graphql/generated/graphql';
import { GET_PROJECTS } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Footer from 'components/Footer';
import Project from 'components/Project';

import { ChecklistIcon, SearchIcon } from '@primer/octicons-react';

import { BlogHeader, NoPostsFound, Search, Wrapper } from 'styles/content';

export default function Blog({ projetos }: GetProjectsQuery) {
  const [searchValue, setSearchValue] = useState('');

  const filteredProjects = projetos.filter((project) =>
    project.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <NextSeo title="Projetos" />

      <Layout headerStatic>
        <Wrapper>
          <BlogHeader>
            <h1>Projetos</h1>
            <p>
              Aqui compartilho com vocês alguns dos meus cases mais especiais 😍
            </p>
          </BlogHeader>

          <Search>
            <SearchIcon size={32} />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Pesquisar por..."
              autoFocus
            />
          </Search>

          <Masonry
            breakpointCols={masonryColumns}
            className="masonry"
            columnClassName="masonry-column"
          >
            {!searchValue &&
              projetos.map(({ slug, thumbnail, name, description, role }) => (
                <Project key={slug}>
                  <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                    <Image
                      src={thumbnail.url}
                      width={796}
                      height={524}
                      alt={name}
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
              ))}

            {!filteredProjects.length && (
              <NoPostsFound>Nenhum projeto encontrado 😭</NoPostsFound>
            )}

            {searchValue &&
              filteredProjects.map(
                ({ slug, thumbnail, name, description, role }) => (
                  <Project key={slug}>
                    <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                      <Image
                        src={thumbnail.url}
                        width={796}
                        height={524}
                        alt={name}
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
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { projetos } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 50,
  });

  if (!projetos) {
    return { notFound: true };
  }

  return {
    props: {
      projetos,
    },
  };
};
