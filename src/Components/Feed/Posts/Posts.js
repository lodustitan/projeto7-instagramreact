

function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userimg} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.conteudo}/>
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
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{props.lastlike}</strong> e <strong>outras {Number(props.like).toLocaleString('pt-br')} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Posts() {
    const post_list = [
        {
            user: "lipinho",
            userimg: "./img/meowed.svg",
            conteudo: "./img/gato-telefone.svg", 
            like: "25520", 
            lastlike: "respondeai" 
        },
        {
            user: "meowed",
            userimg: "./img/meowed.svg",
            conteudo: "./img/gato-telefone.svg", 
            like: "2130", 
            lastlike: "respondeai" 
        }
    ]
    return (
        <div class="posts">
            {
                post_list.map( pt => {
                    return (
                        <Post 
                            user={pt.user} 
                            userimg={pt.userimg} 
                            conteudo={pt.conteudo} 
                            like={pt.like} 
                            lastlike={pt.lastlike} 
                        />
                    )
                } )
            }
        </div>
    )
}

export default Posts;