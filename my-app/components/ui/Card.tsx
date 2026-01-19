import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white p-6 shadow transition hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}