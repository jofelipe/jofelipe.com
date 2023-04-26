import client from 'graphql/client';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { GetProjectsQuery } from 'graphql/generated/graphql';
import { GET_PROJECTS } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Footer from 'components/Footer';
import Project from 'components/Project';

import { ChecklistIcon, SearchIcon } from '@primer/octicons-react';

import { BlogHeader, NoPostsFound, Search, Wrapper } from 'styles/content';

import t from 'content/translation';

export default function Blog({ projetos }: GetProjectsQuery) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const { locale } = router;

  const filteredProjects = projetos.filter((project) =>
    project.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <NextSeo title={t[locale].projects.title} />

      <Layout headerStatic>
        <Wrapper>
          <BlogHeader>
            <h1>{t[locale].projects.title}</h1>
            <p>{t[locale].projects.description}</p>
          </BlogHeader>

          <Search>
            <SearchIcon size={32} />
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t[locale].projects.searchText}
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
              <NoPostsFound>{t[locale].projects.notFound}</NoPostsFound>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { projetos } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 50,
    locale: locale === 'default' ? 'pt' : locale,
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
