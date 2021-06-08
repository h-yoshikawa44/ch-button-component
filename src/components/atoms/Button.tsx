import { VFC, FC, ButtonHTMLAttributes, ClassAttributes } from 'react';
import { css } from '@emotion/react';
import {
  LocalGroceryStore,
  AddShoppingCart,
  ProductionQuantityLimits,
  RemoveShoppingCart,
  LocalShipping,
} from '@emotion-icons/material-rounded';
import { getRGBAColor, selectContrastTextColor } from '@/util/color';

type Position = 'start' | 'end';
type Variant = 'contained' | 'outline' | 'text';
type Size = 'sm' | 'md' | 'lg';
type Color = 'default' | 'primary' | 'secondary' | 'danger';
type IconName =
  | 'local_grocery_store'
  | 'add_shopping_cart'
  | 'production_quantity_limits'
  | 'remove_shopping_cart'
  | 'local_shipping';

type IconProps = {
  iconName: IconName;
  position: Position;
};

const Icon: VFC<IconProps> = ({ iconName, position }) => {
  const size = 14;

  return (
    <span css={icon(position)}>
      {iconName === 'local_grocery_store' && <LocalGroceryStore size={size} />}
      {iconName === 'add_shopping_cart' && <AddShoppingCart size={size} />}
      {iconName === 'production_quantity_limits' && (
        <ProductionQuantityLimits size={size} />
      )}
      {iconName === 'remove_shopping_cart' && (
        <RemoveShoppingCart size={size} />
      )}
      {iconName === 'local_shipping' && <LocalShipping size={size} />}
    </span>
  );
};

type ButtonProps = ClassAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
    color?: Color;
    startIcon?: IconName;
    endIcon?: IconName;
    disableShadow?: boolean;
    disabled?: boolean;
  };

const Button: FC<ButtonProps> = ({
  children = 'Default',
  variant = 'contained',
  size = 'md',
  color = 'default',
  startIcon,
  endIcon,
  disableShadow = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      css={[
        buttonBase(size),
        buttonColor({ variant, color }),
        disableShadow && buttonDisableShadow,
        disabled && buttonDisableColor(variant),
      ]}
      disabled={disabled}
      {...props}
    >
      {startIcon && <Icon iconName={startIcon} position="start" />}
      {children}
      {endIcon && <Icon iconName={endIcon} position="end" />}
    </button>
  );
};

const styleMap = {
  padding: {
    sm: '6px 12px',
    md: '8px 16px',
    lg: '11px 22px',
  },
  color: {
    default: {
      normal: '#E0E0E0',
      hover: '#AEAEAE',
      text: '#3F3F3F',
    },
    primary: {
      normal: '#2962FF',
      hover: '#0039CB',
      text: '#FFFFFF',
    },
    secondary: {
      normal: '#455A64',
      hover: '#1C313A',
      text: '#FFFFFF',
    },
    danger: {
      normal: '#D32F2F',
      hover: '#9A0007',
      text: '#FFFFFF',
    },
    disabled: {
      normal: '#E0E0E0',
      text: '#9E9E9E',
    },
  },
};

const icon = (position: Position) => {
  if (position === 'start') {
    return css`
      padding-right: 10px;
      vertical-align: text-bottom;
    `;
  }
  if (position === 'end') {
    return css`
      padding-left: 10px;
      vertical-align: text-bottom;
    `;
  }
};

const buttonBase = (size: Size) => {
  return css`
    padding: ${styleMap.padding[size]};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    border: none;
    border-radius: 6px;
    transition: background-color 0.3s;
  `;
};

const buttonColor = ({
  variant,
  color,
}: {
  variant: Variant;
  color: Color;
}) => {
  if (variant === 'contained') {
    const textColor = selectContrastTextColor(styleMap.color[color].normal, {
      whiteColor: '#FFFFFF',
      blackColor: '#3F3F3F',
    });
    return css`
      color: ${textColor};
      background-color: ${styleMap.color[color].normal};
      box-shadow: 0 2px 3px rgba(51, 51, 51, 0.2);

      &:hover,
      &:focus {
        background-color: ${styleMap.color[color].hover};
      }
    `;
  }
  if (variant === 'outline') {
    const rgbaColor = getRGBAColor(styleMap.color[color].hover, 0.1);
    return css`
      color: ${styleMap.color[color].normal};
      background-color: #fff;
      border: 1px solid ${styleMap.color[color].normal};

      &:hover,
      &:focus {
        background-color: ${rgbaColor};
      }
    `;
  }
  if (variant === 'text') {
    const rgbaColor = getRGBAColor(styleMap.color[color].hover, 0.1);
    return css`
      color: ${styleMap.color[color].normal};
      background-color: #fff;

      &:hover,
      &:focus {
        background-color: ${rgbaColor};
      }
    `;
  }
};

const buttonDisableShadow = css`
  box-shadow: none;
`;

const buttonDisableColor = (variant: Variant) => {
  const bgColor = variant === 'text' ? '#fff' : styleMap.color.disabled.normal;

  return css`
    color: ${styleMap.color.disabled.text};
    background-color: ${bgColor};

    &:hover,
    &:focus {
      background-color: ${bgColor};
    }
  `;
};

export default Button;
