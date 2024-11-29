'use client'

import useSound from 'use-sound'
import { HeaderButton } from '@/components/header/index'
import { TbBrandAmongUs } from 'react-icons/tb'
import Link from 'next/link'

type LogoProps = {
  isMobile: boolean,
};

function Logo({ isMobile }: LogoProps) {
  const [ThemeSound] = useSound('/sounds/page.mp3', { volume: 0.5 })

  return (
    <h1 className={`select-none ${isMobile ? 'hidden' : ''}`}>
      <Link href={'/'}>
        <HeaderButton icon={<TbBrandAmongUs className={`h-7 w-7`} />}>
          <p
            className='round-lg mx-0 pl-0 text-xl font-semibold'
            onClick={() => {
              ThemeSound()
            }}
          >
            eHAFocus
          </p>
        </HeaderButton>
      </Link>
    </h1>
  )
}

export default Logo
