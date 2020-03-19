import React from "react";

import { NavLink } from "@theme-ui/components";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps & { className?: string, target?: '_blank' };

export function Link(props: React.PropsWithChildren<LinkProps>) {
  return (
    <NextLink {...props} passHref={true}>
      <NavLink className={props.className}>{props.children}</NavLink>
    </NextLink>
  );
}
