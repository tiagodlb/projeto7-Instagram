export default function Stories(props) {
    const { nomeUsuario, imagemStories } = props
    return (
            <section className="story">
                <div class="imagem">
                    <img src={imagemStories} />
                </div>
                <div class="usuario">
                    {nomeUsuario}
                </div>
            </section>
    )
}
