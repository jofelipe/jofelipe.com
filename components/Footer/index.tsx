import Lottie from 'react-lottie-player';
import Image from 'next/image';
import useSWR from 'swr';

import playingAnimation from 'animations/playing.json';

import { Wrapper, NowPlaying } from './styles';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface ISong {
  data?: {
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
  };
}

const Footer = () => {
  const { data }: ISong = useSWR('/api/now-playing', fetcher);

  return (
    <Wrapper>
      {data?.title && (
        <NowPlaying title="Spotify">
          {data?.albumImageUrl && (
            <div className="cover">
              <Image
                src={data.albumImageUrl}
                width={64}
                height={64}
                layout="fixed"
                loading="eager"
              />
            </div>
          )}

          <div className="info">
            <a href={data?.songUrl} target="_blank" rel="noopener noreferrer">
              <strong>{data.title}</strong>
              <p>{data?.artist}</p>
            </a>
          </div>
          <div className="animation">
            <Lottie
              loop
              animationData={playingAnimation}
              play
              speed={0.5}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </div>
        </NowPlaying>
      )}

      <p>Feito com ❤️ ouvindo New Order 🕺🏼</p>
    </Wrapper>
  );
};

export default Footer;
