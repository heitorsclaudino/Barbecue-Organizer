let data = {
    custoTotal: 0,
    custoPorPessoa: 0,
    pessoas: {
        total: 0,
        totalAdultos: 0,
        "Homens": 0,
        "Mulheres": 0,
        "Crianças": 0
    },
    comidas: {
        totalCarne: 0,
        totalLitros: 0,
        totalItensAssados: 0,
        totalLitrosAdultos: 0,
        totalLitrosCriancas: 0,
        totalItensBebidas: 0,
        totalItensBebidasCriancas: 0,
        "Carne Bovina": [
            {
                nome: "Fraldinha",
                status: false,
                preco: 40.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Contra Filé", 
                status: false,
                preco: 45.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Maminha",
                status: false,
                preco: 46.00,
                quantidade: 0,
                precoTotal: 0
            }
        ],
        "Carne Suina" : [
            {
                nome: "Picanha",
                status: false,
                preco: 46.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Linguiça",
                status: false,
                preco: 28.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Paleta",
                status: false,
                preco: 30.00,
                quantidade: 0,
                precoTotal: 0
            }
        ],
        "Frango": [
            {
                nome: "Coxa",
                status: false,
                preco: 15.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Coração",
                status: false,
                preco: 25.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Asa",
                status: false,
                preco: 20.00,
                quantidade: 0,
                precoTotal: 0
            }
        ],
        "Bebidas": [
            {
                nome: "Refrigerante",
                status: false,
                preco: 10.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Suco",
                status: false,
                preco: 7.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Chá Gelado",
                status: false,
                preco: 6.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Água",
                status: false,
                preco: 3.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Cerveja",
                status: false,
                preco: 16.00,
                quantidade: 0,
                precoTotal: 0
            },
        ],
        "Acompanhamentos": [
            {
                nome: "Pão de Alho (pacote)",
                status: false,
                preco: 10.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Queijo (pacote)",
                status: false,
                preco: 30.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Farofa (saco 500g)",
                status: false,
                preco: 8.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Pão Francês (saco)",
                status: false,
                preco: 5.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Maionese (porção)",
                status: false,
                preco: 10.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Arroz (panela)",
                status: false,
                preco: 4.00,
                quantidade: 0,
                precoTotal: 0
            },
        ],
        "Sem Falta": [
            {
                nome: "Carvão (kg)",
                status: true,
                preco: 25.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Acendedor/Fósforo",
                status: true,
                preco: 10.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Sal de Grosso (kg)",
                status: true,
                preco: 5.00,
                quantidade: 0,
                precoTotal: 0
            },
            {
                nome: "Descartáveis (10)",
                status: true,
                preco: 20.00,
                quantidade: 0,
                precoTotal: 0
            }
        ]
    },
    info: {
        nomeChurras: "",
        evento: {
            organizador: "",
            telefone: ""
        },
        local: {
            endereco: "",
            cep: "",
            custo: 0
        }
    }
}

export default data;