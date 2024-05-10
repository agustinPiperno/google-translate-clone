import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants'
import { type Language, type FromLanguage, SectionType } from '../types.d'
import React from 'react'

type Props =
  | { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
  | { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector = ({ onChange, type, value }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  
  return (
    <Form.Select aria-label='Choose the language' onChange={handleChange} value={value}>
      {type === SectionType.From && <option value='auto'>Detect Language</option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option key={key} value={literal}>
          {literal}
        </option>
      ))}
    </Form.Select>
  )
}
