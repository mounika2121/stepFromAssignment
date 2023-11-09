import './index.css'

const StepTwo = () => (
  <div className="top-step-2-container">
    <h2>Select Your Plan</h2>
    <p className="text-secondary">
      You have the option of monthly and yearly billing.
    </p>
    <div className="plan-bg-container">
      <div className="plan-cards">
        <div>
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1699534765/Arcade_ijm7u0.jpg"
            alt="arcade"
          />
        </div>
        <div className="card-name">
          <h6>Arcade</h6>
          <p>$90/yr</p>
          <p className="free">2 months free</p>
        </div>
      </div>
      <div className="plan-cards">
        <div>
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1699536176/Advanced_tpd1tg.jpg"
            alt="advanced"
          />
        </div>
        <div className="card-name">
          <h6>Advanced</h6>
          <p>$120/yr</p>
          <p className="free">2 months free</p>
        </div>
      </div>
      <div className="plan-cards">
        <div>
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1699536389/pro_aepltv.jpg"
            alt="pro"
          />
        </div>
        <div className="card-name">
          <h6>Pro</h6>
          <p>$150/yr</p>
          <p className="free">2 months free</p>
        </div>
      </div>
    </div>
    <div className="switch-container">
      <p className="monthly">Monthly</p>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
        />
      </div>
      <p className="yearly">Yearly</p>
    </div>
    <div className="buttons-container">
      <div>
        <button type="button" className="btn btn-white">
          Go Back
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-primary">
          Next Step
        </button>
      </div>
    </div>
  </div>
)

export default StepTwo
