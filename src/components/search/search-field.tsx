import * as React from 'react'
import { connect } from 'react-redux'

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchField(props: SearchFieldProps) {
  return (
    <input
      className="form-control"
      type="search"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  )
}
