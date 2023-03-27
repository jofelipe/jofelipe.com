import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Wrapper, Menu, MobileMenu } from './styles';

interface IHeader {
  isStatic: boolean;
}

const Header: FC<IHeader> = ({ isStatic }) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Wrapper isStatic={isStatic}>
      <div className="alignment">
        <Link href="/">
          <span className="logo">Jonathan Felipe</span>
        </Link>

        <Menu isOpen={openMenu}>
          <ul>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === '/sobre' ? 'active' : ''}>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li className={router.pathname.includes('projeto') ? 'active' : ''}>
              <Link href="/projetos">Projetos</Link>
            </li>
            <li
              className={
                router.pathname.includes('blog') ||
                router.pathname.includes('post')
                  ? 'active'
                  : ''
              }
            >
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </Menu>
      </div>

      <MobileMenu isOpen={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span className="fill" />
        <span className="fill" />
        <span className="fill" />
      </MobileMenu>
    </Wrapper>
  );
};

export default Header;
