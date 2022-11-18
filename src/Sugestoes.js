export default function Sugestoes() {

  const sugestoes = [{ imagem: 'assets/img/bad.vibes.memes.svg', texto: 'bad.vibes.memes' }, { imagem: 'assets/img/chibirdart.svg', texto: 'chibirdart' }, { imagem: 'assets/img/razoesparaacreditar.svg', texto: 'razoesparaacreditar' }, { imagem: 'assets/img/adorable_animals.svg', texto: 'adorable_animals' }, { imagem: 'assets/img/smallcutecats.svg', texto: 'smallcutecats' }]





  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {sugestoes.map(s => <Sugestao imagem={s.imagem} texto={s.texto}/>)}
    </div>
  )
}


function Sugestao(props) {
  return (
  <div class="sugestao">
    <div class="usuario">
      <img src={props.imagem} />
      <div class="texto">
        <div class="nome">{props.texto}</div>
        <div class="razao">Segue você</div>
      </div>
    </div>

    <div class="seguir">Seguir</div>
  </div>
  )
}