import { Tooltip } from '@/components/ui/tooltip'
import { metadata } from '@/lib/type/metadata'

export default function FooterLove() {
  const currentYear = new Date().getFullYear()

  return (
    <span className='sm:balanced ml-2 mr-3 text-base font-medium'>
      <span className='opacity-95 dark:opacity-70'>{`© ${currentYear} `}</span>
      <a href={`${metadata.github}`} target='_blank'>
        <Tooltip text='find source-code & us here'>
          <span className='font-medium opacity-100 transition-colors duration-200 ease-in-out hover:text-pink-500 dark:hover:text-pink-500'>
            EHA Software Interns Cohort 5
          </span>
        </Tooltip>
      </a>
      <span className='opacity-95 dark:opacity-70'>{` • David | Samuel | Elijah | Fatima | Samrawit.`}</span>
    </span>
  )
}
