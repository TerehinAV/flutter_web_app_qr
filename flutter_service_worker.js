'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2422bddaec5ff59cd4d0c4234d0279c0",
"index.html": "d6d70d05f012882256004ec7d5077c2d",
"/": "d6d70d05f012882256004ec7d5077c2d",
"main.dart.js": "db266b7590c2fcd120a735c58f5c72ec",
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
".git/objects/0d/13736121dd2c2e42ffd35909c6b81ee95458b6": "e17083e83406485fc3a2a16e0d64b980",
".git/objects/59/c58711129d964f579faa0ee49f4dac986b934c": "7c143568cfb7b07ea1e8d0806fabe0fa",
".git/objects/92/a7cacfe24c6d4845ac841f963a3e32e36b3423": "0e6fd38798d3ccfcad2de9ae1fb15237",
".git/objects/50/84a60ba380f8de04010c91edbe62ee8d58f2ab": "6b1a6635c7ad38f0f76e58335ccff56c",
".git/objects/68/34b7e637039ce5a10a59fc19f4340551c739aa": "190e144c4b9e6a6b95d213f3e0c54d9f",
".git/objects/68/9e48e965b3a0f4e17add284788b33d39aafebe": "0953d184498cb63f4dff895a1aa91bba",
".git/objects/6f/40b729a2b7e29c6b2a0bdd57386ad5c5bb9df6": "1f77e688821cc115d9085d6747739d0c",
".git/objects/6f/7c449fb3499b929724312568d3e8ac792049a8": "c0957411d04147a58de00c76e9dac2c7",
".git/objects/6f/33004a52dca30176d000a3ddcc88401ccd8f75": "22830d6cb2eb5342e6dd29d0f58aac4c",
".git/objects/9b/5e7ba00841e9c111588c2dcbda13eb2ef43b74": "e92e6f91250522e00f511e0c6563b858",
".git/objects/6a/c88f33f01e6460107cbfac0e90154fa02852d1": "b035c9a37a91f690cb9fb65daef0009c",
".git/objects/6a/5632579864d0c081c7a12195880ebc45503e41": "d5cc59b46d208e06ef15baeb2e54ba71",
".git/objects/6a/728fe80982c3297909a7341c767a6ba707a514": "bdf61775fa0dff98ea63838c8476b54c",
".git/objects/6a/c4edb059053d533187e844d30986248e6ca3ed": "cb933cedd016089d5181736428e90f74",
".git/objects/32/e0ae7157374e2ed0aa43a2a722ca8e935a04fd": "6bba917a1b92c9f4ac4f672e9b9e45bc",
".git/objects/3c/ddb953ef1b72f12c29c56c7634e8fed7b724cc": "f742c64c0873bc49216c97df6a0e6dfc",
".git/objects/3c/9c538c09e8e018b702ffb8b9c14d98259ff8f2": "d1fc16471b8393adfabc4a5810a78092",
".git/objects/3d/766536633863a1e849440ce8fdf7921cbe6add": "f282b50b067ae30fd9a600aa80033df9",
".git/objects/58/bca9629befdc3e9cb960961d7b6a8f286bfa5a": "ac6375c3f24627def56b7a580eb141d4",
".git/objects/93/2232a585fdf487d6c5f4e659efdbe8473d4072": "9a483ed016674e3fd7f476d269000303",
".git/objects/94/e8428b74e0f091bce4ae630ee17d510369960a": "144eacb46d65510313dde54e4d529070",
".git/objects/0e/179ba53f61abb19b88c19ec01abce535103193": "5dd89566b33e0c7e55014ed74b1a8b7b",
".git/objects/0e/58520c7397272945eacc27812f3b556e5e5fa8": "6e6e67aa5cdf56dde6f408d5f70ee34a",
".git/objects/60/c547bf27135aaeebce75e2c6ef9ea45b666bbe": "5778d2d6f860d144339cb8a0eb51f714",
".git/objects/34/fa1f1f9fde1297c32e3de227f65d1eed1238c0": "530c886a325d0eacb9a04bd77079cef8",
".git/objects/34/c522f40a437473f87561fbd94dee2016a602e8": "48606b69fa3835752ad6409d8acadaa5",
".git/objects/5a/9570817da7cffc3027b30c39854b0d6420a462": "144b72e7971abd65fa4b354552d32097",
".git/objects/5a/f22e40447650fdb310dc2cef4b053a043a8f4a": "919d04516f05d06295d83021ca5f0c4e",
".git/objects/5f/3213c61462817c92578824a9c4f7bc3b3c815d": "5ab4562576ef73531b61855d64e82caa",
".git/objects/05/b6cc8ab68dac53e7671053602b5a45f26c6477": "5dfc230c48f356d515514ffe980660cb",
".git/objects/05/42f4aa108c424f6229955aa359bf25a7e19dbd": "f44425e0774a37737573b85bc76b9ec9",
".git/objects/9d/15ae8716bcec596b067a0a4d1571c5446c750f": "096e2cc9148b14f9864504bd8ffba08a",
".git/objects/9d/6a4c4a1a9ff686387811e6dc3404bb583fead2": "8426fc9755508875967fb57290c33715",
".git/objects/a4/f2b6e634f276cd9d10ce209836414c70ba29b4": "bf70ce8ec39185e0bb17ad3ab4cabc97",
".git/objects/a4/e73df1317a3780f30380101b7b44c9c1922ebb": "afa39b2b2443f690da62a9ca2c1cce66",
".git/objects/b5/516e7a886aebe2ead0005bd969f6f9c198e267": "1157267d3375b3ea101ec1ac7788f134",
".git/objects/b5/709b4694f7be81db9fdc5b164da90cc2b43f55": "c028fb7b00b791ed1f8134d08afc30a3",
".git/objects/d9/c24a8ea52c45f3f06c245522e0450d4792053e": "9f131eca5feaff24c0c4351dcc1a1952",
".git/objects/d9/e8f560e3a79b4c77eda54741d250d3e0137bb4": "a395ec1f637bc346d480db16a957a8ef",
".git/objects/ac/e2838404037937ee237488d429e999ae3994c7": "443640bf569c52d151b53a6655475d34",
".git/objects/ac/ddbe857dce27a222fb08b1f89c0ffbf38c9592": "fae42c1f4087fc150f35417fe630b5b7",
".git/objects/ac/817baee0424ca4055275a3cf5ad2dc98214550": "389b031b4ddba30a184caeb22ab6c0ea",
".git/objects/ac/c02e547306949dcbddfed6c741ef45d89c5a90": "b390cd4454c42c9a6f90bcbaeeac6ae6",
".git/objects/ad/24fa4273c7ad6d72db62626bbc8342ebee5237": "09a84a81ffb554ea6f5c8a92048a4834",
".git/objects/d7/4f75b77d1ab609b77510c98f4dbbd6fba848f5": "9dcfb8fa27bb2dfcf5ce96d0e9bda5ac",
".git/objects/d0/23e424b02f82fee1c50ccc41e17696b1155eee": "903260a402dd51e16aeae24fb792ef11",
".git/objects/d0/e4a0fa6b267ce3f73c1f20cc4fffd9d7f027fd": "2dcae57ef63f762b4a3515840d8ed647",
".git/objects/d0/79413d084ac5bf780940036223ec92d25c1025": "e72db97d0be512b777b3b6d5993a0662",
".git/objects/be/b7d0383c78a7d59cb31317c12126b394a5d363": "fcb6a9ec010aa4b337cb555fa081084c",
".git/objects/b3/e96e686ae757e960251828c40f90a910c0483d": "f6b1deeb75915f23a2cb8f5113ea194d",
".git/objects/df/440a02a665681abf8a1842ff32e6885babab75": "b40c36b89e72bfd0559ee578ced729fd",
".git/objects/da/27c3a04765785a862496c1d57733f10a99cb2e": "ab42e31fc2c1b88da14a1b2c7ef8144c",
".git/objects/b4/72a802cbfe47ada45ac6fe42f68ff3e7833abb": "d217c369c195646677080f822d91ffab",
".git/objects/a2/45d413db751af187556d618bd3a605bef504c9": "469389a0e47e0cc3c666d44e77ff76fe",
".git/objects/a2/8a3e1e216f75b2e8908ead3dbcff34a1d9e880": "abee70f23faf4a09a91e2fb33e932640",
".git/objects/d6/9267f772859626787466fc59c483c9c8f735a0": "6bec137f1d4100edeb497529e3107b4b",
".git/objects/d6/f4a8c48f2d015dd7f024eef9e5331f29ea37c9": "52495c2b2b90a85a1cce66cf5a9c146f",
".git/objects/bc/df2e12cb6647270750975e0bddbf1220baccb7": "2242aac821e061efc5d0d47bf79c84f4",
".git/objects/bc/f58c42a7cbf503b3240b0a47f7e34ba4e8aaab": "308733c19710b36a40dec7b91fe8d63a",
".git/objects/d8/2f6f16628e8d05987665c13f3030efec0198f0": "72418d8da6baae8bf75508d200611c9a",
".git/objects/d8/1cd930cfe077fa5153f7fc4cb36296a3c7d7f6": "6dbd1465f27769c044988a310daeac7b",
".git/objects/d8/1e922f796d975d89f7576c65b61ff448465a39": "bbea07c459f3a0447872575b63d7ce66",
".git/objects/d8/42287df62215fa034f9f5ffa8bab78b9636a65": "73b3acae8fb95c0c7e76f2d5abcb7a0c",
".git/objects/ab/87f48d94452dc72a014c31a94e9c5158944b19": "3a2088aed9c5a9228df864efd2d9fd89",
".git/objects/ab/0c019c51a4df06b9865c34c2804c2f0d47484f": "44e7229f6e37cafa45463a7f77b5254f",
".git/objects/ab/0eb210292347c90f4dad12286d1afdeb20f043": "60fff1724623916923d1fe760cd3728a",
".git/objects/c0/2cd6916060aa08642eb9fe2a73db37c5afbec6": "9c8d896da29b928ca67478dade912c88",
".git/objects/c0/37f3cd1fe23059677f95e56bf3928d9ffd5703": "926b7a421cb89eb0f8cd70abf83403cb",
".git/objects/c0/f99832d99829f0c51406fc4e4ecd4b55674398": "badeb390ba688a925fddd3dcf313773b",
".git/objects/fc/d4cbb65bd3852caff9e5165a1d0ccdceec55bf": "cc65f91a256075b5c295bc0b7fa96171",
".git/objects/fc/3ac5965c52e6ef80fda089e9c9e886c6a755be": "eed13d8365ef7ab1829aae24f7e94e19",
".git/objects/f5/01277cc878a63fbbdb7ddb59f4cb279febd66f": "f75d4befab3b0b56a38cde1e3c77ca0d",
".git/objects/e3/d145d158b9f07db17791d21105df8bbf950593": "aedc23515089ab2237cb1a92ed66a22f",
".git/objects/e3/2f6b1a898ecf13e7ebdb2ea3a823f50ca27203": "c6381f72b56332acf2c354e894f82502",
".git/objects/cf/8c466f5b5adbe1ecc273331956a4cbc01ccbc3": "054ab8369135edad7f35bfa42af8a1e6",
".git/objects/ca/7c997f4c767ad57145b1137a0ea6b2626c04f4": "090b642e324f423ab765887cbcf06dac",
".git/objects/fe/6ad2bf813de59e93b59b9d93a567ee3d8e4633": "efa792517d45e6842967eaf5171df09e",
".git/objects/c8/29e5e9742e12a34fd2275a6ac7951cf732961f": "480e54b928799f48d4a0b4f30f14b2bd",
".git/objects/c8/5c9afc16180f57ae26e13d9b34a8c5e175a363": "483873fcc6d26aabb56391a80d9d15e5",
".git/objects/fb/185716ddac4cd177b3cdeffb184f243e64933a": "fa48403d56596489c2821b4e6fe044ce",
".git/objects/ed/13a6d56cb467f4ce5cd82ebd470b1b9b8dedcd": "0565066f109c36ff3239d5a0b9ceb352",
".git/objects/c1/7936d5dc7f0f3425fc4c1d62437ed365e0c2d9": "c8852406cf821b32239e4fd13ca1a4b1",
".git/objects/c1/ddf33cde15ab56dd7f2032a6f4d5d486d11e6e": "911c386a3c93385eed75512548b323ff",
".git/objects/c6/f66fa69b0c60349f460fef583a54f9412f4dcc": "1df1cf9b0973741d21da4b173676732f",
".git/objects/ec/ed99d1a761b8ac8179a659d4692a179adfde8c": "8debd4c0e54c6a5dd06f82ab5ed29dd5",
".git/objects/ec/b1a9d064cf0629d7063500f7caa56b68381b9e": "9275ba8b84353c5cb8548c00539d816c",
".git/objects/4e/d3f5d65dcb0243b5d45c920a511b7cbf6d7648": "0d3ae699641416874938b87f8eca110d",
".git/objects/4e/c30f38622291d5e69c1a3f55c2f5008ffd801e": "8821bba76aeb033a7cc48586792e2b31",
".git/objects/4e/ecbd81bfec793da614723edd92e1c315762adc": "e27342a4a11d80493f5343e1f43232b5",
".git/objects/20/11d1cc6630a70fec73ce50bd986738a19bad91": "ae14b1e54f15fd5612dcf1742f1b4ed3",
".git/objects/27/b5a7dae266f0ec704837a4cb81f1333fc7b2b2": "d3df0844cf9555858b88808304f1f814",
".git/objects/4b/e4317ea2fa4ddc8c98b67e7939dff51572a843": "5c25bb039792e4bfc75a7de8b06dd39e",
".git/objects/4b/f6436649ebbd47acea3526c54a3e54020dec48": "5ab61ed7086d9d5f456620f6ff965095",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.idx": "667b7c239fcb29878286e56c97eb4443",
".git/objects/pack/pack-10b50c93128a91977a4d588732e089cc10e6bad9.pack": "a5cfe9e338bf08c2ffd179c43e28ddda",
".git/objects/11/189ca23140e3aed71e318c46628f462c182d60": "ada77d15200d4efdfdb715b8555e1a7e",
".git/objects/11/c6e30584ab2f22724ccd256c5009a77f49e77e": "ce77e58ebb7937b3831cdb885ef1cdf5",
".git/objects/11/b1dcb3aaef39b36684064ab05c0b026ecb5fbf": "d3d7cb3168613973458e71311aa86033",
".git/objects/7d/4ba56ac19977caddba9ed39fb49e5fbeeb4625": "7226b2158e0d09b2023006300e80b208",
".git/objects/7c/4666cb262b9c8d7fbe97272e9363b043830a24": "5e445e5e5eb9e6cc09ea1e9cd731f6be",
".git/objects/7c/b68e5deb0afdcb66f128fb15e36ea40daaa627": "41286a90c83919a5e07efdc3cc7036a7",
".git/objects/42/9e1c6f13a1f55542a6ac630451e752e6237b47": "31e6843ed0672cb82c533f5e762d3f3a",
".git/objects/89/b9c409a23a1eb9bef9fd123fbc059d094fd313": "99b5814e213723e1b74869221d732152",
".git/objects/45/998e6cb8830aac7a347e02a365625cb5b827bc": "6dfdb3c470e7329fd33db5f6f0252ce8",
".git/objects/45/e7124d2256ffa629d40f5a95a2875ae75235e0": "08c496831c4ca260ed94a98d84b4051a",
".git/objects/73/291caeeb3e844d54af159921c6fa4c4995de8a": "5dff1d0576f5ac579f456e580b5368d0",
".git/objects/80/c56ff9a581f9c4226203b2a000277874ecfbfa": "d7d3ce6d5599007d1dd59169751fbdff",
".git/objects/74/fdb2d57a0eb65789b7b049346db501efd008ec": "32d8677e58a42470a00f5f5a6eb083f4",
".git/objects/1a/aeb61d7fd15a9e3614c66a465d06b5cda0e347": "b9f188a49046be4f0f6c917f55d7231c",
".git/objects/1a/73b11082e56ece6ff810ac889ab2a972fb33c8": "56999c8b09da585fe4d373fba7bfed1e",
".git/objects/17/9fc5a861d5785765151a0ee9797783ccfdf5fb": "d1a66b40c5e4247ad410e9187e1941c4",
".git/objects/8a/eb06f79f6e3d8babf2eba05f38759873230325": "8b80188931108635e4d50964e2ff1ef2",
".git/objects/10/b5c15ae939e54a2a46167b779073775ad4e12e": "528b8818203053d998fb129e2e18cbda",
".git/objects/10/fd56e7a66823dff915df5b3d996a9c222b76e6": "b449e981c6b8d29f16818f4ae2a1a3c1",
".git/objects/10/ea3394149ac3056faf0c245585dce4cf1dd808": "390d14728a488c812bcc73467aebb118",
".git/objects/19/8e14ae6649bb6c47f089f34f1b9cdd11cde527": "42f84b7ffbd6466415c201ef4a925a8f",
".git/objects/19/27c3bb387c29399b56afd06f408a5c242aa50d": "e088864f296a16cca5af1c1b86139fe5",
".git/objects/26/2710ca05f702f53e8b5fe29747b49389d1dc61": "f34f5150bff3e5d0436852ac9a60212d",
".git/objects/26/5fd60628f697a0b0d43bc0cc263bc6859940d9": "2bb7a5656ebd6be57a8abf7ad75c4083",
".git/objects/4d/2fd3dd8832ca5e2e68729954b0cef21f1d2fd0": "84d2745aa7b3bf8b74d3e77651c9f8f2",
".git/objects/75/c4560386241fbceb25345d4e37e18669aac720": "19b44ed5d0ef38c4ca6ed9691928f84d",
".git/objects/75/c1e1468d3519a6be62e758b44b6c226e895cb2": "0d79491116b330e8edb9168b07a292f3",
".git/objects/75/bcc9d4f757e33adcdd37d29a517447daae02d3": "1c05fa684072384adefb4305e3f509f8",
".git/objects/75/746421b1228a97d8df28fb5831b3374e4af3f2": "3a1f5108d2cddc97940269626d60c177",
".git/objects/86/b4a1c9fd8d29ecaa32b5e6119796beb2ce8049": "a07dfa3e8c85a1bc0b33f7ad07d58528",
".git/objects/72/ba906a72ad8a98c1948018c96fe2a56aeef937": "81dd2481e4321d63b7efa062340f2217",
".git/objects/2f/9e531a8a8fae11222c813b31a3f46f59a93d82": "6506818422f8e7d67aa6dc2fac1c7d04",
".git/objects/2f/68c0179c6da18a2d85ad7af3f0fd9e1eda22df": "021eebd4ef0e1214069566978a6c5f44",
".git/objects/88/d2cc286273d8de78296d25f888976a72182189": "a912b12636c57e98e8dd4ea767833edd",
".git/objects/9f/1d57c56304cd75fce96637d3acd8939889bfa0": "9c9e4c66662b107a395c283059d0663c",
".git/objects/07/628e820f59bf653a1d8a29712cfa38abddd47e": "8d7c32a8a8d9554d32d8132349824836",
".git/objects/38/6e2b6987ce19b85f3371577fd3caee431e466c": "4cc6db36e1508127fd479bcbb665cebd",
".git/objects/38/21919eb005f9685d32eeef554f1c3686a19d68": "cad434cd8de843f60c9f5cbaa24fb42d",
".git/objects/6e/d7a681af492d28ac82ccc1577dc7ae75bf60f4": "4a2c512bb8189e21e716fbf06d7ce9dc",
".git/objects/09/96e51d8b46d3a751d4a804667edc203eb49753": "dcc0975d8c6f443fa16cc025781d206c",
".git/objects/09/0d198ac828740ca9bdd582ccfdd67b03665f55": "f7d2ba5357d9b48d5dea260748ab087a",
".git/objects/09/c385bc455c36892aeeeab57ffd2726d0f94649": "03e29d88b1ab680eabc94eabce635e6f",
".git/objects/5d/7ea152015a646a18717d56fe93b33c5c28fcef": "c28f8ba1f4e7549813e7f910fdca765d",
".git/objects/31/1692876646040b74867481c9fc563d156d01c1": "fc6b63846959b8ace52fa56a2da255c5",
".git/objects/31/aa20c0b0ae0265e898878ed46dd7b66ea8d625": "36637362b95fad43496b4d63491ec4f6",
".git/objects/91/fe7009c1fea9811b4ea0d32a25a5073aa26277": "78a6e0dbefd6ea981a21dbd06d07a868",
".git/objects/91/1178f9a0393dd58e3aac37f546c685f26b3adf": "e0d059ae610fae991cebbcb2c7c5e9f9",
".git/objects/91/089d836a114c8f010963da46f5039f51f603a5": "2e99ebe1679661d1d5f5c85399427019",
".git/objects/65/198847f5416995cc99ef332b5280b57f3b67f6": "a31376b48b2731be44bccd41196292a2",
".git/objects/62/8ad0a4808cde72aee6f1ba4d7ce8fe6313d820": "22197b0902ba24230eca881edb7b2c77",
".git/objects/62/9f0bc2e152b9519fefd89105402a0f794ca761": "9d22b16504fdd4d543bdd2258bd126a7",
".git/objects/96/fe157a6f5742587ed1fae8d46b4afddae3b928": "def6c0040fefdc397e3fb8f2a38e9389",
".git/objects/96/de08b280353bd30df261a9bb9cb7dc6727bec6": "afd11ef739cd8beccee1e588907613a7",
".git/objects/3a/494e42accf3271ef8a80bce57c1595bdb919db": "a51ed50807d92580f71a152fc0bddbc6",
".git/objects/3a/4a78b59af62cd28084b0f71e2ef658debf5fd5": "c501fe7eb18fc23bda2bbd98bac499a6",
".git/objects/54/a41c346f7c9aeaeb445e7f56e226ef9ba39343": "3210379a2a06fd9bfc7c27c92f5bce83",
".git/objects/98/d054fdd0467a6f81612bdb09a37e2dbc075aa7": "7f097212ac26b2908cb12a43a640c3fb",
".git/objects/53/55d88d697f883ddf77a2533e82452070c70b04": "b15211569a1a345f5e780b4e9187da58",
".git/objects/30/f3140ddd45d0f5685cd36e8933d19104caa6b5": "58be4637888b413cd72bc273a4461512",
".git/objects/37/fd1ea3a1641313520c275e7cf82d5a8db5bee2": "7475475f58975baf7bcc15fdf79bf9b0",
".git/objects/6d/40cd0ead6d46eb29efba7c5c1b87e252398c77": "58e21d571ab5635569bd0d3bd6ec36b5",
".git/objects/06/de911ac80be99bdef48b3ca4dcdbccae23ff20": "b82e1f0b4491005dae58b05d7756d982",
".git/objects/6c/88e5e87209f16a436f335be0051aba8890dcb1": "661389aaa137ba27e371eb8c5f3a75ed",
".git/objects/39/be1f486f29a40040ea05b08e2b39a9daa8747e": "1343b641e6b110db431cbda6581531b1",
".git/objects/99/121b95f87f6b8ca5cc12dbb5a2081739b74dcd": "825c00021484e085206a8e5f52ae8fa8",
".git/objects/63/54261b10caa251e4efd5d41dd6a1117901aa41": "5e3332aa2dc963517249d909eda51037",
".git/objects/63/0a193af58eb42732a5b08c3afb5af3a4eaee24": "b603ac8d1a26c762072f07807c83e6a2",
".git/objects/0f/6e256485265c8af24759c28b89eb3237486c7e": "c2da45ad280a220cc3a98088d9d6f56a",
".git/objects/0f/e3770a220bb2ccafe0d10ab594820d6b32c898": "97435bce3eec34b1f30841b76d30f5aa",
".git/objects/0f/0d1483a04146a5530fd2f2555256e846907f42": "84249f0743da3ec6cd4d04d07b128f8c",
".git/objects/0a/be6674facee95a71778191d1d4b5678e66037f": "87db996bb989b3f97bdd805979daa741",
".git/objects/0a/f0c2d0bdc19c0ff8b111627b837714b5b2bf29": "54f1a4104ae924703ffe9c11554d5f0f",
".git/objects/64/17f4008b1abe6d098126ea740bfbf85bdd8b4c": "885dbe7478efb103e3b472f4b79ba704",
".git/objects/90/95672c19403e49293ed77a3b3d033de1bc5c06": "f10423379561ebde70e4e49f756b73f5",
".git/objects/ba/76ef368396ea25e654d501be0073ddb7729731": "de56fede4cd6b56187b1ef5bf6e3bece",
".git/objects/ba/bf6239af2be23c0ce0e34ca47b1f43be726dbd": "eb73040483051f1ef66384513e8a4b24",
".git/objects/ba/bdefd38ea9776a890988cacd7b14b08df7e17a": "8f8cca520d7bc427fc750070114a8548",
".git/objects/a0/78d56ddecd44963a0817221dd4dd7b47c87eaa": "16e1ea5039774bf531a6c23051489a96",
".git/objects/a7/347b6e710858f03ec9f6a1b3ccbd99b1c8d6a2": "6e1d29fd7e153d14429d88fbf23ef30e",
".git/objects/a7/8aeb690bb85702b4acd465c52dd577843da039": "21320cd9fb2c1445fa1f82f1290f27f2",
".git/objects/b8/120d64d7d7feae91bb9d8a99afe11d2e0e5a1d": "434d65a28939a7129ec3d8b798b2fa82",
".git/objects/b8/920ba0b8009f0624792cbc51ba2691d9984215": "e2a36adbcd83e8ffb9608c92a513f450",
".git/objects/b1/6bcf5f469822720d2c490a74c5434b165f3d17": "df44aa853c32938b1924c749e372cbe7",
".git/objects/dd/ddf6a3873c4c3864e5461d55924f8642082388": "4d52326d4249a25aaaece22d30998b77",
".git/objects/b6/1a3151e96a7fd9bcfb33f3738b6588d3c3edf0": "1a4ad8dbe1e35b659ec940dc7e287eb9",
".git/objects/b6/03c9d47f50019f66e9403e9766434561d75a59": "a8c1678f305597de255b6e36e84fb916",
".git/objects/d2/6f6bd7a32fdb6ede9e4fa8710718b72a64c562": "5e74c5e605d0c6e5d1f45b2d3e8fe25e",
".git/objects/af/feb7b038ba3372821fe27161929c781a207b55": "478dd0a1192780215603af09edc47ca1",
".git/objects/b7/366f6a28133ca9e2a7dc4c0bd9369eca8bb2ca": "82ec9180bbedab7e0cc0948d0f9fc3d4",
".git/objects/b7/f112a742dee9cc086cd2609807844003f7b588": "772980cfaaf802dd49ad34816d086c44",
".git/objects/de/b3ca3e718ec715122599dc232dbc81138926ad": "6869e85642e9847b869dd89cefbf60f9",
".git/objects/de/eb2a0654bff514f3ef587018c092bb6482e7a3": "b9933396d9737c9e4616dd075b57070e",
".git/objects/b0/91183631b7ee1720b0f0ffa305d3385a90ef9c": "3c0cfd757b2b5131b43ea9643c34ac87",
".git/objects/a6/3f0684bbbac3db6ef1b7c572eabb74be8dacf4": "9958f591250afc5a44b792df5f212e55",
".git/objects/b9/82ced258e104289b328272f67000755ef691f3": "01de25632f720c2e4c11379f3e9836fd",
".git/objects/c3/23ca8cfa40c1c96de9775f3f49dacafacfa795": "2a8baf88585ba333e046adfe95874074",
".git/objects/c3/b6454c847be6e59ad724db0d0314ec1f2918f6": "415296c5593d835b0d4f4359636b41bd",
".git/objects/ea/52321b74ffb46830da053a089ec3c623c47fee": "55679c67e6c91293183682baf67ebc16",
".git/objects/cd/955d9cabb3d1a2165e5878ea4fa6a8c052a173": "c7ecf0cc60950d95f0cd50c086a83db2",
".git/objects/cd/9b3b1272d73831b1025fcac12a912af32dcbac": "c32a08e27c052744d8a3aa0a48068d35",
".git/objects/cc/130d23f76a19f59fde3c04387f0dfe65e1acc2": "a8997f03a90865494a9b80f23360eb33",
".git/objects/e8/c44e64f007c9589051afa754de33e9c1b0e85c": "ea14bb31fa64385bef7c3b0686b25678",
".git/objects/fa/762a236c4ebc53708b6fdfdd2c8efdb7ee5da9": "c70943fc9318296e99f105dcac7e6d7e",
".git/objects/ff/99c1defaa938250f78b5673e7b03a57f3fe334": "4ad75b46d40afa37bd58db4878fa7185",
".git/objects/ff/dc63229375fb425fb028766dcba3cfdb24f4e5": "95b210243b992a49087f500edc17b468",
".git/objects/ff/5041931af973449bad20257f604634acf46c42": "f062ee74674ff4573da89522794131d7",
".git/objects/c5/5adb89c4b4f1517d775b8f1020095a0bfb3c06": "09aaace050aebe926071a0a6505c67d6",
".git/objects/c5/97f17c2e1da8bb91146ed5ce4d48ca8e0ec7e9": "287d43e3417f407ba21e923855cecc6b",
".git/objects/c2/57538a7d3d91d87a2658974088ebbaaf760f1e": "37d1b85d5a5c4cd7d7e00b724f94a2af",
".git/objects/e9/61be7cb43a0d4d90c5aa1c0d412fd234b328a1": "44e7bed05dda401b652b260aa258ebf9",
".git/objects/e9/e99ced65989b492b950d051a456c9995e41e82": "5bb144188a70e2a84196f40e16fc153f",
".git/objects/e9/dffbed0c6e760df1550b7e4b8da279f7d531a7": "512681852d78e63f4d8b7b6661a1a399",
".git/objects/f1/bfb3ad034fe78fc4e056d173e2057e349a62d9": "59ebd6c34ac41ef3abb37b79ab5d1748",
".git/objects/f1/da57c5638288a271defa5a54ff380172fb912c": "d3190b5999684b5935f30811940b0e36",
".git/objects/e7/827718d72f138f05d00dcbbe78693a52de1ab1": "e0d1eebb2b28722eb950900873c9f796",
".git/objects/cb/cb704f74f0da977b3b5fda263324bd2dce5b45": "63334d188148f94a42104dff88a5dc2a",
".git/objects/f8/8561f7faffb58d1b8d4dc5382174f60ac1b4a5": "c8e44d9303d2b6b96870ce34dd79ca18",
".git/objects/46/8f6141a79eaa351bbad1add308eb340393753d": "fe8aeb66031a20270604e5ebdd67aeed",
".git/objects/2c/3234c174cb44d265b65e84e03a0b7b2bba16b5": "d6c9247453b3df4a85d7938c4ae982b6",
".git/objects/79/98234a24ecadf93459049755fc20fb76fa3397": "ae9c80673ce7f1d207ef762c8b768ee0",
".git/objects/79/68ba81ab0ee7302f02ab6382f01a72db9c9175": "be57556593ff864f217016b0aa02978f",
".git/objects/79/241b263b7a9df730c5f65c539013d74b152952": "0ae33b05343adda71c9d1fec0b529ef3",
".git/objects/79/436b51fe3b2cd5a224d9624767247972bd0dbe": "d8101cb7d2ccc40dd062d998fe271801",
".git/objects/2d/058fb65ebaa3d809166a62e889b3240086d253": "73a2ecccd1e8082fc51c9e15933a10b3",
".git/objects/2d/c6f7fb8cee04a342bdbac6e0fec7d0cdd5c51f": "0b4d6c3025ec9605d9eb2edbb5edf5fa",
".git/objects/2d/020a751305f4ca9fa0ac928c3ffdbfdf126c2e": "b6be42ef1d9c1c9fb17777a94122f955",
".git/objects/41/a5de7561d61ee0990ef1c25969f9c78c472952": "4775d789caa4af9f8122e0f10ff5160d",
".git/objects/41/3da4ff4d03deed35513ccf364d9b704b1150c0": "3194d99cc0eeb80f355321ca7b4c12d6",
".git/objects/41/12351f6b5dfa0fef1238faa4f5deaae3c4eef2": "e0b915593ef696747eb62b8a6e23349e",
".git/objects/41/590b9838033b73c9bb6578a44c362c7a14bd50": "a8e2004f9bacc4ed150e62ab910a1e0c",
".git/objects/83/15a6006180a313949cf1893b64a208bb0bd94c": "4837c452540f2bf4c79e2faff4a87848",
".git/objects/83/1c456145403114af0e3d95e62a4dd41d22a4c3": "2bd91f775ad49de2657e5211d0c79c76",
".git/objects/77/2d254c79023aae204f26f3244c487aadc86a1f": "7243f3a1b6bbb2aa2aa6decc67ea2662",
".git/objects/48/3fe81b0b8aa04b57ef7c696d9ee80a55193c72": "5b156fd8767116441ad25f01f224288f",
".git/objects/70/89a7668cb25d0f456db2cc744f678c6f31251b": "a2e423f7a180b89e651914c2df073d4a",
".git/objects/70/5e92362401ef28962560b693fa641780437fdf": "bb0e91ab43184a67e42974c918b82f34",
".git/objects/70/60d0be70f411a9997bcb2e3547118ba954811f": "db5f41130eec5ef3f9ef989fbb2584a3",
".git/objects/1e/0eada876563cce061346efc66d82dbcde258a1": "0ccac92643b11268771539b733ca6fde",
".git/objects/84/16be27c27d512a275df57816637b1ba513a634": "0820e1238a940cf9ec391e28ab17c7f4",
".git/objects/4a/373c8d8d7b18b61e26d493adb31dcd045e0fc7": "1dbd79489cd570e526d8bfd1f3a3b110",
".git/objects/8d/05d4ad408f709754ee26e0d4d1f31387ab535d": "35bda0292bc719640dc8be6f45e8f573",
".git/objects/15/be30737a98e15cc963ac3539bafd8ae6eaeee9": "46bfab47474abbe219a6e3a3dc1bf0e0",
".git/objects/15/e98b4cf16d0d6dd4d6875d03b9ce27ade62d13": "475fceddb704050fa7540d9ae21c51fa",
".git/objects/12/3c3b9909a0e6d900a1f0cc737e6c7361a2c957": "addb53e2cefc74f14b845bc6595de56a",
".git/objects/8c/86c89cfda6512cc639b9d39fd206f866fa2fcd": "89475ed59077e0c281b4ba1318710f70",
".git/objects/8c/8476be10d8e2e74436e5ca193347c01e983d5c": "77a1ecbacd209ccc026f0497991efbca",
".git/objects/8c/f3b4219456bcc1b809e11d1bd7e9f004a4b3a9": "cd6aa2ea0a8be0c9ad9037efdc542818",
".git/objects/85/99725c375ab249eb0ea07c42c19f19b197349d": "c5aff4c934af562f7fc8176f34a66d3b",
".git/objects/85/8e18f52af5dcd3f35c7975886e7eb39289b0af": "1b9a593a04db9c0ae1be6dbea150ff9c",
".git/objects/85/a4196ca42712029aa40088e5a1cf86af678289": "3fca2e8078614e3e21946dac3961fdcc",
".git/objects/85/9f01008807d193b82afb85f0a3017904610b78": "9a1784d7624bd4c2ba6478ca346796dc",
".git/objects/85/26a9c70c59f4840227cb49b005dd7d64e9389c": "54d41756bf99b3dedd330a14ea8dc1c5",
".git/objects/76/71f83ad5287fd7a2e41820567b79dfcff4c83b": "69dd02e1290eb435ded7df6f48ac9ff1",
".git/objects/1c/c505f459f8cd1b42f647847c596a4472c8d161": "c41874f42293a412fcaff2d17ef3a2c6",
".git/objects/82/bc7c470e6bd97185dd903830b1954a6365f28c": "cd0ef9b15cd0929bb43dfaaf2699546a",
".git/objects/2e/32794916b7689dcf0b01c4774cb38a09df3cc7": "6a52c0239b8997ac4de9589a9246126f",
".git/objects/2b/4359b0ec8c5a74509a0528bcaea248485a0238": "6fdd5f1e19a9fee319e3f22f9d209f83",
".git/objects/47/4aa6ff27691f3aae8b19625ef297c7f2485d55": "cdd8805ec67fa1567f1098ad598133ed",
".git/objects/78/7eb96296446ef31dc7157c3ec2f8f01bf10e00": "d3e4e8e7d5ea6c1e49e2690b5539a03c",
".git/objects/7a/63837ad268c9d7a0bc912d243843079c589620": "79fb0e1285194225ac8936eadaad59d6",
".git/objects/14/25b4734d92d2aa40ca36a2952dbcd89bf5f5be": "f0bd97da668092627175f4157460c62b",
".git/objects/14/915f1bb43107cdba08e9b920f1122f6b4c9d99": "5c2ba35bc9f5a748c51b4eb6a321e207",
".git/objects/14/8b3652349d6ae10dddbdd575ef2b0ad0f3ac0b": "915de487db1b829978bddbb68e64c6ab",
".git/objects/8e/a7b4b2f6afecd200b106221c77fda3619ada84": "35c6d6c9c02eb6f13de5154c8f692a56",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e047ee4cb6468ff50fe7b86462d1b58b",
".git/logs/refs/heads/master": "e047ee4cb6468ff50fe7b86462d1b58b",
".git/logs/refs/remotes/origin/HEAD": "e53a87bb75fca1fc2596508a65f2b316",
".git/logs/refs/remotes/origin/master": "7fcde7d75c5e22295ff57e4ce31fdee6",
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
".git/refs/heads/master": "c7bb64874d123e8a01ef9332273da9f7",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "c7bb64874d123e8a01ef9332273da9f7",
".git/index": "30641d4a38b5db1411645eeaf4f971df",
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
