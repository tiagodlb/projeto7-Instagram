export default function Sidebar(props) {
    const {
        imagemUsuarioSidebar, nomeUsuarioSidebar, primeiroNomeUsuarioSidebar, iconeSugestao1,
        nome1Sugestoes, razao1, iconeSugestao2, nome2Sugestoes, razao2, iconeSugestao3, nome3Sugestoes,
        razao3, iconeSugestao4, nome4sugestoes, razao4, iconeSugestao5, nome5Sugestoes, razao5 } = props
    return (
        <div class="sidebar">
            <div class="usuario">
                <img src={imagemUsuarioSidebar} />
                <div class="texto">
                    <strong>{nomeUsuarioSidebar}</strong>
                    {primeiroNomeUsuarioSidebar}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src={iconeSugestao1} />
                        <div class="texto">
                            <div class="nome">{nome1Sugestoes}</div>
                            <div class="razao">{razao1}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src={iconeSugestao2} />
                        <div class="texto">
                            <div class="nome">{nome2Sugestoes}</div>
                            <div class="razao">{razao2}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src={iconeSugestao3} />
                        <div class="texto">
                            <div class="nome">{nome3Sugestoes}</div>
                            <div class="razao">{razao3}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src={iconeSugestao4} />
                        <div class="texto">
                            <div class="nome">{nome4sugestoes}</div>
                            <div class="razao">{razao4}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>

                <div class="sugestao">
                    <div class="usuario">
                        <img src={iconeSugestao5} />
                        <div class="texto">
                            <div class="nome">{nome5Sugestoes}</div>
                            <div class="razao">{razao5}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}