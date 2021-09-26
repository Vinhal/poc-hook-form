import { UseFieldProps, UseFieldReturn } from './types'
import useField from './useField'

type ComponentProps<T> = Omit<T, keyof UseFieldReturn>
type WithFieldProps<T> = UseFieldProps & ComponentProps<T>

function withField<T extends object>(Component: React.ComponentType<T>) {
  return function (props: WithFieldProps<T>) {
    const fieldValues = useField(props)

    const allProps = {
      ...fieldValues,
      ...props,
    } as T

    return <Component {...allProps} />
  }
}

export default withField
