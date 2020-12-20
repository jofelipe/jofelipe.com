import ReactMarkdown from 'react-markdown/with-html';

import { FC } from 'react';

interface IMarkdown {
  content: string;
}

const Markdown: FC<IMarkdown> = ({ content }) => {
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
