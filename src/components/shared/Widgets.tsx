import React from 'react'

type Props = {
  widgets: any[]
}

export default function Widgets({ widgets }: Props) {
  return (
    <>
      {
        widgets.map((widget, index) => {
          return (
            <div className="mb-5 mb-lg-0" key={index}>
              <h4 className="h6 mb-4">{widget.Title}</h4>
              <div dangerouslySetInnerHTML={{ __html: widget.Content }}>
              </div>
            </div>
          )
        })
      }
    </>
  )
}