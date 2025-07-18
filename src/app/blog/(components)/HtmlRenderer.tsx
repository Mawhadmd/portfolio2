'use client'

export default function HtmlRenderer({ html , classname, noimage}: { html: string, classname:string, noimage?: boolean }) {
  if (noimage){
    html = html.replace(/<img[^>]*>/g, ''); 
  }
  return <div className={classname} dangerouslySetInnerHTML={{ __html: html }} />
}
