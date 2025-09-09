'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const First = () => {
  const pathname = usePathname(); // current path

  const breadcrumbs = [
    { label: 'Home', href: '/home' },
    { label: 'Contact us', href: '/contact' },
  ];

  return (
    <div className="bg-[#411B66] p-6 max-w-6xl mx-auto">
      <div className="flex flex-col space-y-4 px-5 md:px-16">
        {/* Title */}
        <h5 className="text-white text-xl md:text-4xl">Contact us</h5>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.label}>
              <Link href={item.href}>
                <p
                  className={`cursor-pointer transition ${
                    pathname === item.href ? 'text-[#AF60FF]' : 'text-white'
                  }`}
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
  );
};

export default First;
