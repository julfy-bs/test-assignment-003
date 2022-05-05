import FormFields from '@/models/FormFields'
export type Key = keyof FormFields
export type Value = FormFields[Key]
export default interface FormPayload<Key extends keyof FormFields,
  Value extends FormFields[Key]> {
  key: Key,
  value: Value
}
