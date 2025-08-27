import Image from 'next/image'
import React from 'react'
import support_img from '../../../public/assets/support_img.png'

const Support = () => {
  return (
    <div className="w-full min-h-screen bg-[#1A2E5C] text-white overflow-x-hidden">
<div className="w-screen leading-none">
  <Image
    src={support_img}
    alt="Support Header"
    priority
    className="block w-full h-auto sm:h-[380px] md:h-[520px] lg:h-[650px] object-contain sm:object-cover sm:object-center"
    sizes="100vw"
  />
</div>

      <div className="flex flex-col items-center text-center px-6 py-12">
        <h2 className="md:text-[64px] text-[40px] font-bold mb-4 font-dm px-4">Need Help? We’ve Got You.</h2>
        <p className="md:text-[35px] text-[16px] w-[90%] md:w-[60%] font-urbanist px-4 font-medium [overflow-wrap:anywhere]">
          We’re here to make sure your MVP.ai experience is smooth, fun, and glitch-free.
          If you run into any issues, our team is ready to help.
        </p>
        <hr className="w-[80%] border-t border-[#FFFFFF] mx-auto mt-[50px] rounded-full" />
      </div>

      <div className="flex flex-col items-center px-6 py-12">
        <h2 className="md:text-[64px] text-[40px] text-center font-bold mb-4 font-dm px-4">How to Contact Support</h2>
        <p className="md:text-[35px] text-[16px] w-[90%] md:w-[60%] font-urbanist px-4 font-medium mb-[12px] [overflow-wrap:anywhere]">
          Please email us at mvp.ai.customersupport@youraimvp.com.
        </p>
        <p className="md:text-[35px] text-[16px] w-[90%] md:w-[60%] font-urbanist px-4 font-medium mb-8">
          When sending your email, please include:
        </p>

        <div className="bg-[rgba(230,230,230,0.4)] border-8 border-[#000000] rounded-[18px] p-7 w-[92%] md:max-w-4xl shadow-md">
          <ul className="space-y-4 text-[24px] font-urbanist text-[#161616] font-extrabold py-5">
            <li>Subject line: [Support] Short description of your issue</li>
            <li>Your device: (Example: iPhone 14, iOS 18.1)</li>
            <li>App version: (Found in your Account &gt; Settings &gt; About)</li>
            <li>Description of the issue: Tell us exactly what happened</li>
            <li>Steps to reproduce: If you can repeat the issue, let us know how</li>
            <li>Screenshots: Optional, but very helpful</li>
          </ul>
        </div>

        <hr className="w-[80%] border-t border-[#FFFFFF] mx-auto mt-[80px] rounded-full" />
      </div>

      <div className="flex flex-col items-center text-center px-4 py-12">
        <h2 className="md:text-[48px] text-[40px] font-bold mb-12 font-dm">What Happens Next</h2>

        <div className="flex flex-col md:flex-row justify-center md:gap-2 gap-4 text-[22px] font-urbanist">
          <div className="flex flex-col items-center">
            <p className="text-[64px] font-semibold md:mb-4 mb-8">1</p>
            <p className="text-[35px] w-[85%] sm:w-[65%] md:w-[60%] font-semibold">
              You’ll get a confirmation that we’ve received your request
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[64px] mb-4">2</p>
            <p className="text-[35px] w-[85%] sm:w-[65%] md:w-[60%] font-semibold">
              Our team will review and reply within 24–48 hours
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[64px] font-semibold mb-4">3</p>
            <p className="text-[35px] w-[85%] sm:w-[65%] md:w-[60%] font-semibold">
              If we need more info, we’ll follow up with clear next steps
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center px-6 py-12">
        <h2 className="md:text-[48px] text-[40px] font-semibold mb-6 font-dm">For Common Questions</h2>
        <p className="md:text-[22px] text-[16px] font-urbanist w-[90%] md:w-[40%] font-semibold mb-6">
          Check our <span className="border-b-1 border-white">FAQ</span> or consult with Kai, your website companion — you might find the answer instantly.
        </p>
      </div>
    </div>
  )
}

export default Support
