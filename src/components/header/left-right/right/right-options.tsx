'use client'

/* Util */
import { cn } from '@/lib/util/cn'
import { useCallback, useState } from 'react'
import { metadata } from '@/lib/type/metadata'
import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

/* Icons */
import { BsGear } from 'react-icons/bs' // Imported gear icon
import { ImProfile } from 'react-icons/im'
import { BiUserCircle } from 'react-icons/bi' // Imported user icon
import { SiBuymeacoffee } from 'react-icons/si'

/* Components */
import { SettingModal } from '@/components/header/index'
import { MenuItem, Menu, HeaderButton } from '@/components/header/index'
import Link from 'next/link'

const RightOptions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  /* Open setting modal */
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  /* Render menu items, which is bogus */
  const renderMenuButton = useCallback(
    (onClick: () => void) => (
      <HeaderButton onClick={onClick}>
        <div className={cn('flex flex-row items-center')}>
          <BiUserCircle className={cn('mr-1 h-7 w-7')} /> {/* User icon */}
          <ClerkProvider>
            <SignedOut>
              <Link href='/signup'>
                <p className=''>Login</p>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ClerkProvider>
        </div>
      </HeaderButton>

      /* Possibly more here, unless we being absolute lazy */
    ),
    []
  )

  return (
    <>
      {/* Right */}
      <ul className={'flex gap-2.5'}>
        {/* Settings */}
        <li>
          <HeaderButton onClick={handleModalToggle}>
            <div className='flex flex-row items-center'>
              <BsGear className={cn('mr-1 h-7 w-7')} /> {/* Gear icon */}
              Setting
            </div>
          </HeaderButton>
        </li>

        {/* And this */}
        <li className='flex flex-row items-center'>
          <Menu menuButton={renderMenuButton}>
            <a href={`${metadata.github}`} target='_blank' rel='noopener noreferrer'>
              <MenuItem icon={<SiBuymeacoffee className={cn(' h-5 w-5  opacity-80')} />}>
                <p className='ml-2'>Star this project if you like it</p>
              </MenuItem>
            </a>
            <a>
              <MenuItem icon={<ImProfile className={cn('h-5 w-5 opacity-80')} />}>
                <ClerkProvider>
                  <SignedOut>
                    <Link href='/signup'>
                      <button className='w-full rounded px-3 py-2 transition duration-200'>Sign in</button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </ClerkProvider>
              </MenuItem>
            </a>
          </Menu>
        </li>
      </ul>

      {/* Modal */}
      {isModalOpen && <SettingModal onClose={handleModalToggle} />}
    </>
  )
}

export default RightOptions
