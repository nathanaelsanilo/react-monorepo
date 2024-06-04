import type { RFieldsetProps } from './types'

export default function RFieldset({ legend = '', children }: RFieldsetProps) {
  return (
    <fieldset className="">
      <legend className="text-3xl text-gray-900">{legend}</legend>
      <div className="py-4">{children}</div>
    </fieldset>
  )
}
