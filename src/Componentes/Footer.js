export default function Footer() {
    return (
        <footer className="fundo-mobile">
            <ConteudoFooter icone="home" />
            <ConteudoFooter icone="search-outline" />
            <ConteudoFooter icone="add-circle-outline" />
            <ConteudoFooter icone="heart-outline" />
            <ConteudoFooter icone="person-outline" />
        </footer>
    )
}

function ConteudoFooter(props) {
    return(
        <ion-icon name={props.icone}></ion-icon>
    )
}