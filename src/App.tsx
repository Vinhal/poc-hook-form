import React from 'react'
import * as yup from 'yup'
import Form from './Form'
import useForm from './Form/useForm'
import Input, { Input as BaseInput } from './Input'

type FieldValues = {
  name: string
  age: string
}

const validation = {
  name: yup.string().min(3).required(),
  age: yup.string().min(4).required(),
}

const defaultValues = {
  name: '',
  age: '',
}

function App() {
  const {
    form,
    formState: { errors, ...formState },
  } = useForm<FieldValues>({ validation, defaultValues })

  console.log('out', { errors, formState })

  const onSubmit = (values: FieldValues) => {
    console.log('call', values)
  }

  return (
    <div className="App">
      <Form formContext={form} onSubmit={onSubmit}>
        <Input name="name" />
        <Input name="age" />
        <BaseInput name="age" />
        <button type="submit">SUBMIT</button>
      </Form>
    </div>
  )
}

export default App
