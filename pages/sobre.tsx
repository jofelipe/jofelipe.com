import client from 'graphql/client';
import parse from 'html-react-parser';
import Image from 'next/image';

import { GetPageByIdQuery, Page } from 'graphql/generated/graphql';
import { GET_PAGE_BY_ID } from 'graphql/queries';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';

import sobre from '../assets/sobre.jpg';

import * as S from 'styles/about';

import t from 'content/translation.json';

type About = {
  page: Page;
};

export default function Sobre({ page }: About) {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <NextSeo title={t[locale].about.title} />

      <Layout headerStatic>
        <Image
          src={sobre}
          alt="Jonathan Felipe"
          className="about-photo"
          quality={95}
          placeholder="blur"
        />

        <S.Wrapper>
          <S.Text className="has-custom-strong">
            <h1>{t[locale].about.title}</h1>
            {parse(page.content.html)}
            <Button href="/projetos">{t[locale].about.button}</Button>
          </S.Text>

          <S.ExperienceSkills>
            <S.Experience>
              <h2>{t[locale].about.experience}</h2>
              <div className="experience-list">
                {parse(page.experience.html)}
              </div>
            </S.Experience>

            <S.Skills>
              <h2>Skills</h2>
              {parse(page.skills.html)}
            </S.Skills>
          </S.ExperienceSkills>
        </S.Wrapper>
      </Layout>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const { page } = await client.request<GetPageByIdQuery>(GET_PAGE_BY_ID, {
    id: 'clgwmtgab0gfm0bki9balrv6s',
    locale,
  });

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      page,
    },
  };
};
