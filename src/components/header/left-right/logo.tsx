import { cn } from '@/util/cn'

function Logo() {
  return (
    <h1 className={cn('p-2.5 align-middle text-xl flex flex-row gap-1')}>
      <a href='/' className={cn('flex items-center')}>
        <img src='/icons/logo.png' alt='Pomodoro-logo' width={20} height={20} className='dark:invert-0 invert'/>
      </a>
        <p className='font-bold dark:text-white text-black'>Pomofocus</p>
    </h1>
  )
}

export default Logo
