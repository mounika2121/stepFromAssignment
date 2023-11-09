import {useState} from 'react'
import './index.css'

const StepOne = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phoneNumber, setPhoneNumber] = useState()

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const onChangePhoneNumber = e => {
    setPhoneNumber(e.target.value)
  }

  return (
    <div className="top-step-1-container">
      <div>
        <h2>Personal Info</h2>
        <p className="text-secondary">
          Please provide your name, email address, and phone number.
        </p>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="username-input-field"
            value={name}
            onChange={onChangeName}
            placeholder="e.g. Mounika Ch"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            Email Address
          </label>
          <input
            type="email"
            id="name"
            className="username-input-field"
            value={email}
            onChange={onChangeEmail}
            placeholder="e.g. mounika@gmail.com"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            Phone Number
          </label>
          <input
            type="number"
            id="name"
            className="username-input-field"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            placeholder="e.g. 9642996302"
          />
        </div>
      </div>
      <div className="next-button">
        <button type="button" className="btn btn-primary">
          Next Step
        </button>
      </div>
    </div>
  )
}

export default StepOne
