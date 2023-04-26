import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';

import { ErrorWrapper, Wrapper } from 'styles/content';

import t from 'content/translation.json';

const Error = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <NextSeo title={t[locale].error404.title} />

      <Layout headerStatic>
        <Wrapper>
          <h1>E{t[locale].error404.title}</h1>
          <ErrorWrapper>
            <p>{t[locale].error404.description}</p>

            <Button href="/" center>
              {t[locale].error404.button}
            </Button>
          </ErrorWrapper>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export default Error;
