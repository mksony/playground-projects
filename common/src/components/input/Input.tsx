import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from 'types';

import { getFormElementDimensions } from '../../styles';

export interface InputProps {
  isValid?: boolean;
  size?: Sizes;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  placeholder?: string;
  className?: string;
  type?: string; // TODO: add allowed types here
}

class Input extends React.Component<InputProps, {}> {

  static defaultProps: InputProps = {
    type: 'text',
  };

  constructor() {
    super();
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      autoComplete,
      autoFocus,
      placeholder,
      className,
      type,
    } = this.props;
    return (
      <input
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        onBlur={this.handleBlur}
        placeholder={placeholder}
        className={className}
        type={type}
        onChange={this.handleChange}
      />
    );
  }
}

const StyledInput = styled(Input) `
  background-color: white;
  border: 1px solid transparent;
  border-color: #dbdbdb;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  display: inline-flex;
  font-size: 1rem;
  justify-content: flex-start;
  ${props => getFormElementDimensions(props.size as Sizes)}
  max-width: 100%;
  width: 100%;
`;

export default StyledInput;
