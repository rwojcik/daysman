import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';
import { NextComposedLink, NextComposedLinkProps } from './NextComposedLink';

interface LinkPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

type LinkProps = LinkPropsBase & NextComposedLinkProps & Omit<MuiLinkProps, 'ref'>;

function Link(props: LinkProps) {
  const { activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposedLink className={className} ref={innerRef} {...other} />;
  }

  return <MuiLink component={NextComposedLink} className={className} ref={innerRef} {...other} />;
}

export const DmLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link {...props} innerRef={ref} />
));
