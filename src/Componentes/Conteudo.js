import Posts from "./Posts"
import Stories from "./Stories"
import Sidebar from "./Sidebar"


const ConteudoStories = [{
    nomeUsuario: "9gag",
    imagemStories: "assets/img/9gag.svg",
}, {
    nomeUsuario: "meowed",
    imagemStories: "assets/img/meowed.svg",
}, {
    nomeUsuario: "barked",
    imagemStories: "assets/img/barked.svg",
}, {
    nomeUsuario: "nathanwpylestrangeplanet",
    imagemStories: "assets/img/nathanwpylestrangeplanet.svg",
}, {
    nomeUsuario: "wawawicomics",
    imagemStories: "assets/img/wawawicomics.svg",
}, {
    nomeUsuario: "respondeai",
    imagemStories: "assets/img/respondeai.svg",
}, {
    nomeUsuario: "9gag",
    imagemStories: "assets/img/9gag.svg",
}, {
    nomeUsuario: "filomoderna",
    imagemStories: "assets/img/filomoderna.svg",
}, {
    nomeUsuario: "memeriagourmet",
    imagemStories: "assets/img/memeriagourmet.svg",
}]

const ConteudoPosts = [{
    imagemPost: "assets/img/meowed.svg",
    usuarioPost: "meowed",
    iconeAcoes: "ellipsis-horizontal",
    imagemConteudoPost: "assets/img/gato-telefone.svg",
    iconeLike: "heart-outline",
    iconeComentar: "chatbubble-outline",
    iconeEnviar: "paper-plane-outline",
    iconeSalvar: "bookmark-outline",
    imagemQuemCurtiu: "assets/img/respondeai.svg",
    usuarioCurtiu: "respondeai"
}, {
    imagemPost: "assets/img/barked.svg",
    usuarioPost: "barked",
    iconeAcoes: "ellipsis-horizontal",
    imagemConteudoPost: "assets/img/dog.svg",
    iconeLike: "heart-outline",
    iconeComentar: "chatbubble-outline",
    iconeEnviar: "paper-plane-outline",
    iconeSalvar: "bookmark-outline",
    imagemQuemCurtiu: "assets/img/adorable_animals.svg",
    usuarioCurtiu: "adorable_animals"
}]

const ConteudoSideBar = [{
    imagemUsuarioSidebar: "assets/img/catanacomics.svg",
    nomeUsuarioSidebar: "catanacomics",
    primeiroNomeUsuarioSidebar: "Catana",
    iconeSugestao1: "assets/img/bad.vibes.memes.svg",
    nome1Sugestoes: "bad.vibes.memes",
    razao1: "Segue você",
    iconeSugestao2: "assets/img/chibirdart.svg",
    nome2Sugestoes: "chibirdart",
    razao2: "Segue você",
    iconeSugestao3: "assets/img/razoesparaacreditar.svg",
    nome3Sugestoes: "razoesparaacreditar",
    razao3: "Novo no Instagram",
    iconeSugestao4: "assets/img/adorable_animals.svg",
    nome4sugestoes: "adorable_animals",
    razao4: "Segue você",
    iconeSugestao5: "assets/img/smallcutecats.svg",
    nome5Sugestoes: "smallcutecats",
    razao5: "Segue você"
}]

export default function Corpo() {
    return (
        <main class="corpo">
            <div class="esquerda">
                <article class="stories">
                    {ConteudoStories.map((c) => (
                        <Stories nomeUsuario={c.nomeUsuario} imagemStories={c.imagemStories} />
                    ))}
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </article>
                <article class="posts">
                    {ConteudoPosts.map((c) => (
                        <Posts imagemPost={c.imagemPost} usuarioPost={c.usuarioPost} iconeAcoes={c.iconeAcoes} imagemConteudoPost={c.imagemConteudoPost}
                            iconeLike={c.iconeLike} iconeComentar={c.iconeComentar} iconeEnviar={c.iconeEnviar} iconeSalvar={c.iconeSalvar} imagemQuemCurtiu={c.imagemQuemCurtiu}
                            usuarioCurtiu={c.usuarioCurtiu} />
                    ))}
                </article>

            </div>
            <article class="sidebar">

                {ConteudoSideBar.map((c) => (
                    <Sidebar imagemUsuarioSidebar={c.imagemUsuarioSidebar} nomeUsuarioSidebar={c.nomeUsuarioSidebar} primeiroNomeUsuarioSidebar={c.primeiroNomeUsuarioSidebar}
                    iconeSugestao1 = {c.iconeSugestao1} nome1Sugestoes = {c.nome1Sugestoes} razao1 = {c.razao1} iconeSugestao2= {c.iconeSugestao2} nome2Sugestoes = {c.nome2Sugestoes}
                    razao2 = {c.razao2} iconeSugestao3 = {c.iconeSugestao3} nome3Sugestoes = {c.nome3Sugestoes} razao3 = {c.razao3} iconeSugestao4 = {c.iconeSugestao4}
                    nome4sugestoes = {c.nome4sugestoes} razao4 = {c.razao4} iconeSugestao5 = {c.iconeSugestao5} nome5Sugestoes = {c.nome5Sugestoes} razao5 = {c.razao5}/>
                ))}
            </article>
        </main>
    )
}