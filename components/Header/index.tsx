import { useState, FC } from 'react';
import Link from 'next/link';

import { Wrapper, Menu, MobileMenu } from './styles';

interface IHeader {
  isFixed: boolean;
}

const Header: FC<IHeader> = ({ isFixed }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper isFixed={isFixed}>
      <Link href="/">
        <a className="logo">Jonathan Felipe</a>
      </Link>

      <Menu isOpen={openMenu}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Agora</a></li>
        </ul>
      </Menu>

      <MobileMenu isOpen={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span className="fill" />
        <span className="fill" />
      </MobileMenu>
    </Wrapper>
  )
}

export default Header;