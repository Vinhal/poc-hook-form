import React from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

interface Props {
  children: React.ReactNode
  formContext: UseFormReturn<any, any>
  onSubmit: (values: any) => void
}

function Form({ onSubmit, formContext, children }: Props) {
  const { handleSubmit } = formContext
  return (
    <FormProvider {...formContext}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
