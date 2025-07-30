'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  code: string
  language?: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#333]">
      <div className="flex justify-between items-center px-4 py-2 border-b border-[#333]">
        <span className="text-white font-medium text-sm">Custom API Integration</span>
        <button
          className="text-xs text-gray-300 hover:text-white transition-colors"
          onClick={handleCopy}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        customStyle={{
          padding: '1rem',
          background: '#1a1a1a',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
        codeTagProps={{ style: { fontFamily: 'Menlo, monospace' } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock