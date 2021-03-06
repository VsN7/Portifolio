# Portfólio

.![Portifólio](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShkIAgyCXFVmufBPjeuv9IUofDXLLb4EsjyBy4VV46DPO4Tni3)

## Descrição do projeto

Criação do meu portfólio profissional.

### Disponivel em: https://vitorportifolio.herokuapp.com

## Tecnologias

- HTML
- CSS
- Bootstrap
- JavaScript

### HTML

`````html
<!doctype html>
<html lang="pt-br">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="CSS/bootstrap/compiler/bootstrap.css">

  <link rel="stylesheet" href="CSS/style.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

  <title>Portifólio</title>

  <link rel="shortcut icon" href="imagens/skill.jpg" />
  <meta name="description" content="Veja o meu curriculum virtual">
  <meta property="og:image" content="https://vitorportifolio.herokuapp.com/imagens/informacoes.jpg">


  <link rel="shortcut icon" href="imagens/icones/titulo.png" />

</head>

<body>

  <!-- Nav tabs -->
  <!--  <img src="}?:>  'D4EDX '" class="card-img" alt="">  -->
  <div class="card bg-dark text-white">
    <img id="fundo" src="imagens/teste9.png" class="card-img" alt="">

    <div class="card-img-overlay">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <a id="curriculo" class="navbar-brand" href="#">Curriculo</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav" id="myTab" role="tablist">
            <li id="homeli" class="nav-item">
              <a class="nav-link" id="messages-tab" href="#sobreM" aria-controls="messages" aria-selected="false">Sobre
                Mim</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="profile-tab" href="#habilidades" aria-controls="profile"
                aria-selected="false">Habilidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="settings-tab" href="#experiencias" aria-controls="settings"
                aria-selected="false">Experiencias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="Portifolio-tab" href="#portifolio" aria-controls="Portifolio"
                aria-selected="false">Portifólio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="Contato-tab" href="#contato" aria-controls="Contato"
                aria-selected="false">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="cc-profile-image"><a href="#"><img id="perfil" src="imagens/ts3.png" alt="Image"></a></div>
      <p id="nome" class="font-weight-light">Vitor Santos</p>
    </div>
  </div>

  <div class="tab-content">
    <section>
      <h2 id="sobreM" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
        class="featurette-heading">Sobre Mim</h2>
      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <p class="lead">Olá, me chamo Vitor Santos do Nascimento.<br><br>
            Atualmente estou cursando o ultimo semestre do curso superior de Análise e Desenvolvimento de Sistemas,
            Fornecido
            pelo Instituto Federal de Mato Grosso do Sul, busco um emprego na área do desenvolvimento para que possa
            colocar minhas habilidades em pratica e aprender cada vez mais, contribuindo assim com os meus interesses
            e consequentemente com os interesses da empresa.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/vitor1.jpg" alt="">
        </div>
      </div>
      <hr class="featurette-divider">
      <h2 id="informacoes" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
        class="featurette-heading">Informações</h2>
      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7">
          <div style="margin-left:3%; text-align: left">
            <p class="lead">Data de Nascimento: <span class="direita">16/11/1996</span></p>
            <p class="lead">Natural de:<span class="direita"> São Gabriel do Oeste</span></p>
            <p class="lead">Estado Civil:<span class="direita"> Solteiro</span></p>
            <p class="lead">E-mail:<span class="direita"> vitor7_sn@hotmail.com</span></p>
            <p class="lead">Telefone:<span class="direita"> (67) 99138-2836</span></p>
            <p class="lead">Endereço: <span class="direita">R. Takashi Tuda, 763-Nova Andradina/MS</span></p>
          </div>
        </div>
        <div class="col-md-5">
          <img class="d-block w-100" style="height:90%;width:100%;" src="imagens/informacoes.jpg" alt="">
        </div>
      </div>
    </section>
    <hr class="featurette-divider">
    <h2 id="habilidades" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
      class="featurette-heading">Habilidades</h2>
    <hr class="featurette-divider">
    <div class="tab-pane active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <section id="services" style="background-color: #eee">
        <div class="container">
          <div class="row services">
            <div class="col-md-12">
              <h2 class="heading">Habilidades</h2>
              <div class="row justify">
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones/binario.png" alt="">
                    </div>
                    <h4>Programação</h4>
                    <p class="lead">Possuo conhecimento em várias linguagens de programação, estruturação e estilização.
                    </p>
                    <ul>
                      <li>C</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>PHP</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones/BD.png" alt="">
                    </div>
                    <h4>Banco de Dados</h4>
                    <p class="lead">
                      Tenho conhecimento em MySQL e postigres, já fiz vários
                      projetos integrados á banco de dados, alguns estão disponiveis em meu portifólio.
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones//suporte.png" alt="">
                    </div>
                    <h4>Suporte Técnico</h4>
                    <p class="lead">
                      Durante 10 meses fiz estágio na empresa Ganso Sistemas, exercendo a função de análista de suporte,
                      possuo experiência com formatação e manutenção de computadores.
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones/equipe.png" alt="">
                    </div>
                    <h4>Trabalho em equipe</h4>
                    <p class="lead">
                      Possuo uma excelente comunicação e facilidade em me relacionar, buscando sempre
                      a melhor forma de contribuir com o grupo para assim acharmos juntos melhores soluções para nossos
                      clientes.
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones/negocio.png" alt="">
                    </div>
                    <h4>Negócios</h4>
                    <p class="lead">
                      Possuo experiencia com o varejo, sendo que ja trabalhei durante 1 ano como operador
                      de caixa em uma grande empresa e também ja trabalhei por 10 meses em uma software house
                      que desenvolve softwares para varejo, sendo assim conheço tanto o lado do cliente quanto o lado
                      dos
                      desenvolvedos, tenho grande conhecimento em tributação.
                    </p>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="box">
                    <div class="icon">
                      <img class="ico" src="imagens/icones/academico.png" alt="">
                    </div>
                    <h4>Formação Acadêmica</h4>
                    <p class="lead">
                      Cursando ensino superior (análise e desenvolvimento de sistemas - 6 ° semestre). <br>
                      Excel Básico (30 horas) - Senac. <br>
                      Curso petróleo e gás – 120 horas – univercamp – 2014-2015 (sendo 30 horas em auxiliar de
                      logística).<br>
                      Conhecimentos avançados em informática.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <h2 id="experiencias" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
      class="featurette-heading">Experiências</h2>

    <hr class="featurette-divider">

    <div class="row featurette" style="width: 95%;margin-left: 2%; text-align: center;">
      <div class="col-md-7 order-md-2">
        <p class="nomeEmpresa">Hipermercado Extra</p>
        <p class="tituloFuncao">Operador de hipermercado</h5>
          <p class="lead">
            Sendo como função primaria operar o caixa, atuando também como
            repositor em áreas como mercearia e bazar - experiência em atendimento ao cliente.
          </p>

          <p class="tempoServico">DEZEMBRO 2015 - NOVEMBRO 2016</p>
      </div>
      <div class="col-md-5 order-md-1">

        <img class="d-block w-100" style="height:90%;width:100%;" src="imagens/extra.jpg" alt="">

      </div>
    </div>
    <hr class="featurette-divider">


    <hr class="featurette-divider">

    <div class="row featurette" style="width: 95%;margin-left: 2%; text-align: center;">
      <div class="col-md-7 order-md-2">
        <p class="nomeEmpresa">Sistemas Ganso</p>
        <p class="tituloFuncao">Estágiario</h5>
          <p class="lead">
            Exercendo a função de análista de suporte, nesse emprego aprendi muito sobre tributação e sobre o
            funcionamento de uma
            software house, pude aprimorar meus conhecimentos sobre o varejo e adiquiri mais qualidade em minha didatica
            sendo sempre
            bem avaliado pelos clientes e por meus superiores.
          </p>

          <p class="tempoServico">FEVEREIRO 2018 - DEZEMBRO 2018</p>
      </div>
      <div class="col-md-5 order-md-7">
        <img class="d-block w-100" style="height:80%;width:100%;" src="imagens/ganso.png" alt="">
      </div>
    </div>
    <hr class="featurette-divider">

    <hr class="featurette-divider">

    <div class="row featurette" style="width: 95%;margin-left: 2%; text-align: center;">
      <div class="col-md-7 order-md-2">
        <p class="nomeEmpresa">Instituto Federal de Mato Grosso do Sul</p>
        <p class="tituloFuncao">Monitor do curso</h5>
          <p class="lead">
            Exercendo a função de monitor do curso de análise e desenvolvimento de sistemas, retirando duvidas de alunos
            e auxiliando em atividades em sala de aula, ao exercer essa atividade pude melhorar ainda
            mais a minha didática e minhas habilidades de desenvolvimento e análise de sistemas.
          </p>
          <p class="tempoServico">FEVEREIRO 2018 - AGOSTO 2018</p>
      </div>
      <div class="col-md-5 order-md-1">

        <img class="d-block w-100" style="height:100%;width:100%;" src="imagens/ifms.jpg" alt="">

      </div>
    </div>
    <hr class="featurette-divider">
    <h2 id="portifolio" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
      class="featurette-heading">Portifólio</h2>
    <hr class="featurette-divider">

    <div class="album py-5 bg-light">
      <div class="container">

        <div class="row">
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <a target="_blank" href="https://github.com/VsN7/NotacaoPolonesa"><img
                  class="bd-placeholder-img card-img-top" width="100%" height="225" src="imagens/poloneza.png"
                  alt=""></a>
              <div class="card-body">
                <p class="card-text">
                  <h3>Notação Polonesa</h3><br>Trabalho individual de faculdade desenvolvido em linguagem C.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a target="_blank" href="https://github.com/VsN7/NotacaoPolonesa"><button type="button"
                        class="btn btn-sm btn-outline-secondary">Mais detalhes</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <a target="_blank" href="https://github.com/VsN7/esteticar"><img class="bd-placeholder-img card-img-top"
                  width="100%" height="225" src="imagens/esteticar.jpeg" alt=""></a>
              <div class="card-body">
                <p class="card-text">
                  <h3>Estéticar</h3><br>Estre projeto é um site e tem como objetivo divulgar a empresa Estéticar
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a target="_blank" href="https://github.com/VsN7/esteticar"><button type="button"
                        class="btn btn-sm btn-outline-secondary">Mais detalhes</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div width="100%" height="225">
                <a target="_blank" href="https://github.com/VsN7/Portifolio"><img
                    class="bd-placeholder-img card-img-top" width="100%" height="225" src="imagens/skill.jpg"
                    alt=""></a>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h3>Portifólio</h3><br>Estre projeto é um site e tem como objetivo divulgar minhas habilidades
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a target="_blank" href="https://github.com/VsN7/Portifolio"><button type="button"
                        class="btn btn-sm btn-outline-secondary">Mais detalhes</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <div width="100%" height="225">
                <a target="_blank" href="https://github.com/VsN7/JogoDaVelha"><img
                    class="bd-placeholder-img card-img-top" width="100%" height="225" src="imagens/jogoVelha.PNG"
                    alt=""></a>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <h3>Jogo da velha</h3><br>Estre projeto é um jogo da velha com foco em JavaScript
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a target="_blank" href="https://github.com/VsN7/JogoDaVelha"><button type="button"
                        class="btn btn-sm btn-outline-secondary">Mais detalhes</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <hr class="featurette-divider">
    <h2 id="contato" style="margin-top:2%;text-align: center;font-size: 225%; font-weight: bold;"
      class="featurette-heading">Contato</h2>
    <hr class="featurette-divider">

    <footer style="text-align: center;padding: 4%; margin-top:3%;">

      <p class="lead" style="margin-bottom:6%; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
        Telefone: (67) 99138-2836</p>

      <a style="color:#212529;" href="https://github.com/VsN7" target="_blank"><i style="font-size:300%; "
          class="fab fa-github-square"></i></a> <a style="color:#212529;"
        href="https://www.linkedin.com/in/vitor-santos-6290b2182/" target="_blank"><i
          style="font-size:300%;margin-left: 4%;" class="fab fa-linkedin-in"></i> </a> <a style="color:#212529;"
        target="_blank" href="https://www.facebook.com/profile.php?id=100012323829171"><i
          style="font-size:300%;margin-left: 4%;" class="fab fa-facebook-f"></i></a><a style="color:#212529;"
        href="#informacoes"><i style="font-size:300%;margin-left: 4%;" class="fas fa-at"></i></a>

      <p style="margin-top:4%; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">©Desenvolvido
        por Vitor Santos do Nascimento</p>
    </footer>





    <!-- Tab panes -->


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="CSS/jquery/dist/jquery.js"></script>
    <script src="CSS/popper/dist/umd/popper.js"></script>
    <script src="CSS/bootstrap/dist/js/bootstrap.js"></script>

</body>

</html>

`````
### CSS

