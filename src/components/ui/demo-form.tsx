'use client'

import React, { useState, useEffect } from 'react'

interface FormData {
  fullName: string
  designation: string
  company: string
  email: string
  selectedDate: string
  selectedTime: string
  message: string
}

interface FormErrors {
  fullName?: string
  designation?: string
  company?: string
  email?: string
  selectedDate?: string
  selectedTime?: string
  message?: string
}

const WORKING_HOURS = {
  start: 9, // 9 AM
  end: 17,  // 5 PM
}

// Generate available time slots
const generateTimeSlots = () => {
  const slots = []
  for (let hour = WORKING_HOURS.start; hour < WORKING_HOURS.end; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`)
    slots.push(`${hour.toString().padStart(2, '0')}:30`)
  }
  return slots
}

const TIME_SLOTS = generateTimeSlots()

const DemoForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    designation: '',
    company: '',
    email: '',
    selectedDate: '',
    selectedTime: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getMinDate = () => {
    const now = new Date()
    return now.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required'
        if (value.length < 2) return 'Full name must be at least 2 characters'
        return ''
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email'
        return ''
      case 'company':
        if (!value.trim()) return 'Company name is required'
        return ''
      case 'selectedDate':
        if (!value) return 'Please select a date'
        const selectedDate = new Date(value)
        if (selectedDate < new Date(getMinDate())) return 'Please select a future date'
        return ''
      case 'selectedTime':
        if (!value) return 'Please select a time'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }))
  }

  const validateForm = (): boolean => {
    const requiredFields = ['fullName', 'email', 'company', 'selectedDate', 'selectedTime']
    const newErrors: FormErrors = {}
    let isValid = true

    Object.keys(formData).forEach(key => {
      if (requiredFields.includes(key)) {
        const error = validateField(key, formData[key as keyof FormData])
        if (error) {
          newErrors[key as keyof FormErrors] = error
          isValid = false
        }
      }
    })

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const touchedFields = {
      fullName: true,
      email: true,
      company: true,
      selectedDate: true,
      selectedTime: true
    }
    setTouched(prev => ({ ...prev, ...touchedFields }))

    if (!validateForm()) {
      setIsSubmitting(false)
      return
    }

    try {
      // Combine date and time for submission
      const dateTime = new Date(`${formData.selectedDate}T${formData.selectedTime}:00`)
      console.log('Form submitted:', {
        ...formData,
        dateTime: dateTime.toISOString()
      })
      
      setFormData({
        fullName: '',
        designation: '',
        company: '',
        email: '',
        selectedDate: '',
        selectedTime: '',
        message: ''
      })
      setTouched({})
      setErrors({})
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClassName = (fieldName: keyof FormData) => {
    const baseClasses = "h-12 px-4 bg-[rgba(255,255,255,0.1)] text-white rounded-[6px] placeholder:text-[#ffffff80] outline-none border-0 focus:ring-1 w-full"
    
    if (!touched[fieldName]) {
      return `${baseClasses} focus:ring-[#F26A1B]`
    }
    
    return errors[fieldName]
      ? `${baseClasses} ring-1 ring-red-500 focus:ring-red-500`
      : `${baseClasses} ring-1 ring-green-500 focus:ring-green-500`
  }

  return (
    <div className="bg-[#171415]/40 rounded-2xl shadow-[0px_12px_25px_0px_rgba(0,0,0,0.12)] border border-white/10 backdrop-blur-2xl w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 sm:p-6 md:p-8">
        {/* Previous fields remain the same */}
        <div className="flex flex-col gap-2">
          <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={getInputClassName('fullName')}
          />
          {touched.fullName && errors.fullName && (
            <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
              Designation (Optional)
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Product Manager"
              className={getInputClassName('designation')}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Google"
              className={getInputClassName('company')}
            />
            {touched.company && errors.company && (
              <span className="text-red-500 text-sm mt-1">{errors.company}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Work email address"
            className={getInputClassName('email')}
          />
          {touched.email && errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* New Date & Time Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
              Select Date
            </label>
            <input
              type="date"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleChange}
              onBlur={handleBlur}
              min={getMinDate()}
              max={getMaxDate()}
              className={`${getInputClassName('selectedDate')} [color-scheme:dark]`}
            />
            {touched.selectedDate && errors.selectedDate && (
              <span className="text-red-500 text-sm mt-1">{errors.selectedDate}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
              Select Time (9 AM - 5 PM)
            </label>
            <select
              name="selectedTime"
              value={formData.selectedTime}
              onChange={handleChange}
              onBlur={handleBlur}
              className={getInputClassName('selectedTime')}
            >
              <option value="">Select a time</option>
              {TIME_SLOTS.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {touched.selectedTime && errors.selectedTime && (
              <span className="text-red-500 text-sm mt-1">{errors.selectedTime}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#DEDCDD] font-['Inter'] text-sm font-semibold">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Marketing Team"
            className="h-[120px] md:h-[136px] px-4 py-3 bg-[rgba(255,255,255,0.1)] text-white rounded-[6px] placeholder:text-[#ffffff80] outline-none resize-none border-0 focus:ring-1 focus:ring-[#F26A1B] w-full"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 h-12 bg-[#F26A1B] text-white rounded-[8px] text-base font-medium hover:bg-[#E25A0B] transition-colors w-full px-4 sm:px-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Booking...' : 'Book a Demo'}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </form>
    </div>
  )
}

export default DemoForm