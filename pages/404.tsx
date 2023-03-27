import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';

import { Wrapper, ErrorWrapper } from 'styles/content';

const Error = () => {
  return (
    <>
      <NextSeo title="Erro desconhecido (ou não)" />

      <Layout headerStatic>
        <Wrapper>
          <h1>Erro desconhecido (ou não)</h1>
          <ErrorWrapper>
            <p>
              Parece que você acessou algo que já existiu. Ou apenas digitou
              algo errado na URL. <br /> Pode conferir, por favor?
            </p>

            <Button href="/" center>
              Voltar para a home
            </Button>
          </ErrorWrapper>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export default Error;
