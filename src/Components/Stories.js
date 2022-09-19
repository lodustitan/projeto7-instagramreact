function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}

function Stories() {
    const storie_list = [
        {name: "9gag", img: "./img/9gag.svg"},
        {name: "meowed", img: "./img/meowed.svg"},
        {name: "barked", img: "./img/barked.svg"},
        {name: "nathanwpylestrangeplanet", img: "./img/nathanwpylestrangeplanet.svg"},
        {name: "wawawicomics", img: "./img/wawawicomics.svg"},
        {name: "respondeai", img: "./img/respondeai.svg"},
        {name: "filomoderna", img: "./img/filomoderna.svg"},
        {name: "memeriagourmet", img: "./img/memeriagourmet.svg"},
    ]
    return (
        <div class="stories">
            {
                storie_list.map( (st)=> {
                    return <Story name={st.name} img={st.img} />
                } )
            }

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

export default Stories;