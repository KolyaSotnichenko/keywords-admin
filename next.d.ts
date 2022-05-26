import type { ReactElement, ReactNode } from 'react';
import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils';

declare module 'next' {
  export declare type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    getLayout?: (page: ReactElement) => ReactNode;
  }
}

declare module "path/*.png" {
  const value: any,
  export default value
}
