db.cliente_pedidos.insert([
    {
      idcliente: 1,
      nome: 'Ana',
      endereco_cobranca: { rua: 'A', cidade: 'Petrópolis', estado: 'RJ', CEP: '20000-000', tipo: 'cobrança' },
      endereco_remessa: [
        { nr_endereco_remessa: 1, rua: 'B', cidade: 'Rio de Janeiro', estado: 'RJ', CEP: '25000-000' },
        { nr_endereco_remessa: 2, rua: 'C', cidade: 'Rio de Janeiro', estado: 'RJ', CEP: '26000-000' }
      ],
      pedidos: [
        {
          idpedido: 1,
          data_pedido: new Date("2020-10-06"),
          item: [
            { idproduto: 10, nome_produto: 'produto_1', quantidade_vendida: 10, preco_venda: 25.50, nrpagamento: 10 },
            { idproduto: 11, nome_produto: 'produto_2', quantidade_vendida: 20, preco_venda: 35.00, nrpagamento: 15 }
          ]
        },
        {
          idpedido: 2,
          data_pedido: new Date("2020-10-07"),
          item: [
            { idproduto: 12, nome_produto: 'produto_3', quantidade_vendida: 15, preco_venda: 5.50, nrpagamento: 101 },
            { idproduto: 13, nome_produto: 'produto_4', quantidade_vendida: 40, preco_venda: 5.00, nrpagamento: 150 }
          ]
        }
      ]
    },
  
    {
      idcliente: 2,
      nome: 'Bruno',
      endereco_cobranca: { rua: 'D', cidade: 'Niterói', estado: 'RJ', CEP: '27000-000', tipo: 'cobrança' },
      endereco_remessa: [
        { nr_endereco_remessa: 1, rua: 'E', cidade: 'Niterói', estado: 'RJ', CEP: '27500-000' }
      ],
      pedidos: [
        {
          idpedido: 3,
          data_pedido: new Date("2020-11-01"),
          item: [
            { idproduto: 14, nome_produto: 'produto_5', quantidade_vendida: 5, preco_venda: 15.00, nrpagamento: 201 }
          ]
        }
      ]
    },
  
    {
      idcliente: 3,
      nome: 'Carla',
      endereco_cobranca: { rua: 'F', cidade: 'São Paulo', estado: 'SP', CEP: '01000-000', tipo: 'cobrança' },
      endereco_remessa: [],
      pedidos: [
        {
          idpedido: 4,
          data_pedido: new Date("2020-11-10"),
          item: [
            { idproduto: 15, nome_produto: 'produto_6', quantidade_vendida: 30, preco_venda: 12.00, nrpagamento: 301 }
          ]
        }
      ]
    },
  
    {
      idcliente: 4,
      nome: 'Diego',
      endereco_cobranca: { rua: 'G', cidade: 'Belo Horizonte', estado: 'MG', CEP: '30000-000', tipo: 'cobrança' },
      endereco_remessa: [
        { nr_endereco_remessa: 1, rua: 'H', cidade: 'Contagem', estado: 'MG', CEP: '31000-000' }
      ],
      pedidos: []
    },
  
    {
      idcliente: 5,
      nome: 'Elisa',
      endereco_cobranca: { rua: 'I', cidade: 'Curitiba', estado: 'PR', CEP: '80000-000', tipo: 'cobrança' },
      endereco_remessa: [],
      pedidos: [
        {
          idpedido: 5,
          data_pedido: new Date("2020-12-01"),
          item: [
            { idproduto: 16, nome_produto: 'produto_7', quantidade_vendida: 8, preco_venda: 20.00, nrpagamento: 401 }
          ]
        }
      ]
    }
  ]);
  