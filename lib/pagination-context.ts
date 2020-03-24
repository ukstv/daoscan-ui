import { NextPageContext } from "next";

export interface PaginationContext {
  first: number | undefined;
  after: string | undefined;
  last: number | undefined;
  before: string | undefined;
}

export namespace PaginationContext {
  export function build(context: NextPageContext): PaginationContext {
    const first = context.query.first ? Number(context.query.first) : undefined;
    const after = context.query.after ? String(context.query.after) : undefined;
    const last = context.query.last ? Number(context.query.last) : undefined;
    const before = context.query.before ? String(context.query.before) : undefined;
    return {
      first,
      after,
      last,
      before
    };
  }
}
