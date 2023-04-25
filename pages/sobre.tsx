import Image from 'next/image';

import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';

import sobre from '../assets/sobre.jpg';

import * as S from 'styles/about';

const Sobre = () => {
  return (
    <>
      <NextSeo title="Sobre mim" />

      <Layout headerStatic>
        <Image
          src={sobre}
          alt="Imagens de Jonathan Felipe"
          className="about-photo"
          quality={95}
          placeholder="blur"
        />

        <S.Wrapper>
          <S.Text>
            <h1>Sobre</h1>

            <p>
              Tenho {new Date().getFullYear() - 1996} anos, sou carinhosamente
              chamado de Jojo e amo emojis ✨
            </p>

            <p>
              Comecei a trabalhar com Web em 2012 atuando como Web Designer, e
              com o tempo, foquei minha carreira em Front-end, mas sempre
              trabalhando bem próximo com a área de UI Design. Desde 2020 tenho
              trabalhado ativamente como UI Developer, criando, prototipando e
              desenvolvendo interfaces que agregam valor para os usuários.
            </p>

            <p>
              <strong className="text-highlight">
                Acredito no poder de um bom repertório
              </strong>{' '}
              para ser um profissional de destaque nesta área, e acima de tudo,
              me sinto atraído por culturas que focam no coletivo para assim
              potencializar o indivíduo, e por isso, a palavra-chave para mim em
              um ambiente de tecnologia é <strong>colaboração</strong>.
            </p>

            <p>
              Extremamente curioso, dedico meu tempo livre a aprender mais com
              meus hobbies atuais:{' '}
              <a
                href="https://www.discogs.com/user/jofelipe/collection"
                title="Discogs"
                target="_blank"
                rel="noopener noreferrer"
              >
                colecionar discos de vinil
              </a>{' '}
              e brincar com fotografia. Fora da internet, busco me conectar com
              a natureza através do ciclismo, além de{' '}
              <a
                href="https://trips.jofelipe.com/"
                title="Trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                viajar pelo mundo
              </a>{' '}
              buscando explorar novos caminhos mergulhando em culturas
              diferentes 🌎
            </p>

            <p>
              Por fim, você pode conferir meu currículo{' '}
              <a
                href="https://read.cv/jofelipe"
                title="Currículo/Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
              .
            </p>
            <Button href="/projetos">Quero ver seus projetos</Button>
          </S.Text>

          <S.ExperienceSkills>
            <S.Experience>
              <h2>Experiência</h2>

              <ul className="experience-list">
                <li>
                  <span className="period">Fev/20 - atual</span>
                  <b className="role">Senior UI Developer</b>
                  <span className="name">Fitcard</span>
                </li>
                <li>
                  <span className="period">Jun/16 - Jan/20</span>
                  <b className="role">Desenvolvedor Full-stack Pleno</b>
                  <span className="name">Agência Santa Fé</span>
                </li>
                <li>
                  <span className="period">Jun/15 - Jun/16</span>
                  <b className="role">Desenvolvedor Front-end Pleno</b>
                  <span className="name">Agência Delucca</span>
                </li>
                <li>
                  <span className="period">Fev/14 - Jun/15</span>
                  <b className="role">Desenvolvedor Front-end Pleno</b>
                  <span className="name">Digitale</span>
                </li>
                <li>
                  <span className="period">Abr/13 - Dez/13</span>
                  <b className="role">Desenvolvedor Front-end Junior</b>
                  <span className="name">Webcompany</span>
                </li>
                <li>
                  <span className="period">Jan/12 - Mar/13</span>
                  <b className="role">Web Designer</b>
                  <span className="name">Princi Agência Web</span>
                </li>
              </ul>
            </S.Experience>

            <S.Skills>
              <h2>Skills</h2>

              <ul>
                <li>Interface Design</li>
                <li>Visual Design</li>
                <li>Responsive Design</li>
                <li>Mobile Design</li>
                <li>Interaction Design</li>
                <li>Emotional Design</li>
                <li className="spacing">Prototyping</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript (ES6+)</li>
                <li>React.js / Next.js</li>
                <li>GraphQL</li>
                <li>Git</li>
                <li className="spacing">SEO</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li className="spacing">VS Code</li>
                <li>Criatividade</li>
                <li>Colaboração</li>
                <li>Comunicação</li>
                <li>Atenção aos detalhes</li>
                <li>Flexibilidade</li>
              </ul>
            </S.Skills>
          </S.ExperienceSkills>
        </S.Wrapper>
      </Layout>

      <Footer />
    </>
  );
};

export default Sobre;
