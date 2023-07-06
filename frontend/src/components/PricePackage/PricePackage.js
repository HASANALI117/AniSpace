import React from 'react'
import './style.css'

export default function NotFound() {
  return (
    <div className="wrapper">
  <input type="radio" name="slider" id="tab-1" />
  <input type="radio" name="slider" id="tab-2" defaultChecked="" />
  <input type="radio" name="slider" id="tab-3" />
  <header>
    <label htmlFor="tab-1" className="tab-1">
      Basic
    </label>
    <label htmlFor="tab-2" className="tab-2">
      Standard
    </label>
    <label htmlFor="tab-3" className="tab-3">
      Team
    </label>
    <div className="slider" />
  </header>
  <div className="card-area">
    <div className="cards">
      <div className="row row-1">
        <div className="price-details">
          <span className="price">19</span>
          <p>Basic monthly subscription:</p>
        </div>
        <ul className="features">
          <li>
            <i className="fas fa-check" />
            <span>10 Movies Per Day.</span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>Access to streaming on one device. </span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>
            Standard definition video quality.
            </span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>1 Email Account &amp; Databases</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="price-details">
          <span className="price">99</span>
          <p>Standard monthly subscription:</p>
        </div>
        <ul className="features">
          <li>
            <i className="fas fa-check" />
            <span>50 Movies Per Day.</span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>Access to streaming on 5 devices.</span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>
           HD video quality.
            </span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>10 Email Accounts &amp; Databases</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="price-details">
          <span className="price">49</span>
          <p>Premium monthly subscription:</p>
        </div>
        <ul className="features">
          <li>
            <i className="fas fa-check" />
            <span>Unlimited Movies</span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span> Access to streaming on infinate devices.</span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>
            HD and Ultra HD video quality.
            </span>
          </li>
          <li>
            <i className="fas fa-check" />
            <span>Unlimited Email Accounts &amp; Databases</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <button>Choose plan</button>
</div>

  )
}
