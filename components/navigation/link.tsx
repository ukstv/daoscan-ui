import React from "react";

import { NavLink } from "@theme-ui/components";
import { default as NextLink, LinkProps } from "next/link";

export function Link(props: React.PropsWithChildren<LinkProps & { className?: string }>) {
  return (
    <NextLink {...props} passHref={true}>
      <NavLink className={props.className}>{props.children}</NavLink>
    </NextLink>
  );
}
