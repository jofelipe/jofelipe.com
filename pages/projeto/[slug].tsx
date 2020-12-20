import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GetStaticProps, GetStaticPaths } from 'next';
import { IFrontMatterProject } from 'types';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Layout from 'layouts/main';

import ReactMarkdown from 'components/ReactMarkdown';
import Footer from 'components/Footer';

import { ChevronLeftIcon, ZapIcon } from '@primer/octicons-react';

import { Wrapper, Content, PostInfo, FeaturedImage } from 'styles/content/post';

const Project = ({ content, frontmatter, slug }: IFrontMatterProject) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.description}
        openGraph={{
          title: frontmatter.title,
          description: frontmatter.description,
          url: `${process.env.NEXT_PUBLIC_URL}/projeto/${slug}`,
          type: 'website',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_URL}${frontmatter.openGraphImage}`,
              width: 1200,
              height: 1200,
              alt: frontmatter.title,
            },
          ],
        }}
      />

      <Layout headerStatic>
        <Wrapper>
          <Content>
            <header>
              <button
                className="btn-back"
                onClick={() => router.back()}
                title="Voltar"
              >
                <ChevronLeftIcon size={32} />
              </button>
              <h1>{frontmatter.title}</h1>
            </header>
            <PostInfo>
              <div className="project-role">
                <ZapIcon size={24} /> {frontmatter.roles}
              </div>
            </PostInfo>
          </Content>

          <FeaturedImage
            style={{ backgroundImage: `url(${frontmatter.featuredImage})` }}
          />

          <Content>
            <ReactMarkdown content={content} />
          </Content>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('content/projects');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/projects', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = {
    ...data,
  };

  return {
    props: {
      content,
      frontmatter,
      slug,
    },
  };
};

export default Project;
