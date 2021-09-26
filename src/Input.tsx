import React, { ForwardedRef } from 'react'
import { TextField } from '@material-ui/core'
import withField from './Form/withField'
import { FieldProps } from './Form/types'

type Props = {
  name: string
  xablau?: string
  onValueChange?: (value: string) => void
} & FieldProps

const Input = React.forwardRef(
  ({ name, onValueChange, error, ...props }: Props, ref: ForwardedRef<any>) => {

    console.log(name, { error})

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
      if (onValueChange) onValueChange(ev.target.value)
      if (props.onChange) props.onChange(ev)
    }

    return (
      <TextField
        {...props}
        inputRef={ref}
        placeholder={name}
        error={Boolean(error)}
        onChange={handleChange}
      />
    )
  }
)

export { Input }
export default withField<Props>(React.memo(Input))
