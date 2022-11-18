export default function Usuario(props){



    return(
        <div class="usuario">
          <img src={props.imagem} />
          <div class="texto">
            <strong>{props.usuario}</strong>
            <span>
              {props.nome}
              <ion-icon  name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}

function editar(){
  alert('funcionando')
}