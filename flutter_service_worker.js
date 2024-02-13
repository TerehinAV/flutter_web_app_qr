'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2422bddaec5ff59cd4d0c4234d0279c0",
"index.html": "746c31986607874e18b7cf3781bcab67",
"/": "746c31986607874e18b7cf3781bcab67",
"main.dart.js": "7ec3b89c9a504cc5942bb9e8649213ae",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"README.md": "24e64ac1f175bd2d197bf83fbb83aba1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff0f36bf761b38705a4eefd92267a8a4",
".git/config": "463327f625e0e280d5006beda899cb76",
".git/objects/61/635c0e7f6da224935d70d833adf3974992ab01": "a280e1ceb8128a486b2cc37f7e06ba18",
".git/objects/92/a7cacfe24c6d4845ac841f963a3e32e36b3423": "0e6fd38798d3ccfcad2de9ae1fb15237",
".git/objects/6f/40b729a2b7e29c6b2a0bdd57386ad5c5bb9df6": "1f77e688821cc115d9085d6747739d0c",
".git/objects/6f/7c449fb3499b929724312568d3e8ac792049a8": "c0957411d04147a58de00c76e9dac2c7",
".git/objects/6f/33004a52dca30176d000a3ddcc88401ccd8f75": "22830d6cb2eb5342e6dd29d0f58aac4c",
".git/objects/9b/5e7ba00841e9c111588c2dcbda13eb2ef43b74": "e92e6f91250522e00f511e0c6563b858",
".git/objects/6a/c88f33f01e6460107cbfac0e90154fa02852d1": "b035c9a37a91f690cb9fb65daef0009c",
".git/objects/6a/5632579864d0c081c7a12195880ebc45503e41": "d5cc59b46d208e06ef15baeb2e54ba71",
".git/objects/6a/728fe80982c3297909a7341c767a6ba707a514": "bdf61775fa0dff98ea63838c8476b54c",
".git/objects/6a/c4edb059053d533187e844d30986248e6ca3ed": "cb933cedd016089d5181736428e90f74",
".git/objects/32/e0ae7157374e2ed0aa43a2a722ca8e935a04fd": "6bba917a1b92c9f4ac4f672e9b9e45bc",
".git/objects/58/bca9629befdc3e9cb960961d7b6a8f286bfa5a": "ac6375c3f24627def56b7a580eb141d4",
".git/objects/0e/179ba53f61abb19b88c19ec01abce535103193": "5dd89566b33e0c7e55014ed74b1a8b7b",
".git/objects/0e/58520c7397272945eacc27812f3b556e5e5fa8": "6e6e67aa5cdf56dde6f408d5f70ee34a",
".git/objects/34/fa1f1f9fde1297c32e3de227f65d1eed1238c0": "530c886a325d0eacb9a04bd77079cef8",
".git/objects/5a/9570817da7cffc3027b30c39854b0d6420a462": "144b72e7971abd65fa4b354552d32097",
".git/objects/5a/f22e40447650fdb310dc2cef4b053a043a8f4a": "919d04516f05d06295d83021ca5f0c4e",
".git/objects/5f/3213c61462817c92578824a9c4f7bc3b3c815d": "5ab4562576ef73531b61855d64e82caa",
".git/objects/9d/15ae8716bcec596b067a0a4d1571c5446c750f": "096e2cc9148b14f9864504bd8ffba08a",
".git/objects/9d/6a4c4a1a9ff686387811e6dc3404bb583fead2": "8426fc9755508875967fb57290c33715",
".git/objects/a4/f2b6e634f276cd9d10ce209836414c70ba29b4": "bf70ce8ec39185e0bb17ad3ab4cabc97",
".git/objects/a4/e73df1317a3780f30380101b7b44c9c1922ebb": "afa39b2b2443f690da62a9ca2c1cce66",
".git/objects/b5/709b4694f7be81db9fdc5b164da90cc2b43f55": "c028fb7b00b791ed1f8134d08afc30a3",
".git/objects/d9/c24a8ea52c45f3f06c245522e0450d4792053e": "9f131eca5feaff24c0c4351dcc1a1952",
".git/objects/d9/e8f560e3a79b4c77eda54741d250d3e0137bb4": "a395ec1f637bc346d480db16a957a8ef",
".git/objects/ac/e2838404037937ee237488d429e999ae3994c7": "443640bf569c52d151b53a6655475d34",
".git/objects/ac/ddbe857dce27a222fb08b1f89c0ffbf38c9592": "fae42c1f4087fc150f35417fe630b5b7",
".git/objects/ac/817baee0424ca4055275a3cf5ad2dc98214550": "389b031b4ddba30a184caeb22ab6c0ea",
".git/objects/ac/c02e547306949dcbddfed6c741ef45d89c5a90": "b390cd4454c42c9a6f90bcbaeeac6ae6",
".git/objects/b3/e96e686ae757e960251828c40f90a910c0483d": "f6b1deeb75915f23a2cb8f5113ea194d",
".git/objects/df/440a02a665681abf8a1842ff32e6885babab75": "b40c36b89e72bfd0559ee578ced729fd",
".git/objects/da/27c3a04765785a862496c1d57733f10a99cb2e": "ab42e31fc2c1b88da14a1b2c7ef8144c",
".git/objects/a2/8a3e1e216f75b2e8908ead3dbcff34a1d9e880": "abee70f23faf4a09a91e2fb33e932640",
".git/objects/d6/9267f772859626787466fc59c483c9c8f735a0": "6bec137f1d4100edeb497529e3107b4b",
".git/objects/d6/f4a8c48f2d015dd7f024eef9e5331f29ea37c9": "52495c2b2b90a85a1cce66cf5a9c146f",
".git/objects/bc/f58c42a7cbf503b3240b0a47f7e34ba4e8aaab": "308733c19710b36a40dec7b91fe8d63a",
".git/objects/d8/1cd930cfe077fa5153f7fc4cb36296a3c7d7f6": "6dbd1465f27769c044988a310daeac7b",
".git/objects/d8/1e922f796d975d89f7576c65b61ff448465a39": "bbea07c459f3a0447872575b63d7ce66",
".git/objects/ab/87f48d94452dc72a014c31a94e9c5158944b19": "3a2088aed9c5a9228df864efd2d9fd89",
".git/objects/ab/0eb210292347c90f4dad12286d1afdeb20f043": "60fff1724623916923d1fe760cd3728a",
".git/objects/c0/37f3cd1fe23059677f95e56bf3928d9ffd5703": "926b7a421cb89eb0f8cd70abf83403cb",
".git/objects/c0/f99832d99829f0c51406fc4e4ecd4b55674398": "badeb390ba688a925fddd3dcf313773b",
".git/objects/fc/d4cbb65bd3852caff9e5165a1d0ccdceec55bf": "cc65f91a256075b5c295bc0b7fa96171",
".git/objects/fc/3ac5965c52e6ef80fda089e9c9e886c6a755be": "eed13d8365ef7ab1829aae24f7e94e19",
".git/objects/f5/01277cc878a63fbbdb7ddb59f4cb279febd66f": "f75d4befab3b0b56a38cde1e3c77ca0d",
".git/objects/e3/d145d158b9f07db17791d21105df8bbf950593": "aedc23515089ab2237cb1a92ed66a22f",
".git/objects/cf/8c466f5b5adbe1ecc273331956a4cbc01ccbc3": "054ab8369135edad7f35bfa42af8a1e6",
".git/objects/ca/7c997f4c767ad57145b1137a0ea6b2626c04f4": "090b642e324f423ab765887cbcf06dac",
".git/objects/c8/29e5e9742e12a34fd2275a6ac7951cf732961f": "480e54b928799f48d4a0b4f30f14b2bd",
".git/objects/fb/185716ddac4cd177b3cdeffb184f243e64933a": "fa48403d56596489c2821b4e6fe044ce",
".git/objects/ed/13a6d56cb467f4ce5cd82ebd470b1b9b8dedcd": "0565066f109c36ff3239d5a0b9ceb352",
".git/objects/c1/7936d5dc7f0f3425fc4c1d62437ed365e0c2d9": "c8852406cf821b32239e4fd13ca1a4b1",
".git/objects/c6/f66fa69b0c60349f460fef583a54f9412f4dcc": "1df1cf9b0973741d21da4b173676732f",
".git/objects/4e/d3f5d65dcb0243b5d45c920a511b7cbf6d7648": "0d3ae699641416874938b87f8eca110d",
".git/objects/4e/c30f38622291d5e69c1a3f55c2f5008ffd801e": "8821bba76aeb033a7cc48586792e2b31",
".git/objects/4e/ecbd81bfec793da614723edd92e1c315762adc": "e27342a4a11d80493f5343e1f43232b5",
".git/objects/20/11d1cc6630a70fec73ce50bd986738a19bad91": "ae14b1e54f15fd5612dcf1742f1b4ed3",
".git/objects/27/b5a7dae266f0ec704837a4cb81f1333fc7b2b2": "d3df0844cf9555858b88808304f1f814",
".git/objects/4b/e4317ea2fa4ddc8c98b67e7939dff51572a843": "5c25bb039792e4bfc75a7de8b06dd39e",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.idx": "667b7c239fcb29878286e56c97eb4443",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.pack": "a5cfe9e338bf08c2ffd179c43e28ddda",
".git/objects/11/189ca23140e3aed71e318c46628f462c182d60": "ada77d15200d4efdfdb715b8555e1a7e",
".git/objects/11/b1dcb3aaef39b36684064ab05c0b026ecb5fbf": "d3d7cb3168613973458e71311aa86033",
".git/objects/7d/4ba56ac19977caddba9ed39fb49e5fbeeb4625": "7226b2158e0d09b2023006300e80b208",
".git/objects/7c/4666cb262b9c8d7fbe97272e9363b043830a24": "5e445e5e5eb9e6cc09ea1e9cd731f6be",
".git/objects/7c/b68e5deb0afdcb66f128fb15e36ea40daaa627": "41286a90c83919a5e07efdc3cc7036a7",
".git/objects/42/9e1c6f13a1f55542a6ac630451e752e6237b47": "31e6843ed0672cb82c533f5e762d3f3a",
".git/objects/89/b9c409a23a1eb9bef9fd123fbc059d094fd313": "99b5814e213723e1b74869221d732152",
".git/objects/73/291caeeb3e844d54af159921c6fa4c4995de8a": "5dff1d0576f5ac579f456e580b5368d0",
".git/objects/80/c56ff9a581f9c4226203b2a000277874ecfbfa": "d7d3ce6d5599007d1dd59169751fbdff",
".git/objects/74/fdb2d57a0eb65789b7b049346db501efd008ec": "32d8677e58a42470a00f5f5a6eb083f4",
".git/objects/1a/aeb61d7fd15a9e3614c66a465d06b5cda0e347": "b9f188a49046be4f0f6c917f55d7231c",
".git/objects/8a/eb06f79f6e3d8babf2eba05f38759873230325": "8b80188931108635e4d50964e2ff1ef2",
".git/objects/10/ea3394149ac3056faf0c245585dce4cf1dd808": "390d14728a488c812bcc73467aebb118",
".git/objects/19/27c3bb387c29399b56afd06f408a5c242aa50d": "e088864f296a16cca5af1c1b86139fe5",
".git/objects/26/2710ca05f702f53e8b5fe29747b49389d1dc61": "f34f5150bff3e5d0436852ac9a60212d",
".git/objects/26/5fd60628f697a0b0d43bc0cc263bc6859940d9": "2bb7a5656ebd6be57a8abf7ad75c4083",
".git/objects/75/746421b1228a97d8df28fb5831b3374e4af3f2": "3a1f5108d2cddc97940269626d60c177",
".git/objects/86/b4a1c9fd8d29ecaa32b5e6119796beb2ce8049": "a07dfa3e8c85a1bc0b33f7ad07d58528",
".git/objects/72/ba906a72ad8a98c1948018c96fe2a56aeef937": "81dd2481e4321d63b7efa062340f2217",
".git/objects/2f/9e531a8a8fae11222c813b31a3f46f59a93d82": "6506818422f8e7d67aa6dc2fac1c7d04",
".git/objects/9f/1d57c56304cd75fce96637d3acd8939889bfa0": "9c9e4c66662b107a395c283059d0663c",
".git/objects/07/628e820f59bf653a1d8a29712cfa38abddd47e": "8d7c32a8a8d9554d32d8132349824836",
".git/objects/38/6e2b6987ce19b85f3371577fd3caee431e466c": "4cc6db36e1508127fd479bcbb665cebd",
".git/objects/09/96e51d8b46d3a751d4a804667edc203eb49753": "dcc0975d8c6f443fa16cc025781d206c",
".git/objects/09/0d198ac828740ca9bdd582ccfdd67b03665f55": "f7d2ba5357d9b48d5dea260748ab087a",
".git/objects/5d/7ea152015a646a18717d56fe93b33c5c28fcef": "c28f8ba1f4e7549813e7f910fdca765d",
".git/objects/31/1692876646040b74867481c9fc563d156d01c1": "fc6b63846959b8ace52fa56a2da255c5",
".git/objects/31/aa20c0b0ae0265e898878ed46dd7b66ea8d625": "36637362b95fad43496b4d63491ec4f6",
".git/objects/91/1178f9a0393dd58e3aac37f546c685f26b3adf": "e0d059ae610fae991cebbcb2c7c5e9f9",
".git/objects/91/089d836a114c8f010963da46f5039f51f603a5": "2e99ebe1679661d1d5f5c85399427019",
".git/objects/65/198847f5416995cc99ef332b5280b57f3b67f6": "a31376b48b2731be44bccd41196292a2",
".git/objects/96/fe157a6f5742587ed1fae8d46b4afddae3b928": "def6c0040fefdc397e3fb8f2a38e9389",
".git/objects/96/de08b280353bd30df261a9bb9cb7dc6727bec6": "afd11ef739cd8beccee1e588907613a7",
".git/objects/3a/494e42accf3271ef8a80bce57c1595bdb919db": "a51ed50807d92580f71a152fc0bddbc6",
".git/objects/3a/4a78b59af62cd28084b0f71e2ef658debf5fd5": "c501fe7eb18fc23bda2bbd98bac499a6",
".git/objects/54/a41c346f7c9aeaeb445e7f56e226ef9ba39343": "3210379a2a06fd9bfc7c27c92f5bce83",
".git/objects/30/f3140ddd45d0f5685cd36e8933d19104caa6b5": "58be4637888b413cd72bc273a4461512",
".git/objects/37/fd1ea3a1641313520c275e7cf82d5a8db5bee2": "7475475f58975baf7bcc15fdf79bf9b0",
".git/objects/6d/40cd0ead6d46eb29efba7c5c1b87e252398c77": "58e21d571ab5635569bd0d3bd6ec36b5",
".git/objects/6c/88e5e87209f16a436f335be0051aba8890dcb1": "661389aaa137ba27e371eb8c5f3a75ed",
".git/objects/39/be1f486f29a40040ea05b08e2b39a9daa8747e": "1343b641e6b110db431cbda6581531b1",
".git/objects/99/121b95f87f6b8ca5cc12dbb5a2081739b74dcd": "825c00021484e085206a8e5f52ae8fa8",
".git/objects/63/54261b10caa251e4efd5d41dd6a1117901aa41": "5e3332aa2dc963517249d909eda51037",
".git/objects/0f/6e256485265c8af24759c28b89eb3237486c7e": "c2da45ad280a220cc3a98088d9d6f56a",
".git/objects/0f/e3770a220bb2ccafe0d10ab594820d6b32c898": "97435bce3eec34b1f30841b76d30f5aa",
".git/objects/0f/0d1483a04146a5530fd2f2555256e846907f42": "84249f0743da3ec6cd4d04d07b128f8c",
".git/objects/0a/f0c2d0bdc19c0ff8b111627b837714b5b2bf29": "54f1a4104ae924703ffe9c11554d5f0f",
".git/objects/ba/bf6239af2be23c0ce0e34ca47b1f43be726dbd": "eb73040483051f1ef66384513e8a4b24",
".git/objects/ba/bdefd38ea9776a890988cacd7b14b08df7e17a": "8f8cca520d7bc427fc750070114a8548",
".git/objects/a0/78d56ddecd44963a0817221dd4dd7b47c87eaa": "16e1ea5039774bf531a6c23051489a96",
".git/objects/a7/8aeb690bb85702b4acd465c52dd577843da039": "21320cd9fb2c1445fa1f82f1290f27f2",
".git/objects/b8/920ba0b8009f0624792cbc51ba2691d9984215": "e2a36adbcd83e8ffb9608c92a513f450",
".git/objects/b6/1a3151e96a7fd9bcfb33f3738b6588d3c3edf0": "1a4ad8dbe1e35b659ec940dc7e287eb9",
".git/objects/de/eb2a0654bff514f3ef587018c092bb6482e7a3": "b9933396d9737c9e4616dd075b57070e",
".git/objects/b0/91183631b7ee1720b0f0ffa305d3385a90ef9c": "3c0cfd757b2b5131b43ea9643c34ac87",
".git/objects/b9/82ced258e104289b328272f67000755ef691f3": "01de25632f720c2e4c11379f3e9836fd",
".git/objects/cd/955d9cabb3d1a2165e5878ea4fa6a8c052a173": "c7ecf0cc60950d95f0cd50c086a83db2",
".git/objects/cd/9b3b1272d73831b1025fcac12a912af32dcbac": "c32a08e27c052744d8a3aa0a48068d35",
".git/objects/cc/130d23f76a19f59fde3c04387f0dfe65e1acc2": "a8997f03a90865494a9b80f23360eb33",
".git/objects/e8/c44e64f007c9589051afa754de33e9c1b0e85c": "ea14bb31fa64385bef7c3b0686b25678",
".git/objects/ff/99c1defaa938250f78b5673e7b03a57f3fe334": "4ad75b46d40afa37bd58db4878fa7185",
".git/objects/ff/dc63229375fb425fb028766dcba3cfdb24f4e5": "95b210243b992a49087f500edc17b468",
".git/objects/c5/5adb89c4b4f1517d775b8f1020095a0bfb3c06": "09aaace050aebe926071a0a6505c67d6",
".git/objects/c5/97f17c2e1da8bb91146ed5ce4d48ca8e0ec7e9": "287d43e3417f407ba21e923855cecc6b",
".git/objects/c2/57538a7d3d91d87a2658974088ebbaaf760f1e": "37d1b85d5a5c4cd7d7e00b724f94a2af",
".git/objects/e9/61be7cb43a0d4d90c5aa1c0d412fd234b328a1": "44e7bed05dda401b652b260aa258ebf9",
".git/objects/e9/e99ced65989b492b950d051a456c9995e41e82": "5bb144188a70e2a84196f40e16fc153f",
".git/objects/f1/da57c5638288a271defa5a54ff380172fb912c": "d3190b5999684b5935f30811940b0e36",
".git/objects/e7/827718d72f138f05d00dcbbe78693a52de1ab1": "e0d1eebb2b28722eb950900873c9f796",
".git/objects/cb/cb704f74f0da977b3b5fda263324bd2dce5b45": "63334d188148f94a42104dff88a5dc2a",
".git/objects/79/68ba81ab0ee7302f02ab6382f01a72db9c9175": "be57556593ff864f217016b0aa02978f",
".git/objects/79/436b51fe3b2cd5a224d9624767247972bd0dbe": "d8101cb7d2ccc40dd062d998fe271801",
".git/objects/2d/c6f7fb8cee04a342bdbac6e0fec7d0cdd5c51f": "0b4d6c3025ec9605d9eb2edbb5edf5fa",
".git/objects/2d/020a751305f4ca9fa0ac928c3ffdbfdf126c2e": "b6be42ef1d9c1c9fb17777a94122f955",
".git/objects/41/12351f6b5dfa0fef1238faa4f5deaae3c4eef2": "e0b915593ef696747eb62b8a6e23349e",
".git/objects/77/2d254c79023aae204f26f3244c487aadc86a1f": "7243f3a1b6bbb2aa2aa6decc67ea2662",
".git/objects/70/89a7668cb25d0f456db2cc744f678c6f31251b": "a2e423f7a180b89e651914c2df073d4a",
".git/objects/70/5e92362401ef28962560b693fa641780437fdf": "bb0e91ab43184a67e42974c918b82f34",
".git/objects/1e/0eada876563cce061346efc66d82dbcde258a1": "0ccac92643b11268771539b733ca6fde",
".git/objects/84/16be27c27d512a275df57816637b1ba513a634": "0820e1238a940cf9ec391e28ab17c7f4",
".git/objects/8d/05d4ad408f709754ee26e0d4d1f31387ab535d": "35bda0292bc719640dc8be6f45e8f573",
".git/objects/8c/8476be10d8e2e74436e5ca193347c01e983d5c": "77a1ecbacd209ccc026f0497991efbca",
".git/objects/85/8e18f52af5dcd3f35c7975886e7eb39289b0af": "1b9a593a04db9c0ae1be6dbea150ff9c",
".git/objects/76/71f83ad5287fd7a2e41820567b79dfcff4c83b": "69dd02e1290eb435ded7df6f48ac9ff1",
".git/objects/2b/4359b0ec8c5a74509a0528bcaea248485a0238": "6fdd5f1e19a9fee319e3f22f9d209f83",
".git/objects/78/7eb96296446ef31dc7157c3ec2f8f01bf10e00": "d3e4e8e7d5ea6c1e49e2690b5539a03c",
".git/objects/14/915f1bb43107cdba08e9b920f1122f6b4c9d99": "5c2ba35bc9f5a748c51b4eb6a321e207",
".git/objects/14/8b3652349d6ae10dddbdd575ef2b0ad0f3ac0b": "915de487db1b829978bddbb68e64c6ab",
".git/objects/8e/a7b4b2f6afecd200b106221c77fda3619ada84": "35c6d6c9c02eb6f13de5154c8f692a56",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f846aee2375def881d3b568b21c47428",
".git/logs/refs/heads/master": "f846aee2375def881d3b568b21c47428",
".git/logs/refs/remotes/origin/HEAD": "e53a87bb75fca1fc2596508a65f2b316",
".git/logs/refs/remotes/origin/master": "b4c6e39e5f28d42e232f4b12853e499a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d2086ba7c9f37e62a8f1339de9e944b5",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d2086ba7c9f37e62a8f1339de9e944b5",
".git/index": "c210f6d6cc9d826667aab2aeac7e572a",
".git/packed-refs": "a8b61c6af4fb4040b483691fb5b1bcb4",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "1bc567cfc505d5a62042809675ccadf7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
