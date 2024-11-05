import { type ReactNode } from 'react';
import { TRPCReactProvider } from './_trpc/react';

export function AllProviders({ children }: { children: ReactNode }) {
  return (
    <>
      <TRPCReactProvider>
        {children}
      </TRPCReactProvider>
    </>
  );
}
