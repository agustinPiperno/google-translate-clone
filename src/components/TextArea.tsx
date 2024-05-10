import { Form } from "react-bootstrap"
import { SectionType } from "../types.d"
import React from "react"

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

const commonStyles = { border: 0, height: '200px', resize: 'none' }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if(type === SectionType.From) return 'Introduce text'
  if(loading === true) return 'Loading...'
  return 'Translation'
}

export const TextArea = ({type, loading, value, onChange }: Props) => {  
  const styles = type === SectionType.From
  ? { ...commonStyles, opacity: 0.6 }
  : commonStyles

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      autoFocus={type === SectionType.From}
      as='textarea'
      placeholder={getPlaceholder({ type, loading})}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}