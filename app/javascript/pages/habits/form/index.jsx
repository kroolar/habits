import React, { useEffect, useState } from 'react'
import { Dialog } from '../../../components'
import Input from '../../../components/input'
import { apiPatch, apiPost } from '../../../utilities/apiClient'
import Toast from '../../../components/toast'
import ColorPicker from '../../../components/colorPicker'
import IconPicker from '../../../components/iconPicker.jsx'
import ToggleButton from '../../../components/toggleButton/index.jsx'
import Textarea from '../../../components/textarea/index.jsx'

const Form = ({
  onClose,
  onSuccess,
  isOpen,
  habit
}) => {
  const isNew = !habit?.id

  const [name, setName] = useState()
  const [icon, setIcon] = useState()
  const [description, setDescription] = useState()
  const [color, setColor] = useState()
  const [type, setType] = useState()
  const [toast, setToast] = useState()

  const [errors, setErrors] = useState({})

  useEffect(() => {
    setName(habit?.name || '')
    setIcon(habit?.icon || 'dashboard')
    setDescription(habit?.description || '')
    setColor(habit?.color || '#0369a1')
    setType(habit?.kind || 'good')
  }, [habit])

  const update = () => {
    apiPatch(`habits/${habit.id}`, { habit: { name, icon, description, color, kind: type }})
      .then(e => {
        if (e.errors) setErrors(e.errors)
        else {
          onClose()
          setToast(`Habit has been updated successfully`)
          onSuccess()
        }
      })
  }

  const create = () => {
    apiPost('habits', { habit: { name, icon, description, color, kind: type }})
      .then(e => {
        if (e.errors) setErrors(e.errors)
        else {
          onClose()
          setToast(`Habit has been created successfully`)
          onSuccess()
        }
      })
  } 

  return (
    <>
      <Toast
        type="success"
        text={toast}
        onClose={setToast}
      />

      <Dialog
        onClose={() => onClose(false)}
        onSuccess={isNew ? create : update}
        open={isOpen}
        discardText="Discard"
        successText={isNew ? 'Create' : 'Update'}
        title={isNew ? 'Create Habit' : 'Update Habit'}
      >
      
        <Input
          className="w-full"
          onChange={e => setName(e.target.value)}
          value={name}
          label="Name"
          error={errors?.name}
        />

        <div className="flex mb-4 items-start">
          <ColorPicker
            className="mt-4 mr-4"
            value={color}
            onChange={setColor}
          />

          <IconPicker
            className="mt-4"
            value={icon}
            onChange={setIcon}
          />
        </div>

        <ToggleButton
          className="mb-6"
          value={type}
          onChange={setType}
        />

        <Textarea
          className="w-full"
          onChange={e => setDescription(e.target.value)}
          value={description}
          label="Description"
          rows={4}
        />
      </Dialog>
    </>
  )
}

export default Form
