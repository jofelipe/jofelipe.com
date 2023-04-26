import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { Menu, MobileMenu, Wrapper } from './styles';

import t from 'content/translation';

interface IHeader {
  isStatic: boolean;
}

const Header: FC<IHeader> = ({ isStatic }) => {
  const router = useRouter();
  const { locale } = router;

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
              <Link href="/sobre">{t[locale].menu.about}</Link>
            </li>
            <li className={router.pathname.includes('projeto') ? 'active' : ''}>
              <Link href="/projetos">{t[locale].menu.projects}</Link>
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
