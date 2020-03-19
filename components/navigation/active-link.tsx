import React from "react";
import { Link, LinkProps } from "./link";
import { useRouter } from "next/router";

export interface ActiveLinkProps extends LinkProps {
  className?: string;
  activeClassName?: string;
}

export function ActiveLink(props: React.PropsWithChildren<ActiveLinkProps>) {
  const router = useRouter();
  const activeClassName = props.activeClassName || "active";

  let className = props.className || "";
  if (router.pathname === props.href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link {...props} className={className} />;
}
