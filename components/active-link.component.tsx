import React, { ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactElement;
}

export function ActiveLink(props: Props) {
  const router = useRouter();
  const activeClassName = props.activeClassName || "active";

  let className = `${props.children.props.className} ${props.className}`;
  if (router.pathname === props.href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link {...props}>{React.cloneElement(props.children, { className })}</Link>;
}
