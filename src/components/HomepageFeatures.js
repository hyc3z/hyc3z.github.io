import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    description: (
      <img
        src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=hyc3z&style=--header-bg-color:%23000;--border-radius:10px"
      />
    ),
  },
  {
    description: (
      <img
        src="https://cr-skills-chart-widget.azurewebsites.net/api/api?username=hyc3z"
      />
    ),
  },
  {
    description: (
      <img
        src="https://github-profile-trophy.vercel.app/?username=hyc3z&column=4&theme=nord&margin-w=15&margin-h=15"
      />
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      {Svg &&
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
      }
      <div className="text--center padding-horiz--md">
        {title && <h3>{title}</h3>}
        <p>{description}</p>
      </div>
    </div>
  );
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
  );
}
