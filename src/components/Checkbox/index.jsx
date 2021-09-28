import React from 'react'

export const Checkbox = ({ label, onSelection, isChecked }) => {

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={() => onSelection()}
        />
      </label>
    </div>
  )
}