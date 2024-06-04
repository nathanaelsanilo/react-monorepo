import { forwardRef } from 'react'
import type { RTextFieldProps } from './types'

const RTextField = forwardRef<HTMLInputElement, RTextFieldProps>(
  ({ label = '', id, ...rest }, ref) => {
    return (
      <div>
        <label htmlFor={id} className="block text-lg">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className="form-input mt-2 rounded-lg text-gray-700"
          {...rest}
        />
      </div>
    )
  }
)

RTextField.displayName = 'RTextField'

export default RTextField
