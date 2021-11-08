import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header_name">
          Company name
        </div>
        <div className="header_menu">
          <div className="header_submenu">
            Features
          </div>
          <div className="header_submenu">
            Enterprise
          </div>
          <div className="header_submenu">
            Support
          </div>
          <div className="header_submenu">
            Pricing
          </div>
          <button className="header_button">
            Sign up
          </button>
        </div>
      </div>
      <div className="center">
        <div className="center_top">
          <div className="center_pricing">
            Pricing
          </div>
          <div className="center_text">
            <p>
              Quickly build an effective pricing table for your potential customers with this
              <br/>
              Bootstrap example. It's built with default Bootstrap components and utilities with
              <br/>
              little customization.
            </p>
          </div>
        </div>
        <div className="center_bottom">
          <div className="card">
            <div className="card_top">
              Free
            </div>
            <div className="card_bottom">
              <div className="card_bottom_price">
                <div className="card_bottom_dollar">
                  $0
                </div>
                <div className="card_bottom_month">
                  / mo
                </div>
              </div>
              <ul>
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button>
                Sign up for free
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card_top">
              Pro
            </div>
            <div className="card_bottom">

            </div>
          </div>
          <div className="card">
            <div className="card_top">
              Enterprise
            </div>
            <div className="card_bottom">

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
