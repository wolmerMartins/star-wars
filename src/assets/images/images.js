const images = {
    LukeSkywalker: 'https://static.publicocdn.com/files/starwars/img/luke/02.jpg',
    C3PO: 'https://imgix.ranker.com/user_node_img/50066/1001308627/original/borrowing-his-red-arm-from-a-fallen-friend-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
    R2D2: 'https://movie-dude.co.uk/Kenny%20Baker%20%20Star%20Wars%20V%20-%20The%20Empire%20Strikes%20Back%20(1980).jpg',
    DarthVader: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5c/DVader.jpeg/225px-DVader.jpeg',
    LeiaOrgana: 'https://timedotcom.files.wordpress.com/2014/06/princess-leia.jpg',
    OwenLars: 'https://vignette.wikia.nocookie.net/p__/images/2/2b/OwenLars1.jpg/revision/latest?cb=20170529131545&path-prefix=protagonist',
    BeruWhitesunlars: 'https://theartmad.com/wp-content/uploads/2015/06/Beru-Lars-2.jpg',
    R5D4: 'https://www.1999.co.jp/itbig32/10326274.jpg',
    BiggsDarklighter: 'https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
    ObiWanKenobi: 'https://img.estadao.com.br/fotos/crop/320x300/resources/jpg/4/5/1426285843054.jpg',
    AnakinSkywalker: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTeaE7weHeYnsvvxrHz5pEXJBPWWk7sj2of3j5GPzTjXEBeJGd',
    WilhuffTarkin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoozBWukTUJerbAVvA_qoaNPyHg1scmeYxGERZ345LX1-pvGGTwQ',
    Chewbacca: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1KWG9vGYdjkUODLHBXoVOJieEDamBdzx4tl5Y0QI-gqiHnot',
    HanSolo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXarTD9eq2-lrByo2o3qIcUcSPxGemXuKnNoHKsaDTSYMR_pco',
    Greedo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc-hoCckykaajfBYgcI3qAttwO87pzQ0p9CrgFp_WlpPW18Ed',
    JabbaDesilijicTiure: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoryzV9tJ9sQwk12L_UAGSKIjef_5QnbanJdlrclBpbfeeDWt',
    WedgeAntilles: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3SwvwFf4StlS3G6SxLCgS5UybkU2JtwOavL9xPCHs4CBotun',
    JekTonoPorkins: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRO6Oz3eADBP_sRqq4Qbihp5ita-wBQgIaNKTG9hPLx4hCDu75BA',
    Yoda: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcgJLH_P4UiooRjlyBP7zFOCpiYj3QXAq9NK9B8zZAytrkvlmDg',
    Palpatine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cTG67bH_MJSQirzObU8RAufCLjVLtquR-2fhSNAB6dzTIKyt6g',
    BobaFett: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOzEKPMg8qCiQqCf8xCfp0_BOB45mfeehHgj3_WD7sOJWNn6iyg',
    IG88: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfcCAyn-xXSXVncGmRq3saWs5yE9NlJMpvuPi-r1rpxOVIER7Vg',
    Bossk: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPD0txweTfbYOlAzUbEglMYUSoSKbmmllQM2Zz9Fnu_wWCW-ND',
    LandoCalrissian: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSKWg41tmbGRezZxLaYAvhodTW9Xk-0Rl1QF_OJZELGqTqFiZUsQ',
    Lobot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwN-xXABwWPs0iUaLrFP3M_3G0brmf-GW49gLFWGgmRD4_8P3',
    Ackbar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT0u-zcJdBic56ei-LSba2dqzm0nG2AS9CJCB0eAUGeYMRGtwzA',
    MonMothma: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4NSKWi4Pc_264UIS-_7gVb5QE66GKA1M5XzPd2UVQWpnTvorsw',
    ArvelCrynyd: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55__VJ-IKSxYc4yQtHKfOkWY8Jdq-lO9-wQ2p747GAJkAvepo',
    WicketSystriWarrick: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RdTAQoNJyU8NS4ZBlTNwx8iWQaFuzVY2mVfr4Qg-O_1dp3iJHw',
    NienNunb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUh9M64xYzXV9OFiEzZ2Yqt6pkwOeyLQG0_Aj_lkm6pplQlkv',
    QuiGonJinn: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLURf11y3cUM1-i6HBelC3WwwsFUvdA9T1Sd1_d9LxhmLh5Hb5',
    NuteGunray: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2XWWBJpTGSYE2B4yqraRzRlr3iPaKkCcae14EgbVHgY_9TKVMA',
    FinisValorum: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEh5rzwxljoY7J8uHpN6XO9gcz30DBC7bSFoXoVU5iU_CIyeZO',
    JarJarBinks: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Hjdplroh6_SMd33to7RUhx6b7u14-Mhi8JLDl811I_fMKEdp',
    RoosTarpals: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv2Qjbi--iisGVsJ1lsP-T_ztoK974eBadqk0TKwcg3FR2ZbUkA',
    RugorNass: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxNE8PF1yaaS3mSo6BIGhh1b31_o5u4-O9HKhJTEfh25-_i-FVA',
    RicOli: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkMNgLoo6wY4LyDfuwcThnLd1yXcSHvs9J567s-uYD9_9vM4na3w',
    Watto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5cxV-TSwPWRHBauMLGkMyz6O6QrQMLzOrwUbSmKmPIo5ELHt',
    Sebulba: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Almw67PzptEV_0pa5mo2c4FflExKBv-JPD21Zwl9BWlUd69L',
    QuarshPanaka: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRDiqrWl_F-Mgc3sxo2OvFgdCpGGT4Gfyxiy1SsUd21wjDKam1A',
    ShmiSkywalker: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNyt7bqvU1wh-i4_qCGaRL1FGnDZhgSL0rzjw3bIUP14XUz9bxOQ',
    DarthMaul: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw056u7xlr2fdf3e7oYkoQ7rj-KRduqqzyeTbthoYXmLdOW0fkuA',
    BibFortuna: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuC1rLUCzwR07icLurLATm1gbIv9bt10pL9ozsXlL46gH88XLX',
    AylaSecura: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-koCvgD653iEmFc0BKiMyG1fQisx8n7JmLlsFFuEG5Q6jWdFX',
    DudBolt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2ScXM2s47Ll93Yarwn_DE25Aw4FxmIbgkBLhvFETJsofcXR_Ew',
    Gasgano: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VneoxZ9qP4uz9bie1kz8Bgita696b-5mL4zXFefozPoPwf4a',
    BenQuadinaros: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_HVsP-UG0S9nMySJ_RcmwDNLkzHYnEhYBiEtNc9BVEeKSR_1e',
    MaceWindu: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2deNAUg6dzfyY99MjmNKRpaiGERzkiF9lYntBFzU4n2ueccJ1w',
    KiAdiMundi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqv4g9wZ70DVdnTtfzmGy6MhNMXtWP_0Y2Lu4T0HhJwEzCxl87Q',
    KitFisto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkYFIXFPxBRLmtf_J1nOs7y5ahedww8fnsSRxzYLUxX78qJ6cb',
    EethKoth: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZYzwFyn5GRKhwHQ_V2eNegVyfzpYNhGuaOrb6Gw-iXxW2BuE',
    AdiGallia: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduw6jrjBx70kYy3DKsb-_NaeXLawjSDZ3RfqxmP-8yPn9VJ7wsA',
    SaeseeTiin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_r31UoSbUPOa4QRaCTOjWqk-5ToJf-9Xv7MMcLWizflXbjSAeQ',
    YaraelPoof: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNmTVrgYEGqJXoX-T_ny8ViwKtAUo5l2ypUCHg1_NZZDgPps0L',
    PloKoon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqzP2CpnoRrJ4YE3g14x2ebHIQwhQevJxAfsLl3a3V7Y9jgzQ-g',
    MasAmedda: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmmts8vdzPPKD3MXpG93mlzoUYwuBAUnEu-aZhx45THhxveQz1w',
    GregarTypho: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5p2iVGQIIwnR7RNRkFi5msw_VcjxNXFmp_5P0sM8B0l81I-m',
    Cord: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6EHsFSt6_uPl7n8bYJqxqe1q4nb9cHcHNZndvnPw1Ujp6NY9bw',
    ClieggLars: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDA-cj2hiyD6CHX8A1Nfqbi6l3wDD0aDW1-mouN9yx_gjCe0bfQ',
    PoggletheLesser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSr6-g7yBSwY2L9byiH06Ns4UPEmMFLuNSU1Cd6Y28Qh_baBlDvQ',
    LuminaraUnduli: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbijUhCqrrq1CoaBoyr-2XW43bznKE9wIo9lhOnID9UdgQkM8',
    BarrissOffee: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPCw9ULGaxfYI86hw9ULADQ-xIaulMFZ8jiackWqtEuUMQVFq',
    Dorm: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqB8RIWwfnhzNRim1O_6XinmjClmm6e2_lUX_Ma5NknouVHLSVQ',
    Dooku: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRdHfVTaNu6gEZwwl2oXnEvwiL-hkHrtmca5ohuQyH1MCLGCkYzQ',
    BailPrestorOrgana: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTuQ5itjqlPEXsX-joSZ6DvBsoOP9KIXlg3N5xPsiD45ggwWy',
    JangoFett: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRteoLunJavrMgextMq62A7ovfPhI0XIo4j3kS8h4wPHFwnQfQ8',
    ZamWesell: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zioG13leVAAus61DAz6ZVjx_DF1eJmuREgD1FH6AqkwDACU8zg',
    DexterJettster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY00aovOzrz4i-V03Mtf145FB-AfGNoKaAj0RIZ8jP_ricGr6Qpg',
    LamaSu: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqSUUP4ExZn--WnilE8GWDmFv6FYp3BnLym1WonWou8faZGZP',
    TaunWe: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlELs7v114_u8i1w9KEzJgAqYDwLPLuZ0ziGniPR8TuSMqD-h6FQ',
    JocastaNu: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vJYpIEJ7edp_2a_EZopxsZXYHkrsHYHC-eMkAWhi6beTwalz',
    RattsTyerell: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTZSTt0S6ZxPw4G9RcaGkz7EarKJbAT5qOk-QbiAD4sE7ubO8',
    R4P17: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5CFXMO61DbeWgYv-x61aas7Sq6JG9IcAMegYRPWOHm1E4MaT',
    WatTambor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdQJYeypNY3crCNM3gKAazSjTfJ0y4Go09SwJ_Qncx-2aXpVE',
    SanHill: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMxiamx9GhPtekySkHun7B9B4jwLvxwefDE1wW18zJ4fcql1I',
    ShaakTi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aZUfBo_NchvFLD661CODAuhOQLazi9lJT5uDJrcLME1oR_e9Rw',
    Grievous: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-A7kC2lQPR9b3k5wODv9nMD3IJi6qCz9jEceTKXZCr1WexqSYw',
    Tarfful: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPcvkW6R1k1lIbHATYt0VdDz5rCigV4Q3Ofe7egUpMsg36GJSIw',
    RaymusAntilles: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGSz-Zc8TPIuehKJAmBXyhKbp8xQc1WAnAYVv315hpQe9BVq5VQ',
    SlyMoore: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjUF83r-r4H8nbJAWCqHpqpZKxVQfRXZs2H24B4EGo6YXhNH3',
    TionMedon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5jAt7s-WzjsRUPG3Yb00et8cYkIKbUvqumwJSuveqmOMwaCI4g',
    Finn: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkivbo_A77yRmhZgZ2JUInzrf-eOLYc8vNI_SkoGiEQdIrKGuy',
    Rey: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DYrNcB0yPcrhk-U14owIAnasBNVx4vlpGg6L9nE-k00izlVwrA',
    PoeDameron: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Al4S-g0ENHX1tpMvBlrMEg-Yz_tPTWackRVeqt8-fZzLwLS2',
    BB8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWJytrk_FJdP3CmhO-2lAb5zEzawEARvTtYinG9qlcJ30AhW5Rg',
    CaptainPhasma: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQpQjDGl086Ex0COqdksI7gwt0Vw3r8w0GTsXVowd7Fe2XtkcEg',
    PadmAmidala: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xmY1_1asE-QYx48HE34pIN4gLR_j93meLxDYI7udbhVXpX-qjQ',
    //STARSHIPS
    Executor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrkYD5NwovB7YQ3MBIHTzYQAIfO1KA5e6vCHUV4kmKfsdtkSQOw',
    Sentinelclasslandingcraft: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIj7KOTng_pPp84wZYMoqBapnRyQdMWeAdJJOtS1GXjyhWQk6g',
    DeathStar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFsAVCMq_ka5Zjwpn2X1F4VE1jMFWRG7rCucC_oI45pG38tGn',
    MillenniumFalcon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvc6L0wn-9bBXvMvvN7Zf7Mci4cQOdGUxw0g0B2mBCoalKDF5a',
    Ywing: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgiB4FE6hOxWJp_j_zzg9OizB3apP2ym8YEAXQtVTLx8r9vEr',
    Xwing: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vv6rivqHQKZzr2zzDBDUUC84n1v-qaX-3frCwVUbIyM-Ar9BAQ',
    TIEAdvancedx1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5PGzBINY5t45uwJRBwsHsEWtVXdB3ukzBpY4wgOD_BHX-m6PpQ',
    Slave1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntkiUVP0v5Ynt_ns51GJiPvWH0vSycRjjRW_Ku9XEtJq6zZ54ZA',
    Imperialshuttle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhinrgnK2hcKX3XcvnQhU2Ihw0_EZa6LGtMbzESFSEDDTwzz5',
    EF76NebulonBescortfrigate: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCp_89T_4a9WngdzTUzQeTUboZEqpoik9KOR0c-ixJESgu4yFMRg',
    CalamariCruiser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqk3C-Aoure4qTKyKZdmvn-ZNwCQiA07-8MsgI_ksJz6DAY8Z1g',
    Awing: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZp3S8BhRbMD-Zcu203C2DYjRRQZ_9hv58l1SWSlerYH3uapa',
    Bwing: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEabIT06rorDVV3cY10ZBmQvzZ5jKqbLrWWuHhiHNNWauRE-B54w',
    RepublicCruiser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_N3byupJDdSCdAsgecCGJUtiMx0c6NGBNcuqpmhjr8JEKxTYm',
    Naboofighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHNPQ9Mf1lYRO2KSKJJIhgEtbH9_xvmcLIl41nFMWCiI9MvXG',
    NabooRoyalStarship: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMx5XHmKs8rDkyLvVX40Oj9I8Cw_O51tGx3s0R4L6cZraVpxlY',
    Scimitar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EvFY8CnO0n9Q2w_BmNZfvFqnVUCp4mjUEA0JGue9XSbHi1iR',
    Jtypediplomaticbarge: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsIpO7r5wm8honODn_dE29prG7AL1OMA4MoQG2ua8jbi0NBZAAg',
    AA9Coruscantfreighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOeEEc6qwhjrcdvHh8-oLetSXMr1du1uCnerffVOS5vt3eF9C',
    Jedistarfighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusZiHvmhoGJn_CYtZ1bxkKiwSAGIxDFZkiDbp4kU-bdHh8EShSw',
    HtypeNubianyacht: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1j4mcI3-2x8p4C3jDNt6y1uanN67Kjva0uT2eE0PT4vj6RDi',
    StarDestroyer: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjkNM9Jwgmnj5GYZry0K1E_-3Lm1YE9Ga_iyZPYM1sQATM60Byg',
    TradeFederationcruiser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bjmrcqoF9w-C8imFjrJAW5VhWCSXv7dbfNkXGWRvrxtb6IoV',
    ThetaclassT2cshuttle: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvt9ly3aIuhM0_RahBoEhWJR9u3s2vfOlAO-onfiAp7cEhzP05',
    T70Xwingfighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFo-cv6KN1pfNwZsbQst563IzFbh4_xg0r9kgf4oo-LV_W4nGPFw',
    Rebeltransport: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2JUX9hzAmip2n75xZTP8qnRqIcX9KWy7p_g2CZo1VH98lIVH-w',
    Droidcontrolship: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJS5Qb3k1g3MXouymIQoWJpSkRD4nhageKVLsmL11Y4I00aKLDA',
    RepublicAssaultship: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRge_apquHCXt5bo-yBRPCWOGTDlV7gV6vhP6wyDT2hWqEAet_5',
    SolarSailer: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpwIdOKlr7RIoPrvcBrvn8I0oY4Jiw8SLBp-ZzI4ztOFL6mR7ow',
    Republicattackcruiser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4k0BHjyd7yX2EyAHwhmZJSsdQ-IwS9eWZk2XaBjpKe9WngMuzg',
    Naboostarskiff: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZlxJxFyFK34M3kEZlgIQem_RqzoqmEvBoX1AR1qAdm8HiK0JpTw',
    JediInterceptor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQis0G140ch1P_Cpr4fMbZlZsBqKK5FHQR6cbKbaDU2DXXKuU',
    arc170: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzMRisaURQhYUhY5554ed-1jE-mZVygJn4ocbe4A5GGCFLRhkRg',
    Belbullab22starfighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWGykO_EaAS4CcBdwp6suhd1yTQZMAwV7FCdU0-UgvgO3rsQfow',
    Vwing: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPXFVcXGndKryHWK19u8U9iP35WL2mGLW6MQJTO4I2kLveo1T',
    CR90corvette: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAUqJwrWkmmc63UtkZ8v-33aBwGoH_aKX3JSvPcoYb8c7xzj46TA',
    Bankingclanfrigate: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1rLqcf-Gad3CQTSvXLyyV7EPbYYW2rjU6A-uRScQLz0XMdP5lQ',
    //FILMS
    ANewHope: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpj_SDGXcjnNHe3CuzbZuhSSLfMfaVRECkr67jO1GSenQoLXIi9g',
    AttackoftheClones: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMq_W1QJiNYqh5Ig6_m_pSvrIluRiNf3Hd3l_pW-byazz0fzI9',
    ThePhantomMenace: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxcS0TW3-ily6AxIxpA_Rt9hF6y4Z8Dy-z8YI7w0obCNenqRAjg',
    RevengeoftheSith: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShJGzNeVGb3yA0l1j7uJF-LD_NeKWDCQyydPGl6mC62ay4FWO3Zg',
    ReturnoftheJedi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskSJxjtKK9YENqTlSUzTCvnxJr85vZtsznFWuxgaz6OLg7_hNIQ',
    TheEmpireStrikesBack: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7C8V4N8MEbfzDkMRfFIzaKwq8tbLvtIzny5D_IhT45RmV2be8',
    TheForceAwakens: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58LPlqIABuXEcM4EKQ-If3h9He_5zchtR6Y28uTlFEswbnzYt9w',
    //SPECIES
    Hutt: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBDRCLymqwjwwyYioSWmkNCNhx0-E-6B1Mzz1XDSA7jq38UXTVA',
    Yodasspecies: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV69T7VQQR1Ithjv1Rz2dcHmj39JbRpoBl7TAalwRJfZibKKXk',
    Trandoshan: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-BjOPSINor5p9V4exz18EN3HB4sWokA9L0-TESswphtiuo79g_OWoBA',
    MonCalamari: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQysS-6HqTOI19qbWV7JhCn3BBQWAOpKtSHeGQsO2QL22dR7n',
    Ewok: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQR0IwmUFmCXt3LaRfsRNt-mLwZ3rLIoUuSqMRmWQjBaHWFAjv_Q',
    Sullustan: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyAw0qn6-_t3wmFAQYCoSrkUEuA2OOQEM7ZB0hPxBComqRdgSaA',
    Neimodian: 'https://images-na.ssl-images-amazon.com/images/I/41loQ2hgM2L.jpg',
    Gungan: 'https://vignette.wikia.nocookie.net/aliens/images/a/ab/Gungan.jpg/revision/latest?cb=20091012212518',
    Toydarian: 'https://pm1.narvii.com/6174/6a8abd14464b3bf4b3cdf71a016b0cacadb0a2ac_hq.jpg',
    Dug: 'https://vignette.wikia.nocookie.net/starwars/images/b/bd/Dug_NEGAS.jpg/revision/latest?cb=20090709061842',
    Twilek: 'https://images.squarespace-cdn.com/content/55198512e4b06fca171a2ec4/1461173652951-5CHOZY6UWEPNFRCVNPBQ/?content-type=image%2Fpng',
    Aleena: 'https://pm1.narvii.com/6163/af7e95a85972c77ce05d3b45a5402a6283fabd53_hq.jpg',
    Xexto: 'https://vignette.wikia.nocookie.net/starwars/images/3/30/Gasgano.jpg/revision/latest?cb=20150331133737',
    Vulptereen: 'https://vignette.wikia.nocookie.net/starwars/images/c/cd/Dud_Bolt_FF_Scan.png/revision/latest?cb=20150414170315',
    Toong: 'https://vignette.wikia.nocookie.net/starwars/images/c/ca/Toong_UAA.jpg/revision/latest/scale-to-width-down/250?cb=20061029161112',
    Cerean: 'https://vignette.wikia.nocookie.net/starwars/images/a/ae/Cerean_NEGAS.jpg/revision/latest?cb=20100615162146',
    Nautolan: 'https://vignette.wikia.nocookie.net/starwars/images/4/4c/Nautolan_NEGAS.jpg/revision/latest?cb=20061205192252',
    Zabrak: 'https://vignette.wikia.nocookie.net/starwars/images/6/64/Female_Zabrak_avatar_CotF.jpg/revision/latest?cb=20130918112938',
    Tholothian: 'https://i.pinimg.com/originals/5a/9b/98/5a9b9899246ea329c24c02374f259c18.jpg',
    Iktotchi: 'https://vignette.wikia.nocookie.net/starwars/images/f/f0/Iktotchi_NEGAS.jpg/revision/latest?cb=20061202133616',
    Quermian: 'https://vignette.wikia.nocookie.net/starwars/images/0/09/Quermian_AA.jpg/revision/latest?cb=20070301022333',
    KelDor: 'https://vignette.wikia.nocookie.net/starwarsdarkdreams/images/2/24/Kel_Dor_NEGAS.jpg/revision/latest?cb=20110725091209',
    Chagrian: 'https://vignette.wikia.nocookie.net/starwars/images/5/5e/ChagrianNEGAS.jpg/revision/latest?cb=20061201134120',
    Geonosian: 'https://vignette.wikia.nocookie.net/aliens/images/6/6d/Geonosian1.jpg/revision/latest?cb=20170112070748',
    Mirialan: 'https://vignette.wikia.nocookie.net/swgalaxyatwar/images/f/fe/Mirialan.jpg/revision/latest?cb=20100627171740',
    Clawdite: 'https://vignette.wikia.nocookie.net/starwars/images/3/37/ClawditeNEGAS.jpg/revision/latest?cb=20090709061818',
    Besalisk: 'https://vignette.wikia.nocookie.net/pt.starwars/images/2/29/Besalisk.jpg/revision/latest?cb=20100428154006',
    Kaminoan: 'https://vignette.wikia.nocookie.net/starwars/images/0/03/KaminoanNEGAS.jpg/revision/latest?cb=20090709062442',
    Skakoan: 'https://vignette.wikia.nocookie.net/starwars/images/a/a0/Skakoan2.jpg/revision/latest?cb=20091012195839',
    Muun: 'https://vignette.wikia.nocookie.net/starwars/images/6/6f/SanHill_hs.jpg/revision/latest?cb=20080117160044',
    Togruta: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Togruta_NEGAS.jpg/revision/latest?cb=20100810070146',
    Kaleesh: 'https://vignette.wikia.nocookie.net/starwars/images/1/14/Kaleesh_NEGAS.jpg/revision/latest?cb=20061205191444',
    Pauan: 'https://vignette.wikia.nocookie.net/starwars/images/2/22/Pau%27an.jpg/revision/latest?cb=20070705042952',
    Wookiee: 'https://vignette.wikia.nocookie.net/starwars/images/1/14/Wookiee_NEGAS.jpg/revision/latest?cb=20090711201859',
    Droid: 'https://i.pinimg.com/originals/aa/69/2e/aa692e76fe909e22848c58b5c76c1dc3.jpg',
    Human: 'https://vignette.wikia.nocookie.net/swse-resource/images/e/e7/Swse_species_human.jpg/revision/latest?cb=20180515120124',
    Rodian: 'https://i.pinimg.com/originals/94/46/d7/9446d7404d8d4f751c706f1a891f42be.jpg',
    //VEHICLES
    SandCrawler: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZMq8ly5xrQlH9ASJJ8oCBfh97hf9lY8Rlo6KqNI1MEknD9W3V',
    T16skyhopper: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0wapUN2_AOT7gEGukzdBI3JqU-0vWF1AKzBtlvfuk4wMVQ',
    X34landspeeder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwrNcwp8PVZh4HTHNmFmYP7UqyYsiY_99bvd_hQccorDL1s3ityA',
    TIELNstarfighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bY4x_u5u9ds52NY3hV7A4zMAreDVP9MuelxtGo_WiHRbjeGH',
    Snowspeeder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8noz2zpoKX5rzoalN-Ev0hZCarc8ZB07ubRTqFZr4s2Jetph',
    TIEbomber: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIDAwmg9nBXixGalWSjvsPIsg8RY1g9UahBaLEinLLhJjpwx2eQ',
    ATAT: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER9P08LqdhldEOTG9vywPAvhMa4m2PABZvJvXjwWqWkfZxkW_3w',
    ATST: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5LCMwf8bfHjJnE0emrkO4FjsRGNcU4eZdTet9ICotEBpu5f2',
    StormIVTwinPodcloudcar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlwAjh566CMzcxsxYZrfYAqUccEH9OvrZz3Lgwaq5p4LiSqC0',
    Sailbarge: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEY8sJVK6Hj3qiI25iNbbSgVcXS0b1gr7QJZL13P0QXEDnLpaEQ',
    BanthaIIcargoskiff: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-sJeu-DThzUF-Wn09CiymS22zyaeRX4AwGNwzqTvRuq5CjWM',
    TIEINinterceptor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAK9pvcCyO8S2DNUDRDVVueZxn0nHprYvwguUwaclupJsIvZ9OLQ',
    ImperialSpeederBike: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujT-4inIDh-OptlkAbwEIsJxOjkrxAIaIvqNjwwrRM1bDN89YQg',
    VultureDroid: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABHUICHgO0V8SPEiflBmMiDI-LxZdZcdBzxsGiG9A_jKOInYj',
    MultiTroopTransport: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiJNDQT5-0TZFKNlhavCJ2hLvfu5VXGtyvjdWwb5JN9nAqHt-',
    ArmoredAssaultTank: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQLn2ZTj045lMdImXg7wLh-2-YBMyOSqLNxKv3z4CRZWQAvmR',
    SingleTrooperAerialPlatform: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLEKp5deGdFEg7zyT9Qp3ZJM3zLXmOmsnSVYFqJL_AM5dNXe7rQ',
    C9979landingcraft: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_f4B5eHlsbVgqtwU_ZJH8wobs-QVWaMuN_e3lnSueJDYqVpENiA',
    Tribubblebongo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdQ3x6hWHUN791UBImaNzxXntQ1M_7b0c8lDa0ZVk_xylE39gOg',
    Sithspeeder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjQmZCgxxzLehlWTR0-jSU_pJD8MNjpbts6WMPPhxr1EgaPhNyA',
    ZephyrGswoopbike: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTSSEwNtxiwZxc4vmenijFz9013TOtcJyhHLq8ABA1OtjMr_gRw',
    Koro2Exodriveairspeeder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LYyJuuXXElwYoFcwT5V7Jlh1Qsv5s2lsQ7a0Ck1bekuFYZslcA',
    XJ6airspeeder: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMjDhyFmt4Oxbk22o2EE00qKU-tgnKUlLrHJmi2JU4aYq7T40yQ',
    LAATi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIKkkb_-qaAMo-fAQPvP8AZg9o0tUi4ZpsMfhQXHlQH8yvYrkifw',
    LAATc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmW8LndSbAwPaUxHheSCaEklwgvBIb_1iaxqK0o9ymbiAXLaM',
    Tsmeu6personalwheelbike: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zH_VHpskO6hnIo-odhNi1j4DogvpkVvVJr87_29p22CtzNDvbA',
    EmergencyFirespeeder: 'https://3.bp.blogspot.com/-JMCkSEfdGvs/WZWcMG1c0JI/AAAAAAAAHlU/qx8wy9aeAO8SgpwSgDvsO3tCmNFWAmd6ACLcBGAs/s1600/Firespeeders.jpg',
    Droidtrifighter: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxLQgbuvT3onkFVM_SeTE1y3M8Yb_v-sbt7LHDzN6jywYq-OZLA',
    Oevvaorjetcatamaran: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQV3YagfJxqavhcKwPkVqnL_GaCRXL4DI-psEFxam7IrYQBQ_6Ww',
    RaddaughGnaspfluttercraft: 'https://spikeybits.com/wp-content/uploads/2017/06/wookk.jpg',
    Cloneturbotank: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWA1lM6MDT2RWuxgUSUnKTxA42KlDmHpJvB3B_PrsFlxRn1B08AA',
    CorporateAlliancetankdroid: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBtJFSZ3CLSYm1nZrGV4oFQZGcQdRx-P1SdJFg_kYrMV6PQWcvg',
    Droidgunship: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3DFwcNy5IqubdtsnbISCToDEa1-DQzvKbkz8dK9M_9vBrBIKjlQ',
    ATRT: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVXHSk215vdTx5oQDyRT_MYgjNI8HhOcZL-vWNTuEyUGaiNX4Tw',
    ATTE: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5cl_akLU2fncJ8ovow8wGTB-f-bkpNx3-tlMOrixqKXn4z2wL',
    SPHA: 'https://i.redd.it/ooe0tuggn6021.jpg',
    Flitknotspeeder: 'https://lumiere-a.akamaihd.net/v1/images/count-dookus-speeder_099a9e27.jpeg?region=472%2C0%2C2896%2C1629&width=960',
    Neimoidianshuttle: 'http://new-republic.net/wiki/images/e/e6/Sheathipede-class_Transport_Shuttle.jpg',
    Geonosianstarfighter: 'https://upload.wikimedia.org/wikipedia/en/d/d0/Geonosian_starfighters.jpg',
    //PLANETS
    Alderaan: 'https://vignette.wikia.nocookie.net/starwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20061211013805',
    YavinIV: 'https://vignette.wikia.nocookie.net/pt.starwars/images/a/a0/Eaw_Yavin4.jpg/revision/latest?cb=20100923231354',
    Hoth: 'https://vignette.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322',
    Dagobah: 'https://vignette.wikia.nocookie.net/starwars/images/5/58/Dagobah_FDNP.png/revision/latest?cb=20160617233754',
    Bespin: 'https://vignette.wikia.nocookie.net/starwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170222012550',
    Endor: 'https://vignette.wikia.nocookie.net/pt.starwars/images/6/61/Moon_of_Endor_NEGAS.jpg/revision/latest?cb=20120116205218',
    Naboo: 'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/3/3c/Naboo.png/revision/latest?cb=20110225130930',
    Coruscant: 'https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521',
    Kamino: 'https://vignette.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541',
    Geonosis: 'https://www.universeguide.com/mobile/geonosis.jpg',
    Utapau: 'https://vignette.wikia.nocookie.net/starwars/images/c/ce/UtapauRotS.png/revision/latest?cb=20160118063015',
    Mustafar: 'https://vignette.wikia.nocookie.net/pt.starwars/images/e/e5/Mustafar2.jpg/revision/latest?cb=20100418043709',
    Kashyyyk: 'https://vignette.wikia.nocookie.net/starwars/images/d/d0/Kashyyyk_FFGRebellion.png/revision/latest?cb=20170529040615',
    PolisMassa: 'https://vignette.wikia.nocookie.net/pt.starwars/images/f/fc/Polis_Massa_Before_Cataclysm_1.jpg/revision/latest?cb=20110427011040',
    Mygeeto: 'https://vignette.wikia.nocookie.net/starwars/images/e/eb/MygeetoFromSpace.jpg/revision/latest?cb=20051104084715',
    Felucia: 'https://vignette.wikia.nocookie.net/starwars/images/a/a2/Felucia_SWCT.png/revision/latest?cb=20181010054430',
    CatoNeimoidia: 'https://vignette.wikia.nocookie.net/starwars/images/c/c7/Cato_Neimoidia_CotG.png/revision/latest?cb=20180501023602',
    Saleucami: 'https://i.pinimg.com/originals/91/e0/e1/91e0e1c187a8da7805481395c7b0af08.jpg',
    Stewjon: 'https://vignette.wikia.nocookie.net/starwarscavalryofdarkness/images/b/bd/ImagesCA533VT4.jpg/revision/latest?cb=20110726170244',
    Eriadu: 'https://vignette.wikia.nocookie.net/starwars/images/5/58/Eriadu.jpg/revision/latest?cb=20071219212015',
    Corellia: 'https://vignette.wikia.nocookie.net/starwars/images/7/7f/Corellia_SOF.png/revision/latest?cb=20170222012701',
    Rodia: 'https://vignette.wikia.nocookie.net/starwars/images/0/07/RodiaNEGAS.jpg/revision/latest?cb=20061122222115',
    NalHutta: 'https://vignette.wikia.nocookie.net/starwars/images/8/8d/Nal-hutta.png/revision/latest?cb=20170222012913',
    Dantooine: 'https://vignette.wikia.nocookie.net/starwars/images/9/9f/DantooineRebels.png/revision/latest?cb=20170627023617',
    BestineIV: 'https://vignette.wikia.nocookie.net/starwars/images/7/79/Bestine_TEA.png/revision/latest?cb=20180325210122',
    OrdMantell: 'https://vignette.wikia.nocookie.net/starwarsofthecaribbean/images/3/36/Ord_Mantell_EotECR.png/revision/latest?cb=20160927101923',
    unknown: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1u9apf4_24f34d1e.jpeg?height=473&mode=crop&region=0%2C0%2C1280%2C743&width=630',
    Trandosha: 'https://vignette.wikia.nocookie.net/starwars/images/4/40/Trandosha-PL.png/revision/latest?cb=20130530013144',
    Socorro: 'https://i.pinimg.com/236x/bc/c1/82/bcc1821dd6991836a5f7134678016889.jpg',
    MonCala: 'https://vignette.wikia.nocookie.net/starwars/images/2/24/Mon_Cala_SWCT.png/revision/latest?cb=20181015023926',
    Chandrila: 'https://vignette.wikia.nocookie.net/starwars/images/9/9b/Chandrila_AoRCR.png/revision/latest?cb=20170222012047',
    Sullust: 'https://vignette.wikia.nocookie.net/star-wars-extended-universe/images/9/91/Sullust.png/revision/latest?cb=20180204193128',
    Toydaria: 'https://vignette.wikia.nocookie.net/starwars/images/d/d6/Toydaria-TCW.png/revision/latest?cb=20130506235119',
    Malastare: 'https://vignette.wikia.nocookie.net/pt.starwars/images/a/a1/596px-MalastareNEGAS.jpg/revision/latest?cb=20100719122942',
    Dathomir: 'https://vignette.wikia.nocookie.net/starwarsofthecaribbean/images/a/a8/The_Dathomir.png/revision/latest?cb=20110108070011',
    Ryloth: 'https://vignette.wikia.nocookie.net/starwars/images/b/b7/Ryloth_Rebels.png/revision/latest?cb=20160217215011',
    AleenMinor: 'https://vignette.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg/revision/latest?cb=20070630172856',
    Vulpter: 'https://vignette.wikia.nocookie.net/starwars/images/b/be/Vulpter_FF7.jpg/revision/latest?cb=20070628190912',
    Troiken: 'https://vignette.wikia.nocookie.net/starwars/images/3/3a/TroikenQuermia.jpg/revision/latest?cb=20061111014525',
    Tund: 'https://vignette.wikia.nocookie.net/starwars/images/2/27/Tundatlas.jpg/revision/latest?cb=20100515115645',
    HaruunKal: 'https://vignette.wikia.nocookie.net/starwars/images/9/92/HaruunKalCSWE.JPG/revision/latest?cb=20120821183509',
    Cerea: 'https://vignette.wikia.nocookie.net/starwars/images/d/df/Cerea_NEGAS.jpg/revision/latest/scale-to-width-down/180?cb=20090712183513',
    GleeAnselm: 'https://vignette.wikia.nocookie.net/theclonewiki/images/0/0c/GleeAnselm.jpg/revision/latest?cb=20180627153509',
    Iridonia: 'https://vignette.wikia.nocookie.net/pt.starwars/images/c/c5/Iridonia.jpg/revision/latest?cb=20120718172202',
    Tholoth: 'https://i.dailymail.co.uk/i/pix/2016/05/04/18/33D6348E00000578-3573624-The_glittering_city_lights_of_Coruscant_the_Star_Wars_core_world-a-53_1462382123507.jpg',
    Iktotch: 'https://vignette.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png/revision/latest?cb=20180501025533',
    Quermia: 'https://vignette.wikia.nocookie.net/starwars/images/2/29/Quermia_NEGAS.jpg/revision/latest?cb=20070701083603',
    Dorin: 'https://vignette.wikia.nocookie.net/starwars/images/9/9b/Dorin-FDCR.png/revision/latest?cb=20160304050545',
    Champala: 'https://vignette.wikia.nocookie.net/starwars/images/d/d7/Champala_NEGAS.jpg/revision/latest?cb=20061114221731',
    Mirial: 'https://vignette.wikia.nocookie.net/pt.starwars/images/e/e0/Mirial.jpg/revision/latest?cb=20150111151330',
    Serenno: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Serenno-Massacre.png/revision/latest?cb=20130607043719',
    ConcordDawn: 'https://vignette.wikia.nocookie.net/starwars-exodus/images/5/54/Concord_dawn.jpg/revision/latest?cb=20060810164448',
    Zolan: 'https://vignette.wikia.nocookie.net/starwars/images/6/66/Zolan.jpg/revision/latest?cb=20070701111500',
    Ojom: 'https://vignette.wikia.nocookie.net/starwars/images/9/9f/Ojom.jpg/revision/latest?cb=20061119201000',
    Skako: 'https://vignette.wikia.nocookie.net/banthapedia/images/c/cd/Skako.jpg/revision/latest?cb=20090921170744',
    Muunilinst: 'https://vignette.wikia.nocookie.net/starwars/images/1/19/Muunilinst.jpg/revision/latest?cb=20071221131608',
    Shili: 'https://vignette.wikia.nocookie.net/pt.starwars/images/6/65/Shili.jpg/revision/latest?cb=20100626213715',
    Kalee: 'https://vignette.wikia.nocookie.net/starwars/images/0/08/KaleePlanet.jpg/revision/latest?cb=20061118121433',
    Umbara: 'https://vignette.wikia.nocookie.net/starwars/images/2/2d/Umbara-Planet_SWTOR.jpg/revision/latest?cb=20170818123850',
    Tatooine: 'https://vignette.wikia.nocookie.net/pt.starwars/images/f/f6/Tatoooinefull.jpg/revision/latest?cb=20071114001422',
    Jakku: 'https://vignette.wikia.nocookie.net/starwars/images/f/f4/Jakku_-_full_-_SW_Poe_Dameron_Flight_Log_.png/revision/latest?cb=20170720130554'
}

export default images;