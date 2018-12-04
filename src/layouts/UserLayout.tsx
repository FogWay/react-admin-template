import React from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import logo from '@/assets/logo.svg';
import { copyright } from './Footer';
import styles from './UserLayout.less';

class UserLayout extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.lang}>
          <SelectLang />
        </div>

        <div className={styles.content}>
          <img alt="logo" className={styles.logo} src={logo} />
          {children}
        </div>
        <GlobalFooter copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;
