export default function Navbar() {
    return (

        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ConteudoNavbar icone="logo-instagram" />
                    <div className="separador"></div>
                    <ConteudoNavbar imagem="assets/img/logo.png" />
                </div>

                <div className="logo-mobile">
                    <ConteudoNavbar icone="logo-instagram" />
                </div>

                <div className="instagram-mobile">
                    <ConteudoNavbar imagem="assets/img/logo.png" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    <ConteudoNavbar icone="paper-plane-outline" />
                    <ConteudoNavbar icone="compass-outline" />
                    <ConteudoNavbar icone="heart-outline" />
                    <ConteudoNavbar icone="person-outline" />
                </div>

                <div className="icones-mobile">
                    <ConteudoNavbar icone ="paper-plane-outline" />
                </div>
            </div>
        </div>)

}

function ConteudoNavbar(props) {
    return (
        <div>
            <img src={props.imagem} />
            <ion-icon name={props.icone}></ion-icon>
        </div>
    )
}