import Link from "next/link";
import React from "react";

export interface breadCrumbs {
  id: number;
  link: string;
  label: string;
}
interface IProps {
  data: breadCrumbs[];
}

export default function BreadCrumbs({ data }: IProps) {
  const lastIndexElement = data[data.length - 1];
  return (
    <div className="bg-light py-3">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            {data.map((item: any, index: number) => {
              return (
                <li className={(lastIndexElement != item ? "breadcrumb-item" : "breadcrumb-item active")} key={index}>
                  {
                    lastIndexElement != item ? (

                      <Link href={item.link}>{item.label}</Link>

                    ) : (
                      item.label
                    )
                  }
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
    </div >

  );
}
