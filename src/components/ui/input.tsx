import type * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { Badge } from './badge';

function Input({
  className,
  type,
  label,
  ...props
}: React.ComponentProps<'input'> & { label?: string }) {
  if (label) {
    return (
      <div className="flex flex-col gap-1">
        <Label htmlFor={label} className="ml-1.5 text-xs font-medium">
          {label}
        </Label>
        <input
          type={type}
          data-slot="input"
          className={cn(
            'border-input selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-8 w-full min-w-0 rounded-xl border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
            className
          )}
          {...props}
        />
      </div>
    );
  }
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-input selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-8 w-full min-w-0 rounded-xl border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

export { Input };
