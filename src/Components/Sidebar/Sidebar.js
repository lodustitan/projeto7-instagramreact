import React from "react"
function Usuario(props){
    const [perfilImg, setPerfilImg] = React.useState(props.img);
    const [perfilName, setPerfilName] = React.useState(props.name);
    
    function changeName(){
        setPerfilName(prompt("Digite um novo nome", perfilName));   
    }
    function changeImage(){
        setPerfilImg(prompt("coloque o URL da imagem"));
    }
    return (
        <div class="usuario">
            <img src={perfilImg} onClick={() => changeImage()} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {perfilName}
                    <ion-icon name="pencil" onClick={() => changeName()}></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">{props.newUser? "Novo no Instagram": "Segue você"}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function Sidebar() {
    const sugestao_list = [
        {img: "./img/bad.vibes.memes.svg", name: "bad.vibes.memes", newUser: false},
        {img: "./img/chibirdart.svg", name: "chibirdart", newUser: false},
        {img: "./img/razoesparaacreditar.svg", name: "razoesparaacreditar", newUser: true},
        {img: "./img/adorable_animals.svg", name: "adorable_animals", newUser: false},
        {img: "./img/smallcutecats.svg", name: "smallcutecats", newUser: false}
    ]

    return (
        <div class="sidebar">
            <Usuario 
                name="Catana"
                user="catanacomics"
                img="./img/catanacomics.svg"
            />

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {
                    sugestao_list.map( sg => {
                        return (
                            <Sugestao 
                                img={sg.img} 
                                name={sg.name}
                                newUser={sg.newUser}
                            />
                        )
                    } )
                }
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default Sidebar;