import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"
import Spectre from "/static/img/Spectre.png"
import Rei from "/static/img/Rei-Light.png"
import Neutron from "/static/img/Neutron.png"

const FeatureList = [
  {
    title: <a href="../docs/spectre-system">Spectre System</a>,
    Img: Spectre,
    description: <>Spectre is a computing system</>,
  },
  {
    title: <a href="../docs/rei">Rei</a>,
    Img: Rei,
    description: <>A Language that just works</>,
  },
  {
    title: <a href="../docs/neutron">Neutron</a>,
    Img: Neutron,
    description: <>A minimalist kernel built for efficiency and performance</>,
  },
]

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Img} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
