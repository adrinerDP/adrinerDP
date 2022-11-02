import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, engName, email } = frontMatter

  return (
    <>
      <PageSEO title={`소개 - ${name}`} description={`${name} 소개`} />
      <div className="space-y-6">
        <div
          className="rounded-xl bg-gray-50 bg-gray-800 px-6 pt-20 pb-8 text-black"
          style={{
            filter: 'grayscale(1)',
            backgroundColor: '#ffffff',
            backgroundImage: 'url("/static/images/profile.png")',
            backgroundSize: '96px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '95% 100%',
          }}
        >
          <div className="space-y-1">
            <div className="flex items-end gap-3">
              <h1 className="text-2xl font-extrabold">{name}</h1>
              <p className="text-gray-700"> Software Engineer</p>
            </div>
            <h1 className="text-xl font-medium text-gray-400">{engName}</h1>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Contacts
          </h1>
          <ul className="space-y-1 pl-3 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Email | </strong>me@adrinerdp.co
            </li>
            <li>
              <strong>Phone (Work) | </strong>010-5700-2640
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Bio
          </h1>
          <div className="pl-3 leading-7 text-gray-700 dark:text-gray-300">{children}</div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Interests
          </h1>
          <ul className="space-y-2 pl-3 text-gray-700 dark:text-gray-300">
            <li>
              <strong>- 서버 | </strong>
              <strong>Node.js</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">
                (NestJS, Express, Fastify){', '}
              </small>
              <strong>Python</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">(FastAPI, Flask)</small>
            </li>
            <li>
              <strong>- 클라이언트 | </strong>
              <strong>Web</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">(React.js, Vue.js){', '}</small>
              <strong>Mobile</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">(Flutter)</small>
            </li>
            <li>
              <strong>- 데이터베이스 | </strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">
                PostgreSQL, MySQL, MongoDB, Redis
              </small>
            </li>
            <li>
              <strong>- 인프라 | </strong>
              <strong>Cloud</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">(AWS, Azure){', '}</small>
              <strong>Container</strong>{' '}
              <small className="text-gray-600 dark:text-gray-400">(Docker, Kubernetes)</small>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Careers
          </h1>
          <ul className="space-y-3 pl-3 text-gray-700 dark:text-gray-300">
            <li className="space-y-2">
              <div>
                <strong className="text-lg">SW마에스트로 13기</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2022-06 ~ 2022-11)</small>
              </div>
              <a
                href="https://swmaestro.org"
                className="text-sm text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                https://swmaestro.org
              </a>
            </li>
            <li>
              <div>
                <strong className="text-lg">시대생</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2021-04 ~ )</small>
              </div>
              <a
                href="https://github.com/uoslife"
                className="text-sm text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/uoslife
              </a>
            </li>
            <li>
              <div>
                <strong className="text-lg">끄투코리아</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2021-08 ~ )</small>
              </div>
              <a
                href="https://kkutu.co.kr"
                className="text-sm text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                https://kkutu.co.kr
              </a>
            </li>
            <li>
              <div>
                <strong className="text-lg">팀 크레센도</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2021-01 ~ 2022-01)</small>
              </div>
              <a
                href="https://team-crescendo.me"
                className="text-sm text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                https://team-crescendo.me
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            Social Impacts
          </h1>
          <ul className="space-y-3 pl-3 text-gray-700 dark:text-gray-300">
            <li>
              <div>
                <strong className="text-lg">코드포코리아</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2020-03 ~ )</small>
              </div>
              <a
                href="https://codefor.kr"
                className="text-sm text-gray-600 dark:text-gray-400"
                target="_blank"
                rel="noreferrer"
              >
                https://codefor.kr
              </a>
            </li>
            <li className="space-y-2">
              <div>
                <strong className="text-lg">대한민국 열린정부위원회 민간위원</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2021-09 ~ )</small>
              </div>
            </li>
            <li>
              <div>
                <strong className="text-lg">2021년 정부혁신컨설팅 자문위원</strong>{' '}
                <small className="text-gray-600 dark:text-gray-400">(2021-06 ~ 2021-11)</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
