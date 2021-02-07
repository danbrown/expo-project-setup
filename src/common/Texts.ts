export default {
  //Setups
  moneyCurrency: "R$",

  // Tabs
  routes: {
    screenLogin: "Login",
    screenCreateAccount: "Criar Conta",
    screenInsertLocation: "Inserir Local",
    screenCheckLocation: "Conferir Endereço",
    screenCheckData: "Conferir Dados",
    screenHome: "Início",
    screenSearch: "Busca",
    screenCategories: "Categorias",
    screenFeed: "Resultados",
    screenSingle: "Produto",
    screenCart: "Carrinho",
    screenCheckout: "Finalizar Pedido",
    screenOrders: "Pedidos",
    screenOrderDetails: "Detalhes do Pedido",
    screenCoupons: "Meus Cupons",
    screenNews: "Notícias",
    screenNotifications: "Notícias",
    screenProfile: "Perfil",
    screenProfileDetails: "Meus Dados",
    screenDeliveryDates: "Horário de Funcionamento",
    screenAddresses: "Meus Endereços",
    createAddress: "Criar Endereço",
    screenHelp: "Ajuda",
    screenContact: "Contato",
    screenTerms: "Termos de Serviço",
    screenExit: "Sair",
    screenPaymentOptions: "Opções de Pagamento",
    screenCreatePaymentCard: "Adicionar Cartão de Crédito",
    screenWishlist: "Lista de Desejos",
    screenConfig: "Opções",
    screenThankYou: "Obrigado!",
    screenDev: "DEV",
  },

  // Textos de validação
  validation: {
    number: "${path} deve ser um número!",
    required: "Preencha todos os campos!",
    email: "${value} não é um email válido!",
    cpfMin: "O ${path} deve possuir ${min} dígitos!",
    cpfMax: "O ${value} deve possuir ${max} dígitos!",
  },

  fieldLabels: {
    signupFname: "Primeiro Nome:",
    signupLname: "Sobrenome:",
    signupEmail: "Endereço de Email:",
    signupCPF: "CPF:",
    signupAddress1: "Logradouro:",
    signupAddress2: "Bairro:",
    signupNumber: "Número:",
    signupComplement: "Complemento:",
    signupCity: "Cidade:",
    signupState: "Estado:",
    signupCountry: "País:",
    signupZipcode: "CEP:",
    signupPhone: "Telefone:",
    searchZipcode: "Buscar Cep",
  },

  // Placeholders
  placeholder: {
    loginEmail: "Seu Email",
    loginPassword: "Sua Senha",
    signupFname: "Seu nome",
    signupLname: "Seu sobrenome",
    signupEmail: "bruce@wayne.com",
    signupCPF: "012345678910",
    signupAddress1: "Rua, Avenida, etc.",
    signupAddress2: "Bairro Exemplo",
    signupNumber: "999",
    signupComplement: "Opcional",
    signupCity: "Sua Cidade",
    signupState: "Seu Estado",
    signupCountry: "",
    signupZipcode: "Cep: 99999-999",
    signupPhone: "XX 99999-9999",
    cardHoldersName: "Nome do Titular",
    cardNumber: "Número do Cartão",
    cardExpiryDate: "Validade",
    cardCVC: "CVC/CVV",
    orderNotes:
      "Ex: Entregar em temperatura ambiente, \nbater no portão ou deixar com o porteiro.",
  },

  // error messages
  anErrorOccurred: "Um erro ocorreu",

  errors: {
    // order
    orderError:
      "Seu pedido não pode ser finalizado, por favor verifique suas informações",

    // cart
    cartDeletedItems:
      "Alguns itens no seu carrinho foram removidos pois são inválidos ou não existem",

    // delivery
    selectDeliveryMethod: "Escolha um método de Entrega!",
    noDeliveryMethodSelected:
      "Nenhum método de entrega selecionado, escolha um método de Entrega!",

    // coupon
    couponInvalid:
      "O seu código de cupom não existe, você digitou corretamente?",
    couponIndividualUse: "O cupom só pode ser usado individualmente!",
    couponExistingIndividual: "Algum cupom já aplicado exige uso individual!",
    couponUsageLimit: "Este cupom está esgotado!",
    couponUsageLimitByUser: "Você já usou este cupom!",
    couponBlockedUser: "Este cupom não pode ser usado por você!",
    couponAlreadyApplied: "Este cupom já foi aplicado!",
    couponExpired: "Este cupom expirou!",
    couponSaleItems: "Este cupom não pode ser usado em produtos na promoção",
    couponRequiredMinimum: "O valor mínimo para usar este cupom é de: ",

    // product
    validationProduct:
      "Alguns itens no seu carrinho foram removidos pois são inválidos ou não existem",

    // user
    userInvalid: "Seu usuário é inválido e não pode realizar compras",

    // payment
    paymentError:
      "Não foi possível efetuar o pagamento, tente alterar o método de pagamento ou usar outro cartão.",
    noPaymentMethodSelected:
      "Nenhum método de pagamento selecionado, escolha um método de pagamento ou cartão!",
  },

  // Dias da Semana
  week: {
    sunday: "Domingo",
    monday: "Segunda",
    tuesday: "Terça",
    wednesday: "Quarta",
    thursday: "Quinta",
    friday: "Sexta",
    saturday: "Sábado",
  },

  // Woocommerce Order states
  orderState: {
    pending: "Aguardando Pagamento",
    processing: "Processando",
    "on-hold": "Aguardando",
    completed: "Concluído",
    cancelled: "Cancelado",
    refunded: "Reembolsado",
    failed: "Erro",
    trash: "Lixeira",
  },

  // Wordpress Links Url Filters
  urlFilter: {
    product: ["produto", "produtos", "product", "products"],
    category: ["categoria-produto", "categoria", "category"],
  },

  // Modals
  modals: {
    menuModal: "MenuModal",
    validationErrorTitle: "Cheque seus dados",
    createAccountConclusionTitle: "Criação de Conta",
    createAccountConclusionTitleError: "Erro ao criar conta",
    devModal: "DevModal",
  },

  // Defaults
  welcome: "Seja\nBem-Vindo!",
  loading: "Carregando...",
  okay: "Okay",
  cancel: "Cancelar",
  continue: "Continuar",
  finish: "Finalizar",
  review: "Revisar",
  save: "Salvar",
  confirm: "Confirmar",
  send: "Enviar",
  or: "OU",
  add: "Adicionar",
  remove: "Remover",
  items: "itens",
  from: "Das",
  to: "até",
  hours: "hs",
  actions: "Ações",
  invalid: "Inválido",
  unavailable: "Indisponível",
  date: "Data",
  total: "Total",
  status: "Status",
  at: "às",

  // warnings
  cantConnectToServer: "Não foi possível conectar ao servidor!",
  cantConnectToInternet: "Não foi possível conectar ao internet!",
  cantCompleteOperation: "Não foi possível completar a operação!",
  cantDeliverToAddress: "Não podemos entregar neste endereço.",
  cantReceiveOrders: "Não estamos recebendo pedidos no momento!",
  seeOurDeliveryDates: "Veja aqui nossos horários de entrega",

  // Login
  loginStep1: "Entre com seu email:",
  loginStep2: "Agora, digite sua senha:",
  loginStep1Button: "Continuar",
  loginStep2Button: "Entrar",
  loginEmailPlaceholder: "Seu email",
  loginPasswordPlaceholder: "Sua Senha",

  // Create Account Address
  addressButtomManual: "Inserir Manualmente",
  addressButtomAutomatic: "Escolher no Mapa",
  createAccountPasswordLabel: "Insira uma senha para sua conta:",
  createAccountOrLogin: "Cadastrar ou Fazer Login",
  youNeedLoginToContinue: "Você precisa estar logado para continuar",
  youNeedLoginToBuy: "Você precisa estar logado para realizar compras",

  // Feeds
  homeTitle: "Início",
  shippingTo: "Entregar em: ",
  feedSeeMore: "Ver Mais",
  seeAllProducts: "Ver todos os produtos",
  noProductsFound: "Nenhum produto encontrado",

  // product page
  products: "Produtos",
  description: "Descrição",
  attributes: "Atributos",
  ratings: "Avaliações",

  // Search and Filters
  searchTitle: "Buscar",
  searchResults: "Pesquisa por: ",
  searchPlaceholder: "Pesquisar",

  foundItems: "Itens encontrados",
  noFoundItems: "Nenhum item encontrado",

  filter: "Filtrar",
  filters: "Filtros",
  filterPrice: "Preço",
  filterName: "Nome",
  filterApply: "Aplicar Filtros",
  filterPopularity: "Popular",
  filterRating: "Maior Avaliação",
  filterLowerPrice: "Menor Preço",
  filterHigherPrice: "Maior Preço",
  filterNewer: "Mais Novos",
  filterOlder: "Mais Antigos",
  filterAsc: "A - Z",
  filterDesc: "Z - A",

  category: "Categoria",
  categories: "Categorias",

  // Wishlist
  wishlistIsEmpty: "Sua lista está vazia!",

  // Cart
  addToCart: "Adicionar ao Carrinho",
  outOfStock: "Sem Estoque!",
  inStock: "em estoque",
  cartIsEmpty: "Seu Carrinho está vazio!",
  currentOrdersIsEmpty: "Você não tem nenhum pedido em andamento",
  ordersIsEmpty: "Você não tem nenhum pedido em seu histórico",
  updatedCart: "Carrinho Atualizado",
  invalidItems:
    "Alguns itens no seu carrinho foram removidos pois são inválidos ou não existem",
  returnToCart: "Voltar para o Carrinho?",

  // Order
  orderSucceeded: "Seu pedido foi criado com sucesso!",
  subtotal: "Subtotal",
  shipping: "Frete",
  closeOrder: "Fechar Pedido",
  checkoutResume: "Resumo do Pedido",
  checkoutItems: "Itens do Carrinho",
  checkoutTotal: "Total do Pedido",
  checkoutEnd: "Finalizar",
  totalDiscounts: "Total de Descontos",
  cartTotal: "Total do carrinho",
  checkoutAddress: "Endereço de Entrega",
  checkoutPayment: "Pagamento:",
  checkoutPaymentMethod: "Forma de Pagamento",
  checkoutDelivery: "Método de Entrega",
  checkoutDeliveryValue: "Valor do Frete: ",

  checkoutCoupons: "Cupons de Desconto",
  checkoutNoCoupons: "Não existem cupons disponíveis para esta compra",

  checkoutNote: "Notas do Pedido:",

  // coupons
  coupon: "Cupom",
  coupons: "Cupons",
  couponCode: "Código de Cupom",
  addCoupon: "Adicionar Cupom",
  availableCoupons: "Disponíveis",
  invalidCoupons: "Indisponíveis",
  emptyCoupons: "Nenhum cupom disponível",
  couponLimit: "Limite de uso: ",
  couponValidTime: "Disponível até:",
  couponErrorTitle: "Cupom Inválido",
  couponErrorMessage:
    "O seu código de cupom não existe, você digitou corretamente?",
  couponSuccessTitle: "Cupom Aplicado",
  couponSuccessMessage: "Código aplicado com sucesso!",

  // delivery
  disabledDeliveryDay: "Não entregamos pedidos",
  noShippingMethodsAvailable: "Nenhum método de entrega disponível",
  selectOneOption: "Escolha uma opção abaixo",
  freeShipping: "Frete Grátis",

  // payment
  creditCard: "Cartão de Crédito",
  addCard: "Adicionar Cartão",
  removeCard: "Remover Cartão",
  defineMainCard: "Definir Principal",
  noPaymentMethodSelected: "Nenhum método de pagamento selecionado",
  selectPaymentMethod: "Escolher método de pagamento",

  // Address Map and Order Map
  confirmAddress: "Confirmar Local",

  // order
  realizedAt: "Realizado em",
  orderConclusionAt: "Pedido concluído em",
  orderNumber: "Número do pedido",

  developerSign: "VendaMais App by DataBox",
};
