import ReactMarkdown from 'react-markdown/with-html';

import { FC, useEffect } from 'react';

import Prism from 'prismjs';

require('prismjs/components/prism-bash');

require('prismjs/components/prism-javascript');

require('prismjs/components/prism-css');

require('prismjs/components/prism-jsx');

interface IMarkdown {
  content: string;
}

const Markdown: FC<IMarkdown> = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  function renderParagraph(props) {
    const { children } = props;

    if (
      children &&
      children[0] &&
      children.length === 1 &&
      children[0].props &&
      children[0].props.src
    ) {
      return children;
    }

    return <p>{children}</p>;
  }

  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      renderers={{
        link: (props) => (
          <a href={props.href} target="_blank">
            {props.children}
          </a>
        ),
        paragraph: (props) => renderParagraph(props),
      }}
    />
  );
};

export default Markdown;
