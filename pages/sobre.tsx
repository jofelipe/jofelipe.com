import { NextSeo } from 'next-seo';

import Layout from 'layouts/main';

import Button from 'components/Button';
import Footer from 'components/Footer';

import * as S from 'styles/about';

const Sobre = () => {
  return (
    <>
      <NextSeo title="Sobre mim" />

      <Layout headerStatic>
        <S.Wrapper>
          <S.Text>
            <h1>Sobre</h1>

            <p>
              Tenho {new Date().getFullYear() - 1996} anos, sou carinhosamente
              chamado de Jojo e amo emojis ✨
            </p>

            <p>
              Comecei a trabalhar com Web em 2012, atuando como Web Designer.
              Com o tempo, foquei minha carreira em Front-end, mas sempre
              mantive interesse em UI Design e, por isso, sempre estive bem
              próximo dessa área. Desde 2020 tenho trabalhado ativamente como
              Designer, buscando alinhar minha experiência prática com
              conhecimento teórico.
            </p>

            <p>
              <strong className="text-highlight">
                Acredito no poder de um bom repertório
              </strong>{' '}
              para ser um profissional de destaque nesta área, e acima de tudo,
              me sinto atraído por culturas que focam no coletivo para assim
              potencializar o indivíduo.
            </p>

            <p>
              Extremamente curioso, dedico meu tempo livre a aprender mais com
              meus hobbies atuais: Artes Plásticas e Fotografia. Fora da
              internet, busco me conectar com a natureza através do ciclismo,
              além de{' '}
              <a
                href="https://trips.jofelipe.com/"
                title="Trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                viajar pelo mundo
              </a>{' '}
              buscando explorar novos caminhos e mergulhar em culturas
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
                  <b className="role">UI Designer</b>
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
                <li>Emotional Design</li>
                <li>UX Writing</li>
                <li className="spacing">Prototyping</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript (ES6+)</li>
                <li className="spacing">Next.js</li>
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
