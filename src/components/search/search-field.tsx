import * as React from 'react'
import { connect } from 'react-redux'

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchField(props: SearchFieldProps) {
  return <p>Stupid text</p>
}
