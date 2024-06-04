import type { RButtonProps } from './types'

export default function RButton({
  children,
  ...rest
}: RButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className="select-none rounded-lg bg-gray-900 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
