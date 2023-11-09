import StepTwo from '../StepTwo'
// import StepOne from '../StepOne'
import './index.css'

const Home = () => (
  <div className="bg-container">
    <div className="progress-step">
      <div className="step-container mb-3">
        <div className="number">1</div>
        <div className="step-small-container">
          <h6 className="step-head">STEP 1</h6>
          <h6 className="step">YOUR INFO</h6>
        </div>
      </div>
      <div className="step-container mb-3">
        <div className="number">2</div>
        <div className="step-small-container">
          <h6 className="step-head">STEP 2</h6>
          <h6 className="step">SELECT PLAN</h6>
        </div>
      </div>
      <div className="step-container mb-3">
        <div className="number">3</div>
        <div className="step-small-container">
          <h6 className="step-head">STEP 3</h6>
          <h6 className="step">ADD-ONS</h6>
        </div>
      </div>
      <div className="step-container mb-3">
        <div className="number">4</div>
        <div className="step-small-container">
          <h6 className="step-head">STEP 4</h6>
          <h6 className="step">SUMMARY</h6>
        </div>
      </div>
    </div>
    <div className="mobile-bg-image">
      <div>
        <div className="number">1</div>
      </div>
      <div>
        <div className="number">2</div>
      </div>
      <div>
        <div className="number">3</div>
      </div>
      <div>
        <div className="number">4</div>
      </div>
    </div>
    <div>
      {/* <StepOne /> */}
      <StepTwo />
    </div>
  </div>
)

export default Home
