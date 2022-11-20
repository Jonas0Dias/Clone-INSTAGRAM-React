
import React from 'react'
export default function Posts() {


  //Criando um array de objetos. Este array tem exatamente as mesmas propriedades que foram definir na tag <Post> na linha 13
  const posts = [{ perfil: 'assets/img/eu.jpg', imagem: 'assets/img/praia.jpeg', texto: 'Jonas Dias', likes: 985 }, { perfil: 'assets/img/eu.jpg', imagem: 'assets/img/bb.jpg', texto: 'Jonas Dias', likes: 911 }, { perfil: 'assets/img/eu.jpg', imagem: 'assets/img/anjo.jpg', texto: 'Jonas Dias', likes: 1085 }, { perfil: 'assets/img/eu.jpg', imagem: 'assets/img/balerion.jpg', texto: 'Jonas Dias', likes: 895 }]


  //o map está pegando cada elemento da variavel posts e rederizando a função Post logo abaixo, Mudando apenas as propriedades p.blablabla
  return (
    <div class='posts'>
      {posts.map(p => <Post perfil={p.perfil} texto={p.texto} imagem={p.imagem} likes={p.likes} />)}
    </div>
  )
}


function Post(props) {
  //variaveis de estado. Recebem um valor inicial no react.useState, mas são alteradas quando a função Set é chamada e passado o novo valor como parametro da função set
  const [salvar, setSalvar] = React.useState('bookmark-outline')
  const [like, setLike] = React.useState('heart-outline')
  const [curtidas, setLikes] = React.useState(props.likes)
  return (
    <div class="post" data-test='post' >
      <div class="topo">
        <div class="usuario">
          <img src={props.perfil} />
          {props.texto}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div style={{ position: 'relative' }} class="conteudo" onDoubleClick={() => {
        if (like === 'heart-outline') {
          setLike('heart')
          setLikes(curtidas + 1)

        }


      }}>
        {/* <div className='bigheart'>
          <ion-icon style={{ width: '100px' , height: '100px'  }} name="heart"></ion-icon>
        </div> */}
        < img data-teste='post-image' src={props.imagem} />
      </div >

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={like} onClick={() => {
              if (like === 'heart-outline') {
                setLike('heart')
                setLikes(curtidas + 1)
              }

              else {
                setLike('heart-outline')
                setLikes(curtidas - 1)
              }

            }}>
            </ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon data-teste='save-post' onClick={() => salvar === 'bookmark-outline' ? setSalvar('bookmark') : setSalvar('bookmark-outline')} name={salvar}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/mozao.jpeg" />
          <div class="texto" data-teste='likes-number'>
            Curtido por <strong>Mozão</strong> e outras <strong> {curtidas} </strong> pessoas
          </div>
        </div>
      </div>
    </div >

  )
}
