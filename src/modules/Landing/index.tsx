import clsx from 'clsx'

import styles from './style.module.scss'

const Landing = () => (
  <div className={clsx('bgColor-athensGray', [styles.contentWrapper])}>
    <div>
      <div className="fontSize-20">NOTHING TO SEE</div>
      <div className="fontSize-72 color-shuttleGray">YET</div>
      <div className="fontSize-24 color-shuttleGray">
        This is just an exercise for SASS and deploy using Vercel
      </div>
    </div>
  </div>
)

export default Landing
