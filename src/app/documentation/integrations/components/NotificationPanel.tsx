import React from 'react'

interface NotificationPanelProps {
  message: string
  accentColor?: string
  backgroundColor?: string
  textColor?: string
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  message,
  accentColor = '#4997b3',
  backgroundColor = '#343131',
  textColor = 'text-gray-200',
}) => {
  return (
    <div
      className="w-full relative !rounded-xl overflow-hidden shadow-lg"
      style={{ backgroundColor }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: accentColor }}
      ></div>
      <div className="p-4">
        {message.split('\n').map((line, index) => (
          <p key={index} className={`sm:text-base text-sm ${textColor}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
