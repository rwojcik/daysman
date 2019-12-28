import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type NextComposedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps;

export const NextComposedLink = React.forwardRef<HTMLAnchorElement, NextComposedLinkProps>((props, ref) => {
  const { as, href, replace, scroll, passHref, shallow, prefetch, children, ...other } = props;

  return (
    <NextLink
      href={href}
      prefetch={prefetch}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
    >
      <a ref={ref} {...other}>
        {children}
      </a>
    </NextLink>
  );
});
