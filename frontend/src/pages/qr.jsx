'use client'

import React, { useState } from 'react'
import QRCode from 'qrcode'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { Loader2 } from 'lucide-react'

export default function QRCodeGenerator() {
  const [count, setCount] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [message, setMessage] = useState('')

  const generateUniqueRandomNumbers = (num) => {
    const generatedValues = new Set()
    while (generatedValues.size < num) {
      const randomValue = Math.floor(1000000 + Math.random() * 9000000)
      generatedValues.add(randomValue.toString())
    }
    return Array.from(generatedValues)
  }

  const generateQRCode = async (value) => {
    try {
      return await QRCode.toDataURL(value, {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: 256,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      })
    } catch (error) {
      console.error('Error generating QR code:', error)
      throw new Error('Failed to generate QR code')
    }
  }

  const handleGenerate = async () => {
    const num = parseInt(count, 10)
    if (isNaN(num) || num <= 0) {
      setMessage("Please enter a valid number greater than 0")
      return
    }

    setIsGenerating(true)
    setMessage('')
    const zip = new JSZip()

    try {
      const values = generateUniqueRandomNumbers(num)
      for (const value of values) {
        const qrCodeDataUrl = await generateQRCode(value)
        const qrCodeData = qrCodeDataUrl.split(',')[1]
        zip.file(`QRCode_${value}.png`, qrCodeData, { base64: true })
      }

      const content = await zip.generateAsync({ type: 'blob' })
      saveAs(content, 'QRCodes.zip')

      setMessage(`${num} QR codes have been generated and downloaded.`)
    } catch (error) {
      console.error('Error generating QR codes:', error)
      setMessage("An error occurred while generating QR codes. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">QR Code Generator</h2>
        <p className="text-gray-600 mb-4">Generate multiple QR codes and download as ZIP</p>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="count" className="block text-sm font-medium text-gray-700">Number of QR Codes</label>
            <input
              id="count"
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              placeholder="Enter number of QR codes"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <Loader2 className="inline-block mr-2 h-4 w-4 animate-spin" />
                Generating and Downloading...
              </>
            ) : (
              'Generate and Download QR Codes'
            )}
          </button>
          {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
        </div>
      </div>
    </div>
  )
}