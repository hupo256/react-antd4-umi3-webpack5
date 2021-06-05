import React, { useEffect, useState } from 'react';
import Loadable from '@/components/loading/index.jsx'
import styles from './index.less';

const SayHi = Loadable(() => import('fdTest/sayHi'))

const Login: React.FC = () => {
  const [value, setvalue] = useState('test')

  useEffect(() => {
    setvalue('ASDFFD. SERESR ')
  },[])

  return (
    <div className={styles.fdBOX}>
      poisdjfpasodf {value}
      <SayHi />
    </div>
  );
};

export default Login;
