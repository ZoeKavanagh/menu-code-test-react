import React, { useState } from 'react'

export const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <div className="checkbox">
      <label>
        <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
        />
      </label>
    </div>
  )
}