export default function Stories(props) {
    const { nomeUsuario, imagemStories } = props
    return (
            <div className="story">
                <div class="imagem">
                    <img src={imagemStories} />
                </div>
                <div class="usuario">
                    {nomeUsuario}
                </div>
            </div>
    )
}
