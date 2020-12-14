import Link from 'next/link';

import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Post from 'components/Post';
import Footer from 'components/Footer';

import { ClockIcon, SearchIcon } from '@primer/octicons-react';

import { Wrapper } from 'styles/blog';

const Blog = () => {
  return (
    <>
      <NextSeo title="Blog" />

      <Layout headerFixed>
        <Wrapper>
          <h1>Blog</h1>

          <div className="mansory">
            <Post>
              <Link href="/">
                <a>
                  <time>15/01/2019</time>
                  <h3>2019  —  Meu ano em livros</h3>
                  <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                </a>
              </Link>
            </Post>
            <Post>
              <Link href="/">
                <a>
                  <time>15/01/2019</time>
                  <h3>Lac Blanc  —  Minha primeira trilha nos Alpes</h3>
                  <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                </a>
              </Link>
            </Post>
            <Post>
              <Link href="/">
                <a>
                  <time>15/01/2019</time>
                  <h3>Hackear pessoas é mais fácil do que hackear sistemas</h3>
                  <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                </a>
              </Link>
            </Post>
            <Post>
              <Link href="/">
                <a>
                  <time>15/01/2019</time>
                  <h3>De Milão para Maranello. Conhecendo a casa da Ferrari</h3>
                  <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                </a>
              </Link>
            </Post>
            <Post>
              <Link href="/">
                <a>
                  <time>15/01/2019</time>
                  <h3>Criatividade, ideias boas y otras cositas más</h3>
                  <span><ClockIcon size={16} /> 5 minutos de leitura</span>
                </a>
              </Link>
            </Post>
          </div>

          <Footer />
        </Wrapper>
      </Layout>
      
    </>
  )
}

export default Blog;