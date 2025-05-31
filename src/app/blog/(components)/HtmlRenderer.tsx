'use client'

export default function HtmlRenderer({ html , classname}: { html: string, classname:string }) {
  return <div className={classname} dangerouslySetInnerHTML={{ __html: html }} />
}
