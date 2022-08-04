import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

// <GenericAttribute> implementa props globais nativamente do React

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}



export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

  

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
};