`````css
  a{
    font-weight: bold;
  }
  .tab-pane,#nome{
    margin-top: 4%;
  }
  nav{
    color: antiquewhite;
    background-color: rgba(0, 0, 0, 0.692);
  }
  .nav-link{
    text-decoration: none;
    color: #fff;
  }

  .cc-profile-image{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-30%);
  }

  #myTab{
    width: 100%;
  }
  #nome{
    color: #fff;
    margin-top: 2%;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    font-family:gabriola, sans-serif;
  }
  #sub{
    color: #fff;
    margin-top: 1%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    font-family:'Courier New', Courier, monospace;
  }
  .ico{
    max-width: 40%;
  }
  .tempoServico{
    font-size: 70%;
  }
  .nomeEmpresa{
    font-size: 150%;
    font-weight: bold;
  }
  .tituloFuncao{
    font-weight: bold;
    font-size: 120%;
  }
  .direita{
    width: 60%;
    float: right;
  }
 .featurette{
    width: 90%;
  }
  
.fundo{
  background: url('../imagens/teste.png') no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 750px;
}
  [data-target]{
    background-color: rgba(0, 0, 0, 0);
    transition: 1.5s;
  }
  [data-anime]{
    opacity: 0;
    transition: .5s;
  }
  [data-anime="left"]{
    transform: translate3d(-3%,0,0)
  }
  [data-anime="right"]{
    transform: translate3d(3%,0,0)
  }
  [data-anime="top"]{
    transform: translate3d(0,50px,0)
  }

  [data-target="nav"]{
    background-color: rgba(0, 0, 0, 0);
  }
  
  [data-target].animateNav{
    background-color: rgba(0, 0, 0, 0.747);
  }

  [data-anime].animate{
    opacity: 1;
    transform: translate3d(0px,0px,0px);
  }
  
  `````
  
  ### JavaScript
  
  `````js
  
  



const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


const target = document.querySelectorAll('[data-anime]');
const naigation = document.querySelectorAll('[data-target]');
const animationClass = 'animate';
const animationNav = 'animateNav';
let i=0;
let primeiro =0;
function animeScroll(){
    
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    
    target.forEach(function(element){
        
        if((windowTop) > element.offsetTop){

            if(primeiro ==0){
                i=windowTop;
                primeiro ==1;
            }
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);


        }
        if(windowTop> 1000){
            

            naigation.forEach(function(element){
                element.classList.add(animationNav);
            
        })
        }else{
            naigation.forEach(function(element){
                element.classList.remove(animationNav);
            
        })
        }
        
    })
}
animeScroll();

if(target.length){
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}

//'nav a[href^="#habilidades"]'
const menuItens = document.querySelectorAll('nav a');
menuItens.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event){
    event.preventDefault();
    const elemento = event.target;
    const id = elemento.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    window.scroll({
        top: to - 80,
        behavior: "smooth"
        
    });
}


`````

