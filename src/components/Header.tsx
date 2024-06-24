'use client'
import { wagmiConfig } from '@/config/wagmi';
import { Address, Avatar, Badge, Identity, Name } from '@coinbase/onchainkit/identity';
import { ConnectAccount } from '@coinbase/onchainkit/wallet';
import Link from 'next/link';
import { useAccount } from 'wagmi';
import { disconnect } from 'wagmi/actions';

export default function Header() {
  const { address } = useAccount()

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
            <div className="flex">
              {
                address === undefined ?
                  <ConnectAccount /> :
                  <div className="flex bg-white rounded-lg items-center justify-center">
                    <button type="button" onClick={() => disconnect(wagmiConfig)}>
                      <Identity
                        className="bg-transparent"
                        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"
                        address={address}
                      >
                        <Avatar address={address} />
                        <Name address={address}>
                          <Badge />
                        </Name>
                      </Identity>
                    </button>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}