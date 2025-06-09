
import React from 'react';

const SignupSection = () => {
  return (
    <section className="bg-brand-yellow py-20">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto">
          <div id="mlb2-26946439" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26946439">
            <div className="ml-form-align-center">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                  <div className="ml-form-embedContent">
                    <h4 className="text-black mb-6">Stay Updated</h4>
                    <p className="text-lg text-black/80 mb-10">
                      Subscribe to our newsletter for application dates, events, and startup resources.
                    </p>
                  </div>

                  <form 
                    className="ml-block-form" 
                    action="https://assets.mailerlite.com/jsonp/1310147/forms/156545062429263666/subscribe" 
                    data-code="" 
                    method="post" 
                    target="_blank"
                  >
                    <div className="ml-form-formContent horozintalForm">
                      <div className="ml-form-horizontalRow">
                        <div className="ml-input-horizontal">
                          <div style={{ width: '100%' }} className="horizontal-fields">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                              <input 
                                type="email" 
                                className="form-control bg-white border-transparent focus:border-black/20 h-12 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg w-full" 
                                data-inputmask="" 
                                name="fields[email]" 
                                placeholder="Your email address" 
                                autoComplete="email"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="ml-button-horizontal primary">
                          <button 
                            type="submit" 
                            className="bg-black text-white hover:bg-black/80 h-12 px-8 rounded-lg font-medium transition-colors whitespace-nowrap"
                          >
                            Subscribe
                          </button>
                          <button 
                            disabled 
                            style={{ display: 'none' }} 
                            type="button" 
                            className="loading bg-black text-white h-12 px-8 rounded-lg font-medium"
                          >
                            <div className="ml-form-embedSubmitLoad"></div>
                            <span className="sr-only">Loading...</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="ml-form-embedPermissions">
                      <div className="ml-form-embedPermissionsContent horizontal privacy-policy">
                        <p className="text-sm text-black/60 mt-3">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />

                    <div className="ml-mobileButton-horizontal">
                      <button 
                        type="submit" 
                        className="bg-black text-white hover:bg-black/80 h-12 px-8 rounded-lg font-medium transition-colors w-full"
                      >
                        Subscribe
                      </button>
                      <button 
                        disabled 
                        style={{ display: 'none' }} 
                        type="button" 
                        className="loading bg-black text-white h-12 px-8 rounded-lg font-medium w-full"
                      >
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                  <div className="ml-form-successContent">
                    <h4 className="text-black mb-4">Thank you!</h4>
                    <p className="text-black/80">You have successfully joined our mailing list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .ml-form-embedSubmitLoad {
          display: inline-block;
          width: 20px;
          height: 20px;
        }
        
        .ml-form-embedSubmitLoad:after {
          content: " ";
          display: block;
          width: 11px;
          height: 11px;
          margin: 1px;
          border-radius: 50%;
          border: 4px solid #fff;
          border-color: #ffffff #ffffff #ffffff transparent;
          animation: ml-form-embedSubmitLoad 1.2s linear infinite;
        }
        
        @keyframes ml-form-embedSubmitLoad {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0,0,0,0);
          border: 0;
        }
        
        .ml-form-formContent.horozintalForm .ml-form-horizontalRow {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .ml-input-horizontal {
          flex: 1;
        }
        
        .ml-button-horizontal {
          width: 100%;
        }
        
        .ml-mobileButton-horizontal {
          display: none;
          margin-top: 16px;
        }
        
        @media (min-width: 640px) {
          .ml-form-formContent.horozintalForm .ml-form-horizontalRow {
            flex-direction: row;
            align-items: end;
          }
          
          .ml-button-horizontal {
            width: auto;
            margin-left: 12px;
          }
        }
        
        @media (max-width: 640px) {
          .ml-button-horizontal {
            display: none;
          }
          
          .ml-mobileButton-horizontal {
            display: block;
          }
        }
        `}
      </style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            function ml_webform_success_26946439() {
              var successElement = document.querySelector('.ml-subscribe-form-26946439 .row-success');
              var formElement = document.querySelector('.ml-subscribe-form-26946439 .row-form');
              if (successElement) successElement.style.display = 'block';
              if (formElement) formElement.style.display = 'none';
            }
          `
        }}
      />
    </section>
  );
};

export default SignupSection;
