import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';
import { Typography } from '../ui/Typography';

export const Layout = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex-wrap w-full flex gap-4 px-4 mt-4 justify-center',
        props.className
      )}
    />
  );
};

export const LayoutHeader = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-start gap-1 flex-col w-full md:flex-1 min-w-[200px]',
        props.className
      )}
    />
  );
};

export const LayoutTitle = (props: ComponentPropsWithoutRef<'h1'>) => {
  return <Typography {...props} variant="h2" className={cn(props.className)} />;
};

export const LayoutDescription = (props: ComponentPropsWithoutRef<'p'>) => {
  return <Typography {...props} className={cn(props.className)} />;
};

export const LayoutActions = (props: ComponentPropsWithoutRef<'div'>) => {
  return <div {...props} className={cn('flex items-center', props.className)} />;
};

export const LayoutContent = (props: ComponentPropsWithoutRef<'div'>) => {
  return <div {...props} className={cn('w-full', props.className)} />;
};