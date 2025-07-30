'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'

const serverURL = "https://fgu49lo9x9.execute-api.us-east-1.amazonaws.com/prod/website-prospect"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate required fields
    const requiredFields = ["fullName", "email", "subject"]
    if (requiredFields.some((field) => !formData[field].trim())) {
      toast.error("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    try {
      // Format data to match API requirements
      const variables = {
        full_name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        from: "CONTACT_US",
        ...(formData.message && { message: formData.message })
      }

      const response = await axios.post(serverURL, variables, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.data.errors) {
        toast.error(`Error: ${response.data.errors[0]?.message || 'Something went wrong'}`)
      } else {
        toast.success("Thanks for contacting us!")
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  return (
    <div className="w-full max-w-[640px] p-8 bg-[#161314] rounded-[10px] shadow-[0px_1px_0px_0px_rgba(214,207,194,0.05)_inset]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="fullName" className="text-white text-sm font-medium">
            Full Name *
          </label>
          <div className="relative">
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full h-12 px-4 bg-[#231F20] rounded-lg text-white border border-[#37322F] focus:border-[#F26A1B] focus:outline-none transition-colors disabled:opacity-50"
              placeholder="John Doe"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-white text-sm font-medium">
            Email Address *
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full h-12 px-4 bg-[#231F20] rounded-lg text-white border border-[#37322F] focus:border-[#F26A1B] focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Work email address"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#37322F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#37322F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Subject Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-white text-sm font-medium">
            Subject *
          </label>
          <div className="relative">
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full h-12 px-4 bg-[#231F20] rounded-lg text-white border border-[#37322F] focus:border-[#F26A1B] focus:outline-none transition-colors disabled:opacity-50"
              placeholder="Please write subject"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 17L12 22L21 17" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12L12 17L21 12" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white text-sm font-medium">
            Message (Optional)
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full h-32 p-4 bg-[#231F20] rounded-lg text-white border border-[#37322F] focus:border-[#F26A1B] focus:outline-none transition-colors resize-none disabled:opacity-50"
              placeholder="Your message here..."
            />
            <div className="absolute right-4 top-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 16H13" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 3H7C4 3 2 4.5 2 8V16C2 19.5 4 21 7 21H17C20 21 22 19.5 22 16V8C22 4.5 20 3 17 3Z" stroke="#37322F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 bg-[#F26A1B] rounded-lg text-white font-medium hover:bg-[#F58849] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
          {!isSubmitting && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          )}
        </button>
      </form>
    </div>
  )
}
