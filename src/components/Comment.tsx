import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
  
  content: string;
  onDeleteComment: (comment: string) => void;
}




export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {

    onDeleteComment(content)
  }


/** implementada diretamente no elemento via arrow function */
  // Método alternativo de implementação do handle
  
  function handleLikeComment() {  
    setLikeCount((state) => { // React vai salvar fila de estados  
      return state + 1
    });
  }




  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gutoo01.png" alt="" />


      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Trindade</strong>
              <time title="27 de julho às 12:00" dateTime="2022-07-27 12:23:00">Cerca de 1hr atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>


          <p>{content}</p>
        </div>

        <footer>
          {/* <button onClick={() => setLikeCount(likeCount + 1)}> */}
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}