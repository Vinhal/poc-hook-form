import { FieldValues, useForm as useFormHook } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UseFormProps, UseFormReturn } from './types'

/**
 * Custom hook para utilização do form react-hook-form
 */

function useForm<TFieldValues extends FieldValues = FieldValues, TContext extends object = object>({
  validation,
  defaultValues,
  ...config
}: UseFormProps<TFieldValues, TContext>): UseFormReturn<TFieldValues, TContext> {
  const formContext = useFormHook<TFieldValues, TContext>({
    resolver: validation && yupResolver(yup.object().shape(validation)),
    defaultValues,
    ...config,
  })

  return { ...formContext, form: formContext }
}

export default useForm
