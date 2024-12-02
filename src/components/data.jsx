const data = [
    {
        "id": 1,
        "name": "Nike Downshifter",
        "src": "/src/assets/nike/downshifter-vista-externa.webp",
        "price":"R$ 294,49" ,
        "oldPrice": "R$ 449,99",
        "description":"Quer esteja começando sua jornada de corrida ou seja um especialista ansioso para mudar seu ritmo, o Downshifter 13 está pronto para o passeio.",
        "stars":4.51,
        "rating":"524 avaliaçoes"
    },
    {
        "id": 2,
        "name": "Nike Structure 25",
        "src": "/src/assets/nike/structure-25-vista-externa.webp",
        "price": "R$ 649,99",
        "oldPrice": "R$ 999,99",
        "description":"Com estabilidade onde você precisa, amortecimento onde você quer, o Structure 25 proporciona suporte para longas quilometragens, corridas curtas e até mesmo descanso antes do final do dia. Ele tem a estabilidade que você busca, lealdade desde a primeira amarração, testada e confiável, com um sistema de mediopé que oferece suporte total e amortecimento mais confortável do que antes.Suporte: AltoQuanto mais suporte o tênis proporciona, mais estabilidade ele pode dar ao seu passo natural. Uma combinação de suporte ajustado e amortecimento intencionalmente colocado ajuda você a se sentir seguro a cada passo. O Structure 25 é o tênis mais estável da Nike Running.",
        "reference":"Running | Nike | REF:38416712",
        "stars":5,
        "rating":"1 avaliação"
    },
    {
        "id": 3,
        "name": "Nike Journey Run",
        "src": "/src/assets/nike/journey-run-vista-externa.webp",
        "price": "R$ 557,99",
        "oldPrice": "R$ 799,99",
        "description":"Aproveite cada passo, rota e passeio no Nike Journey Run. Ele fará com que você caminhe e sorria em calçadas difíceis, graças às pilhas de espuma extra altas e ao amortecimento super macio. Ele é tão confortável que você ficará ansioso pelo próximo uso.Benefícios-O mesh trabalhado ajuda a manter os pés seguros.-Amortecimento extra no calcanhar e pontos de toque macios na língua e colarinho aumentam o conforto.-O solado de borracha oferece tração para os seus km.Detalhes do Produto-Detalhes refletivos-Não destinado a uso como Equipamento de Proteção Individual (EPI)",
        "reference":"Dia a dia | Nike | REF:38416713",
        "stars":4.8,
        "rating":"3 avaliaçoes"
    },
    {
        "id": 4,
        "name": "Nike SB Malor",
        "src": "/src/assets/nike/SB-malor-vista-externa.webp",
        "price": "R$ 399,99",
        "oldPrice": "R$ 549,99 ",
        "description":"Destrua este tênis! O SB Malor foi criado para skatistas iniciantes que precisam de um calçado que possa suportar longas horas de prática para aprimorar suas habilidades. Camadas de camurça e lona o mantêm durável, enquanto o solado combina um padrão espinha de peixe com o padrão circular do Air Force 1 para ajudar a acentuar a aderência e o movimento. Calce-o, o Malor está pronto para ser destruído.Benefícios-O cabedal em camurça e lona cria um visual clássico , feito para durar.-A construção vulcanizada une a sola à parte de cima para uma sensação flexível e aconchegante.",
        "reference":"Casual | Nike | REF:38416714",
        "stars":3.4,
        "rating":"5 avaliaçoes"
    },
    {
        "id": 5,
        "name": "Nike Air Max Nuaxis",
        "src": "/src/assets/nike/air-max-nuaxis-vista-externa.webp",
        "price": "R$ 399,99",
        "oldPrice": "R$ 549,99",
        "description":"Respirável e confortável, o Air Max Nuaxis está pronto para o dia a dia. Você pode contar com isso para ter uma boa aparência e se sentir bem também. Ele combina uma unidade Air intuitiva com elementos de design inspirados no Air Max 270, tornando o sapato perfeito para amarrar e usar.Benefícios-Cabedal de malha traz ajuda a manter você fresco.-Macio e confortável, o amortecimento Max Air oferece o nível certo de suporte.-Solado de borracha oferece proteção proteção. Air MaxVisual impressionante. Janela no solado. O lendário designer Tinker Hatfield aproveitou a arquitetura parisiense de dentro para fora para restabelecer a tecnologia Air como líder em amortecimento. Macio e confortável, o Air Max tem uma certa quantidade de suporte.",
        "reference":"Dia a dia | Nike | REF:38416715",
        "stars":4.5,
        "rating":"4 avaliaçoes"
    },
    {
        "id": 6,
        "name": "Adidas Response",
        "src": "/src/assets/adidas/response-vista-externa.webp",
        "price": "R$ 449,90",
        "oldPrice": "R$ 549,90",
        "description":"Potencialize suas corridas com o Tênis Adidas Response Masculino e melhore suas performances. Desenvolvido para quem busca alinhar conforto e estilo em suas atividades, este tênis de corrida masculino traz o que existe de melhor em tecnologia para favorecer suas passadas. Pensando em refrescar os atletas, a Adidas construiu este modelo com cabedal em um design que segue a tendência da Moda Fitness feito em mesh respirável, que age como uma segunda pele. Seus pés receberão ar durante o exercício, além de evitar a proliferação de bactérias que causam o mal cheiro após a utilização. O solado em borracha Stretchweb oferece suavidade e flexibilidade, trazendo naturalidade para as passadas. Mas calma, o melhor deste Tênis Running Adidas nós deixamos para o final, a tecnologia BOOST.",
        "reference":"Running | Adidas | REF:38416716",
        "stars":4.43,
        "rating":"134 avaliaçoes"
    },
    {
        "id": 7,
        "name": "Adidas Vl Court 3 0",
        "src": "/src/assets/adidas/VL-court-3-0-vista-externa.webp",
        "price": "R$ 239,90",
        "oldPrice": "R$ 249,90",
        "description":"Este tênis adidas exibe as Três Listras icônicas sobre um fundo macio de camurça. Além de estiloso, ele também é fácil de usar. O cabedal em camurça é forrado para aumentar o conforto, enquanto o amortecimento leve ajuda a manter o ritmo durante o dia. O solado de borracha vulcanizada é ideal tanto para as pistas de skate quanto para as ruas.",
        "reference":"Dia a dia | Adidas | REF:38416717",
        "stars":4.92,
        "rating":"48 avaliaçoes"
    },
    {
        "id": 8,
        "name": "Adidas Advantage Base",
        "src": "/src/assets/adidas/advantage-base-2-0-vista-externa.webp",
        "price": "R$ 219,90",
        "oldPrice": "R$ 319,90",
        "description":"Você merece as melhores escolhas! O Tênis Adidas Advantage Base 2.0 é a escolha certa para momentos casuais. Garante conforto e muito estilo. Confeccionado em material resistente, tem cabedal elegante forrado para uma sensação de maciez, e a palmilha Cloudfoam Comfort oferece amortecimento macio sob os pés. Esse tênis feminino exibe design moderno com as clássicas três listras perfuradas, trazendo toda a herança esportiva da marca. O artigo garante melhor respirabilidade. Dica: combine com looks casuais ou esportivos - jaqueta feminina, calça legging ou sua camiseta estampada favorita. O DNA Adidas é inconfundível. Garanta já o seu!",
        "reference":"Casual | Adidas | REF:38416718",
        "stars":4.59,
        "rating":"85 avaliaçoes"
    },
    {
        "id": 9,
        "name": "Adidas Dropset 3",
        "src": "/src/assets/adidas/dropset-3-vista-externa.webp",
        "price": "R$ 799,99",
        "oldPrice": "R$ 899,99",
        "description":"Você merece as melhores escolhas! O Tênis Adidas Dropset 3 é perfeito para acompanhar a sua rotina. Confeccionado em material resistente, tem drop de 6 mm na entressola e fornece uma plataforma plana e estável, ajudando a encontrar o alinhamento certo em todos os seus levantamentos. Já a entressola de dupla densidade oferece conforto e estabilidade controlada. O solado Traxion aderente garante a segurança dos pés a cada passo dado. Esse tênis de treino adidas oferece um desempenho excelente durante as suas sessões de treino de força. Dica: combine com produções esportivas ou casuais - short de corrida, regata ou sua camiseta estampada favorita. Garanta já o seu!",
        "reference":"Running | Adidas | REF:38416719",
        "stars":4.9,
        "rating":"40 avaliaçoes"
    },
    {
        "id": 10,
        "name": "Adidas CrazyChaos",
        "src": "/src/assets/adidas/crazyChaos-2000-vista-externa.webp",
        "price": "R$ 336,83",
        "oldPrice": "R$ 499,90",
        "description":"Adicione um toque de estilo ao seu guarda-roupa com o Tênis Feminino Adidas CrazyChaos 2000! Modelo que combina design moderno e conforto, perfeito para um lifestyle casual e elegante. Com modelagem padrão, ele oferece praticidade e versatilidade. A língua têxtil macia e o cabedal em malha elástica respirável garantem conforto durante todo o dia. Com uma vibe clássica, ele proporciona um look elegante e esportivo. O vamp perfurado, a sola sintética e a entressola Cloudfoam proporcionam excelente amortecimento. Ideal para combinar com moletom ou jeans. Adquira já o seu e transforme seu visual com autenticidade!",
        "reference":"Casual | Adidas | REF:38416720",
        "stars":4.79,
        "rating":"51 avaliaçoes"
    },
    {
        "id": 11,
        "name": "Puma X-Ray 2 Wns",
        "src": "/src/assets/puma/X-Ray-2-Wns-vista-externa.webp",
        "price": "R$ 319,83",
        "oldPrice": "R$ 419,90",
        "description":"Cheio de estilo! O Tênis Puma X-Ray 2 Wns Bdp garante conforto e estilo para todos os momentos. Confeccionado em material resistente, tem acabamento acolchoado, entressola em EVA, fechamento por cadarço e recortes multi color em design urbano moderno. Já a palmilha SoftFoam+ oferece amortecimento superior e ajuste ideal para cada etapa do seu dia. Combine com produções esportivas com top fitness e calça legging ou em looks casuais com vestido midi ou seu jeans favorito. Você merece o melhor!",
        "reference":"Casual | Puma | REF:38416721",
        "stars":4.62,
        "rating":"185 avaliaçoes"
    },
    {
        "id": 12,
        "name": "Puma Ferrari Caven",
        "src": "/src/assets/puma/ferrari-caven-vista-externa.webp",
        "price": "R$ 256,49",
        "oldPrice": "R$ 549,90",
        "description":"Estilo urbano com as cores da Scuderia. O tênis Puma Ferrari Caven 2.0 BDP carrega a inspiração do basquete, um design clássico com a estética esportiva dá decada de 1980. Este tênis unissex Puma recebe as cores da Ferrari e tecnologia SoftFoam, que amortece a pisada para elevar o conforto. Do dia a dia às pistas, é escolha certa para usar com calça jeans, jogger ou legging e camiseta ou polo. Peça o seu!",
        "reference":"Casual | Puma | REF:38416722",
        "stars":4.57,
        "rating":"185 avaliaçoes"
    },
    {
        "id": 13,
        "name": "Puma Jada BDP",
        "src": "/src/assets/puma/jada-BDP-vista-externa.webp",
        "price": "R$ 249,99",
        "oldPrice": "R$ 449,90",
        "description":"Você merece o melhor, por isso, aposte no Tênis Juvenil Puma Jada! Garantindo comodidade e proteção para a rotina de sua menina, o tênis desenvolvido em material sintético de alta qualidade é ideal para ser usado no dia a dia na faculdade, cursos, trabalho ou rolês, já que tem modelagem anatômica que se ajusta bem aos pés e amortecimento, promovendo conforto a cada pisada. Este tênis feminino possui cano baixo, palmilha macia e anatômica com tecnologia SoftFoam+, bico redondo, amarração em cadarço, etiqueta com o logo da PUMA na lingueta, detalhe da faixa Formstrip da Puma costurada na lateral e solado emborrachado com frisos antiderrapantes. Leve agora!",
        "reference":"Casual | Puma | REF:38416723",
        "stars":4.29,
        "rating":"203 avaliaçoes"
    },
    {
        "id": 14,
        "name": "Puma Magnify Nitro",
        "src": "/src/assets/puma/magnify-nitro-vista-externa.webp",
        "price": "R$ 999,99",
        "oldPrice": "R$ 493,99",
        "description":"O Tênis Puma Magnify Nitro 2 Psychedelic Rush Feminino é um tênis de corrida com amortecimento superior e performance otimizada que faz você correr mais rápido com muita facilidade. A atualização inclui espuma NITRO Elite para priorizar melhor responsividade, gola retrabalhada para reduzir desencaixe do calcanhar, e base assimétrica para ajudar seu corpo a percorrer qualquer distância - não importa se o desafio for corridas curtas, maratonas, ou até mesmo ultras. Compre já esse tênis Puma Nitro 2!",
        "reference":"Casual | Puma | REF:38416724",
        "stars":5,
        "rating":"2 avaliaçoes"
    },
    {
        "id": 15,
        "name": "Puma Caven 2.0",
        "src": "/src/assets/puma/caven-2-0-vista-externa.webp",
        "price": "R$ 269,99",
        "oldPrice": "R$ 369,99",
        "description":"Conforto e atitude em design retrô. O tênis masculino Puma Caven 2.0 Retro Club traz um perfil esportivo clássico com a autenticidade Puma. Este tênis casual recebe um mix de cores estiloso, além de contar com a tecnologia SoftFoam que favorece o amortecimento e a sensação de maciez. Um modelo versátil, perfeito para diferentes momentos e combinações. Ótima pedida para acompanhar calça jeans ou jogger, bermuda masculina e peças como camiseta estampada ou camisa polo. Garanta o seu tênis Puma e aproveite!",
        "reference":"Casual | Puma | REF:38416725",
        "stars":4.62,
        "rating":"90 avaliaçoes"
    }
]

export default data