import React from "react";
import _ from "lodash";
import { NavLink } from "@theme-ui/components";
import { default as NextLink, LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps & { className?: string; target?: "_blank" };

export function Link(props: React.PropsWithChildren<LinkProps>) {
  const nextProps = _.omit(props, ["className"]);
  return (
    <NextLink {...nextProps} passHref={true}>
      <NavLink className={props.className}>{props.children}</NavLink>
    </NextLink>
  );
}
