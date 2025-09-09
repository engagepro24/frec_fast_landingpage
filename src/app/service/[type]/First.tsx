'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface FirstProps {
  type: string
}

const First: React.FC<FirstProps> = ({ type }) => {
  const [active, setActive] = useState('')

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#second' },
    { label: type, href: `/service/${type}` },
  ]

  // Update active based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setActive(hash)
    } else {
      setActive(type) // fallback to type
    }
  }, [type])

  return (
    <div className="bg-[#411B66] p-6 max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 px-5 md:px-16">
        <h5 className="text-white text-xl md:text-4xl">Services</h5>

        <div className="flex items-center space-x-2">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link href={item.href}>
                <p
                  className={`cursor-pointer transition ${
                    active === item.label ? 'text-[#AF60FF]' : 'text-white'
                  }`}
                  onClick={() => setActive(item.label)}
                >
                  {item.label}
                </p>
              </Link>

              {index < breadcrumbs.length - 1 && <ArrowRight className="text-white" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default First
