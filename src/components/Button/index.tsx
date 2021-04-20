import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled, { css } from "styled-components/macro";

interface ButtonSize {
  size?: "sm" | "lg";
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonSize {
  children?: React.ReactNode;
}

const getSizeStyles = (size: "sm" | "lg") => {
  return {
    sm: css`
      width: 46px;
      height: 43px;
    `,
    lg: css`
      padding: 11px 31px;
    `
  }[size];
};

const StyledButton = styled.button`
  background: transparent linear-gradient(90deg, #266efd 0%, #3876f1 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 17px #3876f194;
  border-radius: 5px;
  opacity: 1;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  ${({ size }: ButtonSize) => getSizeStyles(size!)}
  cursor: pointer;
`;

const Button: React.FC<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {props.children}
    </StyledButton>
  );
});

Button.defaultProps = {
  size: "lg"
};

export default Button;
