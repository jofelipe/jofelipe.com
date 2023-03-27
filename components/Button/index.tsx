import React, { FC } from 'react';
import Link from 'next/link';

import * as S from './styles';

type Button = {
  href: string;
  center?: boolean;
};

const Button: FC<Button> = ({ children, href, center }) => {
  return (
    <Link href={href}>
      <S.Button className={center && 'center'}>{children}</S.Button>
    </Link>
  );
};

export default Button;
