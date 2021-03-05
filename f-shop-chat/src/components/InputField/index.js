import React, {useState} from 'react';
import './style.css';
const InputField = ({register, name, label, type, errors, valid, icon, isTaken}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentText, setCurrentText] = useState('');
  return (
    <div className={isFocused ? 'input-container focus' : 'input-container'}>
      <div className="input-icon">{icon}</div>
      <div className="input-field">
        <h5>{label}</h5>
        <input
          ref={valid || register({required: `${label} is required`})}
          type={type}
          name={name}
          className="input"
          onChange={(e) => setCurrentText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            !currentText && setIsFocused(false);
          }}
        />
        {errors[name] && <span>{errors[name].message}</span>}
      </div>
    </div>
  );
};

export default InputField;