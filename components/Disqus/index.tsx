import { FC } from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface Disqus {
  url: string;
  id: string;
  title: string;
}

const Disqus: FC<Disqus> = ({ url, id, title }) => {
  const disqusShortname = 'jonathan-felipe';

  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={{
        url,
        identifier: id,
        title: title,
        language: 'pt_BR',
      }}
    />
  )
}

export default Disqus;