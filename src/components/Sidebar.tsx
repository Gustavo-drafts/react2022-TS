import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=50"
      />

      <div className={styles.profile}>
      

        <Avatar src="https://github.com/gutoo01.png"
        />

        <strong>Gustavo Trindade</strong>
        <span>Web Dev</span>
      </div>


      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
};
