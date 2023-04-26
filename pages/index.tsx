import client from 'graphql/client';
import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { format, parseISO } from 'date-fns';
import {
  GetPageByIdQuery,
  GetPostsQuery,
  GetProjectsQuery,
  Page,
  Post as PostType,
  Projeto as ProjetoType,
} from 'graphql/generated/graphql';
import { GET_PAGE_BY_ID, GET_POSTS, GET_PROJECTS } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { masonryColumns } from 'utils';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';
import Post from 'components/Post';
import Project from 'components/Project';
import FlightRadar from 'components/svg/flightradar';
import GitHub from 'components/svg/github';
import Linkedin from 'components/svg/linkedin';
import Spotify from 'components/svg/spotify';

import jonathan from '../assets/jonathan.jpg';

import { ChecklistIcon, ClockIcon } from '@primer/octicons-react';

import {
  Content,
  LatestPosts,
  PhotoSocial,
  RecentProjects,
  Social,
  TextHome,
  Wrapper,
} from 'styles/index';

import t from 'content/translation';

type Home = {
  posts: PostType[];
  projetos: ProjetoType[];
  page: Page;
};

export default function Home({ posts, projetos, page }: Home) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <NextSeo title={t[locale].home.title} />

      <Layout>
        <Wrapper>
          <TextHome>
            <div className="fixed-scroll has-custom-strong">
              <h1>{t[locale].home.role}</h1>
              {parse(page.content.html)}
              <Button href="/sobre">{t[locale].home.button}</Button>
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
                      href="https://my.flightradar24.com/jofelipe"
                      title="myFlightradar24"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FlightRadar />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/user/1244967657"
                      title="Spotify"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Spotify />
                    </a>
                  </li>
                </ul>
              </Social>
              <Image
                src={jonathan}
                alt="Jonathan Felipe"
                className="photo"
                quality={90}
                placeholder="blur"
              />
            </PhotoSocial>

            <RecentProjects>
              <h2>{t[locale].home.recentProjects}</h2>

              <Masonry
                breakpointCols={masonryColumns}
                className="masonry"
                columnClassName="masonry-column"
              >
                {projetos.map(
                  ({ slug, thumbnail, name, description, role }) => (
                    <Project key={slug}>
                      <Link href={'/projeto/[slug]'} as={`/projeto/${slug}`}>
                        <Image
                          src={thumbnail.url}
                          alt={name}
                          width={480}
                          height={316}
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
            </RecentProjects>

            <LatestPosts>
              <h2>
                {t[locale].home.recentPosts}{' '}
                {locale === 'en' && <small>(pt-BR)</small>}
              </h2>

              <Masonry
                breakpointCols={masonryColumns}
                className="masonry"
                columnClassName="masonry-column"
              >
                {posts.map(({ slug, date, title, createdAt, readTime }) => (
                  <Post key={slug}>
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <time dateTime={createdAt}>
                        {format(parseISO(date), 'dd/MM/yyyy')}
                      </time>
                      <h3>{title}</h3>
                      <span>
                        <ClockIcon size={16} />{' '}
                        {`${readTime} ${t[locale].blog.readTimeText}`}
                      </span>
                    </Link>
                  </Post>
                ))}
              </Masonry>
            </LatestPosts>

            <Footer />
          </Content>
        </Wrapper>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, {
    first: 6,
  });

  const { projetos } = await client.request<GetProjectsQuery>(GET_PROJECTS, {
    first: 4,
    locale: locale === 'default' ? 'pt' : locale,
  });

  const { page } = await client.request<GetPageByIdQuery>(GET_PAGE_BY_ID, {
    id: 'clgw8vxwj00ek0cltenh2btno',
    locale: locale === 'default' ? 'pt' : locale,
  });

  if (!posts || !projetos || !page) {
    return { notFound: true };
  }

  return {
    props: {
      posts,
      projetos,
      page,
    },
  };
};
