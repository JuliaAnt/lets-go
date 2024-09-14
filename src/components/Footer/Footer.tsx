import styles from './footer.module.scss';

import {Wrapper} from '../Wrapper/Wrapper';
import {Logo} from './Logo/Logo';
import {Navigation} from './Navigation/Navigation';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles.footerWrapper}>
          <Logo />
          <Navigation />
        </div>
      </Wrapper>
    </footer>
  );
};
