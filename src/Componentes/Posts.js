export default function Posts(props) {
    const { imagemPost, usuarioPost, iconeAcoes, imagemConteudoPost, iconeLike, iconeComentar, iconeEnviar, iconeSalvar, imagemQuemCurtiu, usuarioCurtiu } = props
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={imagemPost} />
                    {usuarioPost}
                </div>
                <div class="acoes">
                    <ion-icon name={iconeAcoes}></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={imagemConteudoPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={iconeLike}></ion-icon>
                        <ion-icon name={iconeComentar}></ion-icon>
                        <ion-icon name={iconeEnviar}></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={iconeSalvar}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imagemQuemCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{usuarioCurtiu}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}