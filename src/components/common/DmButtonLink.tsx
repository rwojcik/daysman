import * as React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import MuiButton, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';
import { NextComposedLink, NextComposedLinkProps } from './NextComposedLink';

interface LinkButtonPropsBase {
  activeClassName?: string;
  innerRef?: React.Ref<HTMLAnchorElement>;
  naked?: boolean;
}

type ButtonLinkProps = LinkButtonPropsBase & NextComposedLinkProps & Omit<MuiButtonProps, 'ref'>;

const ButtonLink: React.FC<ButtonLinkProps> = props => {
  const { activeClassName = 'active', className: classNameProps, innerRef, naked, ...other } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (naked) {
    return <NextComposedLink className={className} ref={innerRef} {...other} />;
  }

  return <MuiButton component={NextComposedLink} className={className} ref={innerRef} {...other} />;
};

export const DmButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, ref) => (
  <ButtonLink {...props} innerRef={ref} />
));

DmButtonLink.displayName = 'DmButtonLink';
