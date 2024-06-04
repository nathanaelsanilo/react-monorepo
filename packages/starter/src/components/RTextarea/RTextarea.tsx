import type { RTextareaProps } from './types'
import RLabel from '../RLabel/RLabel'

export default function RTextarea({ id, label = '', ...rest }: RTextareaProps) {
  return (
    <div>
      <RLabel htmlFor={id} className="block text-lg">
        {label}
      </RLabel>
      <textarea
        id={id}
        className="form-textarea mt-2 rounded-lg text-gray-700"
        {...rest}
      />
    </div>
  )
}
