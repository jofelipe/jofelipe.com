import Link from 'next/link';
import Image from 'next/image';

import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

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
              algo errado na URL (chuto essa opção). <br /> Pode conferir, por
              favor?
            </p>

            <Link href="/">
              <a className="btn-home">Voltar para a home</a>
            </Link>
          </ErrorWrapper>
        </Wrapper>

        <Footer />
      </Layout>
    </>
  );
};

export default Error;
