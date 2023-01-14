import { Header } from './components/Header/Header';
import { PostList } from './components/PostList/PostList'
import { Sidebar } from './components/Sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/84194994?v=4",
      name: "Mateus Teles",
      role: "Front End Developer"
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content: '👉 https://github.com/mateusteles21'},    
    ],
    publishedAt: new Date('2022-06-09 20:40:12'),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://avatars.githubusercontent.com/u/84194994?v=4",
      name: "Mateus Teles",
      role: "Front End Developer"
    },
    content: [
        {type: 'paragraph', content: 'E aí pessoal!? 🤓'},
        {type: 'paragraph', content: 'Fiz um novo projeto front-end no meu GitHub, meu próprio portfólio!'},
        {type: 'link', content: '👉 https://github.com/mateusteles21'},    
    ],
    publishedAt: new Date('2022-06-05 10:14:33'),
  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
          return(
            <PostList 
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
