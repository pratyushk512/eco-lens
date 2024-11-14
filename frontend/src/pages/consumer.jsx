import { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar5 from '@/components/Navbar5'
export default function Consumer() {
  const [progress, setProgress] = useState(0)
  const [level, setLevel] = useState(0)
  const [couponCode, setCouponCode] = useState('')

  const handleCouponSubmit = () => {
    
    console.log('Coupon submitted:', couponCode)
    
    setProgress(prev => Math.min(prev + 25, 100))
    if (progress + 10 >= 100) {
      setLevel(prev => prev + 1)
      setProgress(0)
    }
  }

  return (<> 
  <Navbar5/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Level Progress</h2>
      <div className="mb-4">
        <Progress value={progress} className="w-full" />
      </div>
      <p className="text-center mb-6 text-lg font-semibold">
        Current Level: {level}
      </p>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Enter coupon code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="w-full"
        />
        <Button 
          onClick={handleCouponSubmit} 
          className="w-full"
        >
          Claim Coupon
        </Button>
      </div>
    </div>
    </>
  )
}