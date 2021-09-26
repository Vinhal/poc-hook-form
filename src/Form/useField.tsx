import { useController, useFormContext } from 'react-hook-form'
import { UseFieldProps, UseFieldReturn } from './types'

/**
 * Custom hook para utilização de campo do react-hook-form
 * -- Necessário haver um componente de Form acima na arvore de componentes
 */

function useField({ name, ...other }: UseFieldProps): UseFieldReturn {
  const { control } = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    ...other,
  })

  return { ...field, error }
}

export default useField
