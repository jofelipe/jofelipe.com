import Link from 'next/link';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import client from 'graphql/client';

import { useState } from 'react';
import { GetStaticProps } from 'next';
import { GET_PROJECTS } from 'graphql/queries';
import { GetProjectsQuery } from 'graphql/generated/graphql';
import { NextSeo } from 'next-seo';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Project from 'components/Project';
import Footer from 'components/Footer';

import { SearchIcon, ChecklistIcon } from '@primer/octicons-react';

import { Wrapper, BlogHeader, Search, NoPostsFound } from 'styles/content';

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
              Aqui compartilho com vocês alguns dos meus projetos mais especiais
              😍
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
