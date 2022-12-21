import styles from './Alert.module.css';
import cn from 'classnames';

type AlertPropsType = {
  type: string;
  children: React.ReactNode;
};

export default function Alert({ children, type }: AlertPropsType) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
