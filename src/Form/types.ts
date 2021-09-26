import {
  FieldErrors,
  FieldValues,
  DefaultValues,
  FieldPathValues,
  UseControllerProps,
  ControllerRenderProps,
  UseFormProps as BaseUseFormProps,
  UseFormReturn as BaseUseFormReturn,
} from 'react-hook-form'

export type UseFieldProps = { name: string } & UseControllerProps

export type UseFieldReturn = {
  error?: FieldErrors<FieldPathValues<any, any>>
} & ControllerRenderProps


export type FieldProps = {
  value?: any
  name?: string
  onBlur?: () => void
  ref?: (instance: any) => void
  onChange?: (ev: React.ChangeEvent<any>) => void
  error?: boolean | FieldErrors<FieldPathValues<any, any>>
}

export type UseFormProps<TFieldValues extends FieldValues, TContext extends object> = {
  validation?: {}
  defaultValues: DefaultValues<TFieldValues>
} & BaseUseFormProps<TFieldValues, TContext>

export type UseFormReturn<TFieldValues extends FieldValues, TContext extends object> = {
  form: BaseUseFormReturn<TFieldValues, TContext>
} & BaseUseFormReturn<TFieldValues, TContext>
