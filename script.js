/* =========================================================
   CONFIGURAÇÃO DO SUPABASE
========================================================= */

const SUPABASE_URL =
    "https://cmwxdtvqwlyipezvybyb.supabase.co";

const SUPABASE_ANON_KEY =
    "sb_publishable_ZnjpWNFyTgBjUegPg5EW7w_R2hc3Yf2";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );


/* =========================================================
   PRODUTOS
========================================================= */

const produtos = [

    {
        id: 1,
        nome: "Caixa metálica para instrumental — tamanho grande",
        preco: 100.00
    },

    {
        id: 2,
        nome: "Afastadores de Minnesota",
        preco: 15.00
    },

    {
        id: 3,
        nome: "Afastador de língua",
        preco: 34.00
    },

    {
        id: 4,
        nome: "Cabo de bisturi nº 3 ou 7 — cabo redondo",
        preco: 10.00
    },

    {
        id: 5,
        nome: "Descolador de Molt 2/4",
        preco: 63.00
    },

    {
        id: 6,
        nome: "Descolador de Molt simples nº 9",
        preco: 60.00
    },

    {
        id: 7,
        nome: "Sindesmótomo",
        preco: 19.00
    },

    {
        id: 8,
        nome: "Jogo de alavancas Seldin — 1L, 1R e nº 2 reta",
        preco: 119.15
    },

    {
        id: 9,
        nome: "Jogo de alavancas Heidbrink",
        preco: 124.15
    },

    {
        id: 10,
        nome: "Fórceps 150",
        preco: 92.05
    },

    {
        id: 11,
        nome: "Fórceps 151",
        preco: 92.05
    },

    {
        id: 12,
        nome: "Fórceps 16",
        preco: 92.05
    },

    {
        id: 13,
        nome: "Fórceps 17",
        preco: 92.05
    },

    {
        id: 14,
        nome: "Fórceps 18 L",
        preco: 92.05
    },

    {
        id: 15,
        nome: "Fórceps 18 R",
        preco: 92.05
    },

    {
        id: 16,
        nome: "Fórceps 69",
        preco: 92.05
    },

    {
        id: 17,
        nome: "Cureta de Lucas nº 86",
        preco: 28.12
    },

    {
        id: 18,
        nome: "Lima para osso nº 12",
        preco: 58.19
    },

    {
        id: 19,
        nome: "Pinça Collin",
        preco: 104.66
    },

    {
        id: 20,
        nome: "Pinça Backhaus",
        preco: 57.22
    },

    {
        id: 21,
        nome: "Pinça Allis",
        preco: 39.76
    },

    {
        id: 22,
        nome: "Alveolótomo — pinça goiva",
        preco: 94.96
    },

    {
        id: 23,
        nome: "Pinça hemostática curva ",
        preco: 36.76
    },

    {
        id: 24,
        nome: "Tesoura Metzenbaum",
        preco: 88.00
    },

    {
        id: 25,
        nome: "Cubas metálicas",
        preco: 21.33
    },

    {
        id: 26,
        nome: "Porta-agulha Mayo-Hegar",
        preco: 34.82
    },

    {
        id: 27,
        nome: "Pinça anatômica denteada",
        preco: 18.91
    },

    {
        id: 28,
        nome: "Tesoura Goldman Fox — reta",
        preco: 45.49
    }

];


/* =========================================================
   IMAGENS DOS PRODUTOS

   Quando você colocar uma nova imagem na pasta "img",
   basta adicionar aqui:
   id: "img/nome-da-imagem.png"
========================================================= */

const imagensProdutos = {

    1: "img/caixa.png",

    2: "img/afastador.png",

    3: "img/Afastador de língua.png",

    4: "img/cabo de bisturi.png",

    5: "img/Descolador de Molt 24.png",

    6: "img/Descolador de Molt simples nº 9.png",

    7: "img/Sindesmótomo.png",

    8: "img/Jogo de alavancas Seldin — 1L, 1R e nº 2 reta.png",

    9: "img/Jogo de alavancas Heidbrink.png",

    10: "img/Fórceps 150.png",

    11: "img/Fórceps 151.png",

    12:"img/Fórceps 16.png",

    13:"img/Fórceps 17.png",

    14:"img/Fórceps 18 L.png",

    15: "img/Fórceps 18 R.png",

    16: "img/Fórceps 69.png",

    17: "img/Cureta de Lucas nº 86.png",

    18: "img/Lima Para Osso Buck 11-12.png",

    19: "img/Pinça Collin.png",

    20: "img/Pinça Backhaus.png",

    21: "img/Pinça Allis.png",

    22: "img/Goiva Alexander.png",

    23: "img/Pinça hemostática curva.png",

    24: "img/Tesoura Metzenbaum Delicada Reta.png",

    25: "img/Cubas metálicas.png",

    26: "img/Porta Agulha Mayo Hegar.png",

    27: "img/Pinça anatômica denteada.png",

    28: "img/Tesoura Goldman Fox reta.png"

  
};


