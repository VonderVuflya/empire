import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

function H1({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}>
      {children}
    </h1>
  )
}

function H2({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  )
}

function H3({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  )
}

function H4({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h4>
  )
}

function P({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  )
}

function Blockquote({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  )
}

function List({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>
      {children}
    </ul>
  )
}

function Lead({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`text-muted-foreground text-xl ${className}`}>
      {children}
    </p>
  )
}

function Large({ children, className }: { children: ReactNode, className?: string }) {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>
}

function Small({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <small className={`text-sm leading-none font-medium ${className}`}>{children}</small>
  )
}

function Muted({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`text-muted-foreground text-sm ${className}`}>{children}</p>
  )
}

type LinkType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
function Link({ children, className, ...linkProps }: LinkType) {
  return (
    <a {...linkProps} className={`font-medium text-primary underline underline-offset-4 ${className}`}>
      {children}
    </a>
  )
}

export default { H1, H2, H3, H4, P, Blockquote, List, Lead, Large, Small, Muted, Link }