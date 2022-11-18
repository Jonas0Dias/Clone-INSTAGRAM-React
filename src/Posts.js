export default function Posts() {

  const posts = [{ perfil: 'assets/img/eu.jpg', imagem: 'assets/img/praia.jpeg', texto: 'Jonas Dias' }, { perfil: 'assets/img/eu.jpg', imagem: 'assets/img/bb.jpg', texto: 'Jonas Dias' },{ perfil: 'assets/img/eu.jpg', imagem: 'assets/img/anjo.jpg', texto: 'Jonas Dias' },{ perfil: 'assets/img/eu.jpg', imagem: 'assets/img/balerion.jpg', texto: 'Jonas Dias' }]



  return (
        <div class='posts'>
          {posts.map(p => <Post perfil={p.perfil} texto={p.texto} imagem={p.imagem}/>)}
        </div>
    )
}


function Post(props) {

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.perfil} />
          {props.texto}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src="assets/img/mozao.jpeg" />
          <div class="texto">
            Curtido por <strong>Mozão</strong> e <strong>outras 101.523 pessoas</strong>
          </div>
        </div>
      </div>
    </div>

  )
}