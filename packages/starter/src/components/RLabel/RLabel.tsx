import type { RLabelProps } from './types'

export default function RLabel({ children, ...rest }: RLabelProps) {
  return <label {...rest}>{children}</label>
}
