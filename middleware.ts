import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest) => {
  const { nextUrl, geo, headers, cookies } = request;
  const url = nextUrl.clone();
  const language =
    headers
      .get('accept-language')
      ?.split(',')?.[0]
      .split('-')?.[0]
      .toLowerCase() || 'pt';

  try {
    if (
      request.nextUrl.pathname.startsWith('/_next') ||
      request.nextUrl.pathname.includes('/api/') ||
      PUBLIC_FILE.test(request.nextUrl.pathname)
    ) {
      return;
    }

    if (nextUrl.locale !== 'default') {
      return undefined;
    }

    if (cookies.get('NEXT_LOCALE')?.value && nextUrl.locale === 'default') {
      url.pathname = `/${cookies.get('NEXT_LOCALE')?.value}${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    if (language === 'pt') {
      url.pathname = `/pt${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    if (language === 'en') {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    if (nextUrl.locale === 'default') {
      url.pathname = `/pt${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    return undefined;
  } catch (error) {}
};
