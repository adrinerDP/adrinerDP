import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/">
              <div className="flex items-center justify-center">
                <img
                  src="/static/images/logo.png"
                  className="mr-3 h-10 rounded-full"
                  alt="로고 이미지"
                />
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>

        <main className="mb-auto">{children}</main>

        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
