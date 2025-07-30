'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { toast } from 'sonner'
import axios from 'axios'

const serverURL = "https://fgu49lo9x9.execute-api.us-east-1.amazonaws.com/prod/website-prospect"

// Custom logger that only logs in development
const logger = {
  log: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args)
    }
  },
  error: (...args: unknown[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args)
    }
  }
}

interface HubSpotFormOptions {
  region: string
  portalId: string
  formId: string
  target: string
  onFormReady?: () => void
  onFormSubmitted?: () => void
}

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: HubSpotFormOptions) => void
      }
    }
  }
}

export default function WaitlistForm() {
  const sendToBackend = async (formData: { name: string, email: string, company?: string }) => {
    try {
      const variables = {
        full_name: formData.name,
        email: formData.email,
        from: "WAITLIST",
        subject: "Waitlist Signup",
      }

      if (formData.company) {
        (variables as Record<string, unknown>).company = formData.company
      }

      logger.log('Sending to backend:', variables)

      await axios.post(serverURL, variables, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      logger.log('Successfully sent to backend for Slack notification')
    } catch (error) {
      logger.error('Failed to send to backend:', error)
    }
  }

  useEffect(() => {
    // Listen for HubSpot form submissions via postMessage
    const handleMessage = (event: MessageEvent) => {
      // Check if this is a HubSpot form submission
      if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
        logger.log('HubSpot form submitted via iframe!', event.data)
        
        // Extract form data from the submission
        const submissionData = event.data.data || {}
        
        // Try to extract values from different possible structures
        let name = ''
        let email = ''
        let company = ''
        
        // HubSpot typically sends data in a specific format
        if (submissionData.submissionValues) {
          // Look through submission values
          Object.keys(submissionData.submissionValues).forEach(key => {
            const value = submissionData.submissionValues[key]
            logger.log(`Field ${key}:`, value)
            
            if (key.includes('name') || key.includes('firstname') || key.includes('first_name')) {
              name = value
            } else if (key.includes('email')) {
              email = value
            } else if (key.includes('company')) {
              company = value
            }
          })
        }
        
        // Also check if data is in fields array
        if (submissionData.fields && Array.isArray(submissionData.fields)) {
          submissionData.fields.forEach((field: { name?: string; value?: string }) => {
            if (field.name && field.value) {
              logger.log(`Field ${field.name}:`, field.value)
              
              if (field.name.includes('name') || field.name.includes('firstname')) {
                name = field.value
              } else if (field.name.includes('email')) {
                email = field.value
              } else if (field.name.includes('company')) {
                company = field.value
              }
            }
          })
        }
        
        logger.log('Extracted data:', { name, email, company })
        
        // Send to backend if we have at least email
        if (email) {
          sendToBackend({ name, email, company })
        }
      }
    }

    window.addEventListener('message', handleMessage)
    
    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  const createHubSpotForm = () => {
    const formOptions: HubSpotFormOptions = {
      region: "na1",
      portalId: "47663546",
      formId: "60ee4991-0a67-4acf-9c4a-ab55a61c7d58",
      target: "#hubspot-form-container",
      onFormSubmitted: () => {
        toast.success('Thanks for joining our waitlist!', {
          duration: 5000,
          description: "We'll be in touch soon with next steps."
        })
      }
    }

    if (typeof window !== 'undefined' && window.hbspt) {
      window.hbspt.forms.create(formOptions)
    }
  }

  useEffect(() => {
    createHubSpotForm()
  }, [])

  return (
    <div className="bg-[#171415]/40 rounded-2xl shadow-[0px_12px_25px_0px_rgba(0,0,0,0.12)] border border-white/10 backdrop-blur-2xl w-full p-8">
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={createHubSpotForm}
      />
      <div id="hubspot-form-container" className="p-4"></div>

      <style jsx global>{`
        .hs-form {
          display: flex !important;
          flex-direction: column !important;
          gap: 16px !important;
          max-width: 100% !important;
        }

        .hs-form-field {
          display: flex !important;
          flex-direction: column !important;
          gap: 4px !important;
          margin-bottom: 0 !important;
          width: 100% !important;
        }

        .hs-form label {
          color: #F26A1B !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          margin-bottom: 2px !important;
        }

        .hs-form input[type="text"],
        .hs-form input[type="email"] {
          height: 42px !important;
          padding: 0 12px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          color: #DEDCDD !important;
          font-size: 15px !important;
          font-family: 'Inter', sans-serif !important;
          border: none !important;
          border-radius: 6px !important;
          outline: none !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .hs-form textarea {
          height: 100px !important;
          padding: 12px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          color: #DEDCDD !important;
          font-size: 15px !important;
          font-family: 'Inter', sans-serif !important;
          border: none !important;
          border-radius: 6px !important;
          resize: none !important;
          outline: none !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .hs-form input::placeholder,
        .hs-form textarea::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
          font-size: 15px !important;
        }

        .hs-form input:focus,
        .hs-form textarea:focus {
          outline: none !important;
          box-shadow: 0 0 0 1px #F26A1B !important;
        }

        .hs-form .hs-button {
          height: 42px !important;
          background: #F26A1B !important;
          color: white !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          font-family: 'Inter', sans-serif !important;
          border: none !important;
          border-radius: 6px !important;
          cursor: pointer !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          transition: background-color 0.2s !important;
          width: 100% !important;
          padding: 0 16px !important;
          margin-top: 4px !important;
          box-sizing: border-box !important;
        }

        .hs-form .hs-button:hover {
          background: #E25A0B !important;
        }

        .hs-form .hs-button:disabled {
          opacity: 0.5 !important;
          cursor: not-allowed !important;
        }

        .hs-form .hs-button::after {
          content: '' !important;
          width: 16px !important;
          height: 16px !important;
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 12h14M12 5l7 7-7 7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
        }

        .hs-error-msgs {
          margin: 2px 0 0 0 !important;
          padding: 0 !important;
          list-style: none !important;
        }

        .hs-error-msgs label {
          color: #ef4444 !important;
          font-size: 12px !important;
          font-weight: 400 !important;
        }

        /* Hide any extra HubSpot elements we don't want */
        .hs-richtext,
        .hs-form-required {
          display: none !important;
        }

        /* Force all form elements to respect container width */
        #hubspot-form-container {
          width: 100% !important;
          max-width: 100% !important;
        }

        #hubspot-form-container > * {
          max-width: 100% !important;
        }
      `}</style>
    </div>
  )
}