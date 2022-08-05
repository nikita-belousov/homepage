import * as React from 'react'
import { useRouter } from 'next/router'

interface IActiveLinkProps {
    children: string;
    href: string;
    className: string;
    activeClassName: string;
}

function ActiveLink({ children, href, className, activeClassName }: IActiveLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push(href)
  }

  let cls = className;

  if (router.asPath === href) {
    cls += ` ${activeClassName}`;
  }

  return (
    <a href={href} onClick={handleClick} className={cls}>
      {children}
    </a>
  )
}

export default ActiveLink
