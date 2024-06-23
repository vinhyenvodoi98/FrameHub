'use client'
import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-base-100'>
      <div className='flex items-center justify-between px-6 h-20'>
        <div className="navbar">
          <div className="navbar-start text-white font-bold">
            <Link href='/'>
              Home
            </Link>
          </div>
          <div className="navbar-end flex gap-4">
            <ConnectAccount />
          </div>
        </div>
      </div>
    </div>
  );
}