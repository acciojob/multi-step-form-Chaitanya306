import React from 'react'

function Step(props) {
  const {step,handlePrev,handlenext}=props  
  const sendComponent = () => {
    if (step === 1) {
      return(<div>
        <label htmlFor='first_name'>FirstName:</label><br />
        <input type='text'  id="first_name"/><br />
        <label htmlFor='last_name'>FirstName:</label><br />
        <input type='text'  id="last_name"/><br />
      </div>)
    } else if (step === 2) {
      return(<div>
        <label htmlFor="model">Model:</label><br />
        <input type='text'  id="model"/><br />
        <label htmlFor='car_price'>Price:</label><br />
        <input type='number'  id="car_price"/><br />
      </div>)
    } else if (step === 3) {
      return(<div>
        <label htmlFor="card_info">Card Number:</label><br />
        <input type='number'  id="card_info" /><br />
        <label htmlFor='expiry_date'>expiry_date:</label><br />
        <input type='date'  id="expiry_date"/><br />
      </div>)
    }
  }
  
  return (
    <div>
      <form>
        <div>
          {sendComponent()}
        </div>
        <div id='buttons'>
          <div style={{ display: step === 1 ? 'none' : 'block' }}>
            <button
              id='prev'
              type='button'
              
              onClick={() => handlePrev()}
            >
              Previous
            </button>
          </div>
          <div>
            <button
              id='next'
              type='button'
              onClick={() => handlenext()}
            >
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </form>
        
    </div>
  )
}

export default Step
