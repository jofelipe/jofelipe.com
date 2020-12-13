import { FC } from 'react';

import { Wrapper } from './styles';

const Post: FC = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default Post;