/* =========================================================
   PREÇOS DE COBRANÇA
========================================================= */

const precosCobranca = {

    1: 103.59,
    2: 15.97,
    3: 35.55,
    4: 10.81,
    5: 65.45,
    6: 62.35,
    7: 20.09,
    8: 123.33,
    9: 128.48,
    10: 95.39,
    11: 95.39,
    12: 95.39,
    13: 95.39,
    14: 95.39,
    15: 95.39,
    16: 95.39,
    17: 29.49,
    18: 60.49,
    19: 108.39,
    20: 59.49,
    21: 41.49,
    22: 98.39,
    23: 38.40,
    24: 80.00,
    25: 22.49,
    26: 36.40,
    27: 20.00,
    28: 47.40

};


function obterPrecoCobranca(produto) {

    if (!produto) {
        return null;
    }

    return precosCobranca[produto.id];

}


/* =========================================================
   VARIÁVEIS
========================================================= */

let escolhidos = [];
let produtosReservados = [];
let produtoSelecionado = null;


/* =========================================================
   FORMATAÇÃO DE PREÇO
========================================================= */

function formatarPreco(valor) {

    if (
        valor === null ||
        valor === undefined
    ) {

        return "Preço a definir";

    }

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================================================
   CARREGAR PRODUTOS
========================================================= */

async function carregarProdutos() {

    const carregando =
        document.getElementById("carregando");

    const erro =
        document.getElementById("erro");

    try {

        const {
            data,
            error
        } = await supabaseClient
            .from("presentes")
            .select("id, status");

        if (error) {
            throw error;
        }

        produtosReservados =
            data
                .filter(
                    item =>
                        item.status !== "disponivel"
                )
                .map(
                    item =>
                        Number(item.id)
                );

        renderizarProdutos();

        carregando.classList.add("hidden");
        erro.classList.add("hidden");

    } catch (error) {

        console.error(
            "Erro ao carregar produtos:",
            error
        );

        carregando.classList.add("hidden");
        erro.classList.remove("hidden");

    }

}


/* =========================================================
   RENDERIZAR PRODUTOS
========================================================= */

function renderizarProdutos() {

    const container =
        document.getElementById("lista-produtos");

    container.innerHTML = "";

    produtos.forEach(produto => {

        const reservado =
            produtosReservados.includes(
                produto.id
            );

        const precoCobranca =
            obterPrecoCobranca(produto);

        const imagem =
            imagensProdutos[produto.id];

        const card =
            document.createElement("div");

        card.className =
            `produto ${reservado ? "reservado" : ""}`;


        /* =================================================
           IMAGEM
        ================================================= */

        let imagemHTML = "";

        if (imagem) {

            imagemHTML = `
                <div class="produto-imagem">

                    <img
                        src="${imagem}"
                        alt="${produto.nome}"
                        loading="lazy"
                    >

                </div>
            `;

        } else {

            imagemHTML = `
                <div class="produto-imagem produto-imagem-vazia">
                    <span>Imagem em breve</span>
                </div>
            `;

        }


        /* =================================================
           PRODUTO RESERVADO
        ================================================= */

        if (reservado) {

            card.innerHTML = `

                <div class="produto-nome">
                    ${produto.nome}
                </div>

                ${imagemHTML}

                <div class="produto-preco">
                    ${formatarPreco(precoCobranca)}
                </div>

                <button
                    class="btn-reservado"
                    disabled
                >
                    ✓ Já escolhido
                </button>

            `;

        }


        /* =================================================
           PRODUTO DISPONÍVEL
        ================================================= */

        else {

            card.innerHTML = `

                <div class="produto-nome">
                    ${produto.nome}
                </div>

                ${imagemHTML}

                <div class="produto-preco">
                    ${formatarPreco(precoCobranca)}
                </div>

                <button
                    class="btn-escolher"
                    onclick="abrirModal(${produto.id})"
                >
                    Quero presentear
                </button>

            `;

        }

        container.appendChild(card);

    });

    atualizarContador();

}


/* =========================================================
   CONTADOR
========================================================= */

function atualizarContador() {

    const contador =
        document.getElementById("contador");

    const disponiveis =
        produtos.filter(
            produto =>
                !produtosReservados.includes(
                    produto.id
                )
        ).length;

    contador.textContent =
        disponiveis;

}


/* =========================================================
   ABRIR MODAL
========================================================= */

function abrirModal(id) {

    const produto =
        produtos.find(
            item =>
                item.id === id
        );

    if (!produto) {
        return;
    }

    if (
        produtosReservados.includes(id)
    ) {

        alert(
            "Esse presente acabou de ser escolhido por outra pessoa. 🩷"
        );

        carregarProdutos();

        return;
    }

    const precoCobranca =
        obterPrecoCobranca(produto);

    if (
        precoCobranca === null ||
        precoCobranca === undefined
    ) {

        alert(
            "Este presente ainda não possui um preço definido."
        );

        return;
    }

    produtoSelecionado =
        produto;

    document.getElementById(
        "produto-modal"
    ).innerHTML = `

        ${produto.nome}

        <span class="preco">
            ${formatarPreco(precoCobranca)}
        </span>

    `;

    document.getElementById("nome").value =
        "";

    document.getElementById("email").value =
        "";

    document.getElementById("cpf").value =
        "";

    document.getElementById("mensagem").value =
        "";

    document
        .getElementById("mensagem-modal")
        .classList.add("hidden");

    document
        .getElementById("modal-reserva")
        .classList.remove("hidden");

    setTimeout(() => {

        document
            .getElementById("nome")
            .focus();

    }, 100);

}


/* =========================================================
   FECHAR MODAL
========================================================= */

function fecharModal() {

    document
        .getElementById("modal-reserva")
        .classList.add("hidden");

    produtoSelecionado = null;

}


/* =========================================================
   CRIAR CHECKOUT ASAAS
========================================================= */

async function criarCheckoutAsaas(
    nomePresente,
    valorPresente,
    produtoId
) {

    const externalReference =
        `presente-${produtoId}-${Date.now()}`;

    const {
        data,
        error
    } = await supabaseClient.functions.invoke(
        "criar-pix",
        {
            body: {

                amount:
                    Number(
                        Number(valorPresente)
                            .toFixed(2)
                    ),

                description:
                    nomePresente,

                external_reference:
                    externalReference

            }
        }
    );

    if (error) {

        console.error(
            "Erro ao chamar criar-pix:",
            error
        );

        throw new Error(
            "Não foi possível iniciar o pagamento. Tente novamente."
        );

    }

    if (
        !data ||
        !data.success
    ) {

        console.error(
            "Resposta inválida do Checkout:",
            data
        );

        throw new Error(
            data?.error ||
            "Não foi possível criar o pagamento."
        );

    }

    if (!data.checkout_url) {

        throw new Error(
            "O Checkout foi criado, mas o link de pagamento não foi recebido."
        );

    }

    return data;

}


/* =========================================================
   RESERVAR PRESENTE
========================================================= */

async function reservarPresente(event) {

    event.preventDefault();

    if (!produtoSelecionado) {
        return;
    }

    const nome =
        document
            .getElementById("nome")
            .value
            .trim();

    const email =
        document
            .getElementById("email")
            .value
            .trim();

    const cpf =
        document
            .getElementById("cpf")
            .value
            .trim();

    const mensagem =
        document
            .getElementById("mensagem")
            .value
            .trim();

    const botao =
        document.getElementById(
            "btn-confirmar"
        );

    const mensagemModal =
        document.getElementById(
            "mensagem-modal"
        );


    /* =====================================================
       VALIDAÇÕES
    ===================================================== */

    if (!nome) {

        mensagemModal.textContent =
            "Por favor, coloque seu nome.";

        mensagemModal.classList.remove(
            "hidden"
        );

        return;

    }

    if (!email) {

        mensagemModal.textContent =
            "Por favor, coloque seu e-mail.";

        mensagemModal.classList.remove(
            "hidden"
        );

        return;

    }

    if (!cpf) {

        mensagemModal.textContent =
            "Por favor, coloque seu CPF.";

        mensagemModal.classList.remove(
            "hidden"
        );

        return;

    }

    const cpfNumeros =
        cpf.replace(/\D/g, "");

    if (
        cpfNumeros.length !== 11
    ) {

        mensagemModal.textContent =
            "Por favor, coloque um CPF válido.";

        mensagemModal.classList.remove(
            "hidden"
        );

        return;

    }


    /* =====================================================
       VALOR DE COBRANÇA
    ===================================================== */

    const valorCobranca =
        obterPrecoCobranca(
            produtoSelecionado
        );

    if (
        valorCobranca === null ||
        valorCobranca === undefined
    ) {

        mensagemModal.textContent =
            "Este presente ainda não possui um preço definido.";

        mensagemModal.classList.remove(
            "hidden"
        );

        return;

    }


    /* =====================================================
       PREPARAR DADOS
    ===================================================== */

    const nomePresente =
        produtoSelecionado.nome;

    const valorPresente =
        valorCobranca;

    const produtoId =
        produtoSelecionado.id;


    /* =====================================================
       INICIAR PROCESSO
    ===================================================== */

    botao.disabled = true;

    botao.textContent =
        "Gerando pagamento...";

    mensagemModal.classList.add(
        "hidden"
    );

    try {


        /* =================================================
           1. CRIAR CHECKOUT ASAAS PRIMEIRO
        ================================================= */

        const checkout =
            await criarCheckoutAsaas(
                nomePresente,
                valorPresente,
                produtoId
            );


        /* =================================================
           2. AGORA RESERVAR O PRESENTE
        ================================================= */

        botao.textContent =
            "Confirmando presente...";

        const {
            data: reservaData,
            error: reservaError
        } = await supabaseClient.rpc(
            "reservar_presente_com_pagamento",
            {
                p_presente_id:
                    produtoId,

                p_nome:
                    nome,

                p_mensagem:
                    mensagem || null,

                p_email:
                    email,

                p_documento_tipo:
                    "CPF",

                p_documento_numero:
                    cpfNumeros,

                /* ID do Checkout Asaas */
                p_pagamento_id:
                    checkout.checkout_id
            }
        );

        if (reservaError) {
            throw reservaError;
        }

        const reservaResultado =
            Array.isArray(reservaData)
                ? reservaData[0]
                : reservaData;

        if (
            !reservaResultado ||
            !reservaResultado.success
        ) {

            throw new Error(
                reservaResultado?.message ||
                "Este presente já foi escolhido por outra pessoa."
            );

        }


        /* =================================================
           3. ATUALIZAR LISTA LOCAL
        ================================================= */

        produtosReservados.push(
            produtoId
        );

        escolhidos =
            escolhidos.filter(
                id =>
                    id !== produtoId
            );

        fecharModal();

        renderizarProdutos();


        /* =================================================
           4. ENVIAR PARA O CHECKOUT ASAAS
        ================================================= */

        window.location.href =
            checkout.checkout_url;


    } catch (error) {

        console.error(
            "Erro ao reservar/criar pagamento:",
            error
        );

        mensagemModal.textContent =
            error.message ||
            "Não foi possível concluir a reserva. Tente novamente.";

        mensagemModal.classList.remove(
            "hidden"
        );

    } finally {

        botao.disabled = false;

        botao.textContent =
            "Confirmar presente";

    }

}


/* =========================================================
   TELA PIX
   Mantida para não quebrar o HTML atual.
   O pagamento agora é feito pelo Checkout Asaas.
========================================================= */

function abrirTelaPix(
    nomePresente,
    valor
) {

    const modalPix =
        document.getElementById(
            "modal-pix"
        );

    const descricao =
        document.getElementById(
            "pix-descricao"
        );

    const valorPix =
        document.getElementById(
            "pix-valor"
        );

    const qrCode =
        document.getElementById(
            "pix-qr-code"
        );

    const loading =
        document.getElementById(
            "pix-qr-loading"
        );

    const copiaArea =
        document.getElementById(
            "pix-copia-area"
        );

    const codigoPix =
        document.getElementById(
            "pix-codigo"
        );

    const status =
        document.getElementById(
            "pix-status"
        );

    descricao.textContent =
        `O presente "${nomePresente}" foi reservado com sucesso.`;

    valorPix.textContent =
        formatarPreco(valor);

    qrCode.src = "";

    qrCode.classList.add(
        "hidden"
    );

    loading.textContent =
        "O pagamento será realizado no Checkout.";

    loading.classList.remove(
        "hidden"
    );

    copiaArea.classList.add(
        "hidden"
    );

    codigoPix.value =
        "";

    status.textContent =
        "Aguardando pagamento...";

    modalPix.classList.remove(
        "hidden"
    );

}


/* =========================================================
   FECHAR PIX
========================================================= */

function fecharPix() {

    document
        .getElementById("modal-pix")
        .classList.add("hidden");

}


/* =========================================================
   COPIAR PIX
   Mantido para não quebrar o HTML atual.
========================================================= */

function configurarBotaoCopiarPix() {

    const botao =
        document.getElementById(
            "btn-copiar-pix"
        );

    if (!botao) {
        return;
    }

    botao.addEventListener(
        "click",
        async () => {

            const codigo =
                document
                    .getElementById(
                        "pix-codigo"
                    )
                    .value;

            if (!codigo) {
                return;
            }

            try {

                await navigator.clipboard.writeText(
                    codigo
                );

                botao.textContent =
                    "Copiado ✓";

                setTimeout(() => {

                    botao.textContent =
                        "Copiar";

                }, 2000);

            } catch (error) {

                console.error(
                    "Erro ao copiar Pix:",
                    error
                );

            }

        }
    );

}


/* =========================================================
   FORMULÁRIO
========================================================= */

document
    .getElementById("form-reserva")
    .addEventListener(
        "submit",
        reservarPresente
    );


/* =========================================================
   TECLA ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharModal();
            fecharPix();

        }

    }
);


/* =========================================================
   INICIAR
========================================================= */

configurarBotaoCopiarPix();

carregarProdutos();
