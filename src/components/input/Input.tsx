import * as React from 'react';
import { IconType } from 'react-icons';

import clsxm from '@/lib/clsxm';

enum InputVariant {
  'primary',
  'secondary',
}

enum InputSize {
  'sm',
  'base',
}

type InputProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof InputVariant;
  size?: keyof typeof InputSize;
  leftIcon?: IconType;
  rightIcon?: IconType;
  leftIconClassName?: string;
  rightIconClassName?: string;
} & React.ComponentPropsWithRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'base',
      isDarkBg = false,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    return (
      <input
        type={type}
        className={clsxm(
          'inline-flex items-center rounded-xl text-center font-medium',
          'border-none focus:outline-none focus-visible:ring',
          'shadow-custom',
          'transition-colors duration-75',
          //#region  //*=========== Size ===========
          [
            size === 'base' && ['px-6 py-5', 'text-xl md:text-4xl'],
            size === 'sm' && ['px-3 py-2', 'text-lg md:text-xl'],
          ],
          //#endregion  //*======== Size ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-maroon-700 text-buttercup-500 placeholder-buttercup-500',
              'hover:bg-maroon-800',
              'active:bg-maroon-900',
              'disabled:bg-maroon-700',
              'focus-visible:ring-maroon-500',
            ],
            variant === 'secondary' && [
              'bg-buttercup-500 text-maroon-700 placeholder-maroon-700',
              'hover:bg-buttercup-400',
              'active:bg-buttercup-600',
              'disabled:bg-buttercup-500',
              'focus-visible:ring-buttercup-400',
            ],
          ],
          //#endregion  //*======== Variants ===========
          className
        )}
        {...rest}
      />
    );
  }
);

export default Input;
