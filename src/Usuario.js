import React from 'react'


export default function Usuario(props){
  console.log(props.nome)
  const [usuario, setPropsUsuario]= React.useState(props.nome)
  const [url, setPropsUrl]= React.useState(props.imagem)
  

    return(
        <div class="usuario" data-teste='user'>
          <img data-teste='profile-image' onClick={() => url = setPropsUrl(prompt('Cole a nova url da imagem'))} src={url} />
          <div class="texto">
            <strong>{props.usuario}</strong>
            <span data-teste='name'>
              {usuario}
              <ion-icon data-teste='edit-name' onClick={() => setPropsUsuario(prompt('Digite o novo nome de usuário'))} name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}

