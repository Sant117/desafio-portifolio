// 1. ANIMAÇÃO DE APARIÇÃO SUAVE DAS SEÇÕES
   const configuracaoObservador = {
       root: null,
       rootMargin: '0px',
       threshold: 0.1
   };


   const observador = new IntersectionObserver(function (entradas) {
       entradas.forEach(function (entrada) {
           if (entrada.isIntersecting) {
               entrada.target.style.opacity = "1";
               entrada.target.style.transform = "translateY(0)";
           }
       });
   }, configuracaoObservador);


   const secoes = document.querySelectorAll("section");
   secoes.forEach(function (secao) {
       secao.style.transition = "all 1s ease-out";
       secao.style.opacity = "0";
       secao.style.transform = "translateY(40px)";
       observador.observe(secao);
   });


   // 2. MANIPULAÇÃO DO FORMULÁRIO DE CONTATO
   const formulario = document.querySelector(".formulario-contato");
   if (formulario) {
       formulario.addEventListener("submit", function (evento) {
           evento.preventDefault();
           const nome = document.getElementById("nome").value.trim();
           const botaoEnviar = formulario.querySelector(".botao-enviar");
           const textoOriginalBotao = botaoEnviar.innerHTML;


           botaoEnviar.innerHTML = 'Enviando... <span class="material-symbols-outlined">hourglass_top</span>';
           botaoEnviar.disabled = true;


           setTimeout(function () {
               botaoEnviar.innerHTML = 'Mensagem Enviada! <span class="material-symbols-outlined">check_circle</span>';
               formulario.reset();
               setTimeout(function () {
                   botaoEnviar.innerHTML = textoOriginalBotao;
                   botaoEnviar.disabled = false;
               }, 3000);
           }, 1500);
       });
   }
