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
          <a className="logo">Jonathan Felipe</a>
        </Link>

        <Menu isOpen={openMenu}>
          <ul>
            <li className={router.pathname === '/' ? 'active' : ''}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={
                router.pathname.includes('blog') ||
                router.pathname.includes('post')
                  ? 'active'
                  : ''
              }
            >
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a
                href="https://trips.jofelipe.com/"
                title="Trips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trips
              </a>
            </li>
          </ul>
        </Menu>
      </div>

      <MobileMenu isOpen={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        <span className="fill" />
        <span className="fill" />
      </MobileMenu>
    </Wrapper>
  );
};

export default Header;
