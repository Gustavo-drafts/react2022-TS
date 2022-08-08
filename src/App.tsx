import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import styles from "./App.module.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/gutoo01.png",
      name: 'Gustavo',
      role: 'Dev Jr at ...'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Comentários' },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-07-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/devjefferson.png",
      name: 'Jefferson',
      role: 'Dev Sr at ...'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Testando segundo usuário', },
      { type: 'link', content: 'jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-07-20 20:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
