import React from "react";
import "./CardProject.scss";
import Image from "next/image";

import Link from "next/link";

export default function CardProjects({ leProject }: any) {
  return (
    <Link href={`/proyectos/${leProject.slug}`}>
      <article className="CardProject">
        <div className="CardProjectImage">
          {leProject.cover && (
            <Image
              src={leProject.cover}
              alt={leProject.altText ? leProject.altText : "galeria"}
              width={320}
              height={240}
            />
          )}
        </div>
        <div className="CardProjectBody truncate">
          <h3 className="">{leProject.title}</h3>
          <p className="">{leProject.scope}</p>
        </div>
        <div className="CardProjectLabels">
          {leProject.tags &&
            leProject.tags.map((tag: any) => {
              // console.log(tag)
              return (
                <div className="label" key={tag.id}>
                  {tag.attributes.tag}
                </div>
              );
            })}
        </div>
      </article>
    </Link>
  );
}
