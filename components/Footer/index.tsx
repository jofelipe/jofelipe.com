import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Lottie from 'react-lottie-player';
import useSWR from 'swr';

import playingAnimation from 'animations/playing.json';

import { CheckIcon, CopyIcon } from '@primer/octicons-react';

import { NowPlaying, Wrapper } from './styles';

import t from 'content/translation';

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

  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const { locale } = router;

  const handleClick = () => {
    navigator.clipboard.writeText('eu@jofelipe.com');
    setCopied(true);
  };

  return (
    <Wrapper>
      {data?.title && (
        <NowPlaying title={t[locale].footer.spotify}>
          {data?.albumImageUrl && (
            <div className="cover">
              <Image
                src={data.albumImageUrl}
                width={64}
                height={64}
                loading="eager"
                alt={data.artist}
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

      <p>
        <span className="mail">
          {`${t[locale].footer.sayHi} `}
          <a
            title={copied ? t[locale].footer.copied : t[locale].footer.copy}
            onClick={handleClick}
          >
            eu@jofelipe.com
            <span className="tooltip">
              {copied ? <CheckIcon size={12} /> : <CopyIcon size={12} />}
            </span>
          </a>
        </span>
        {t[locale].footer.madeWith}
      </p>
    </Wrapper>
  );
};

export default Footer;
