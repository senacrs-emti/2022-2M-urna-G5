<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Urna</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>header</h1>
    </header>
    <main>
        <div class="urna">
            <div class="urna__tela">
                <div class="tela__candidato">
                    <h1 id="seuVoto">Seu voto para:</h1>
                    <div class="descricao"></div>
                </div>
                <div class="tela__cargo">
                    <h1></h1>
                </div>
                <div class="tela__digitos">
                    <div class="tela__digito piscando"></div>
                    <div class="tela__digito"></div>
                </div>
            </div>
            <aside class="urna__lado">
                <div class="urna__titulo">
                    <h1>Justiça Eleitoral</h1>
                </div>
                <div class="urna__numeros">
                    <div class="numero" onclick=clicou(1)><h1>1</h1></div>
                    <div class="numero" onclick=clicou(2)><h1>2</h1></div>
                    <div class="numero" onclick=clicou(3)><h1>3</h1></div>
                    <div class="numero" onclick=clicou(4)><h1>4</h1></div>
                    <div class="numero" onclick=clicou(5)><h1>5</h1></div>
                    <div class="numero" onclick=clicou(6)><h1>6</h1></div>
                    <div class="numero" onclick=clicou(7)><h1>7</h1></div>
                    <div class="numero" onclick=clicou(8)><h1>8</h1></div>
                    <div class="numero" onclick=clicou(9)><h1>9</h1></div>
                    <div class="numero" onclick=clicou(0)><h1>0</h1></div>
                </div>
                <div class="urna__teclas">
                    <div class="tecla--branco">Branco</div>
                    <div class="tecla--vermelho">Corrige</div>
                    <div class="tecla--verde">Confirma</div>
                </div>
            </aside>
        </div>
    </main>
    <script src="js/passos.js"></script>
    <script src="js/script.js"></script>
</body>
</html>