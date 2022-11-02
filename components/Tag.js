import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-2 rounded bg-gray-200 px-2 py-1 text-xs font-semibold uppercase hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600">
        #{text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
