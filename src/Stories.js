export default function Stories() {

    const stories = [{ imagem: 'assets/img/eu.jpg', texto: 'Seu Story' }, { imagem: 'assets/img/dany.jpg', texto: 'Daenerys' }, { imagem: 'assets/img/ufrj.jpg', texto: 'UFRJ' }, { imagem: 'assets/img/nathanwpylestrangeplanet.svg', texto: 'nathanwpylestrangeplanet' }, { imagem: 'assets/img/mozao.jpeg', texto: 'Mozão' }, { imagem: 'assets/img/respondeai.svg', texto: 'respondeai' }, { imagem: 'assets/img/filomoderna.svg', texto: 'filomoderna' }, { imagem: 'assets/img/memeriagourmet.svg', texto: 'memeriagourmet' }]
    console.log(stories)


    return (
        <div class='stories'>
            {stories.map(s => <Story imagem={s.imagem} texto={s.texto} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}

function Story(props) {

    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class='usuario'>
                {props.texto}
            </div>
        </div>

    )
}
