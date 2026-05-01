# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 4.0.0 (2026-05-01)

### Bug Fixes

* @pinia-orm/normalizr -> @ctrllearning/pinia-orm-normalizr ([2b86a49](https://github.com/ctrllearning/pinia-orm/commit/2b86a4937bc5f150e0bf0ba910c2cc892d511cba))
* **#12:** flush is not working ([c71e2c8](https://github.com/ctrllearning/pinia-orm/commit/c71e2c8bd9b75fccee8db13cf0433e3173356e2b)), closes [#12](https://github.com/ctrllearning/pinia-orm/issues/12)
* **#14:** remove console.log in build & module type to get proper mjs ([09e0ebe](https://github.com/ctrllearning/pinia-orm/commit/09e0ebef1f7f15a13b44faddb27d639e25779804)), closes [#14](https://github.com/ctrllearning/pinia-orm/issues/14)
* **#77:** current build not working for nuxt2 ([0b77360](https://github.com/ctrllearning/pinia-orm/commit/0b77360889929be31982415bf867d103162ac32b)), closes [#77](https://github.com/ctrllearning/pinia-orm/issues/77)
* **axios:** Axios instance is not found ([29a91b0](https://github.com/ctrllearning/pinia-orm/commit/29a91b0ad401a587bfe2dbf878b2448e386a1487))
* Export for "dist" is broken ([a3c734e](https://github.com/ctrllearning/pinia-orm/commit/a3c734ee9eb29f8403b069a1b41fbc1a88f1721a))
* linting error op CI ([b63c03c](https://github.com/ctrllearning/pinia-orm/commit/b63c03c2f084334081185b49c48bfcc79a3d4dde))
* linting errors ([61b434f](https://github.com/ctrllearning/pinia-orm/commit/61b434f01de8fe3f5df9d3b8fe9e40f914ba0044))
* nuxt2/nuxt3 bugs ([5679a44](https://github.com/ctrllearning/pinia-orm/commit/5679a440c4a093e7d76f0c00fdf1d7d213e1b2a8))
* **pinia-orm:**  build broken cause of missing files ([ecaed0f](https://github.com/ctrllearning/pinia-orm/commit/ecaed0f0464fa7b0ebc596ebc568f2abe563c4fe))
* **pinia-orm:** `.find` returning type `any` when using `useRepo` ([#1865](https://github.com/ctrllearning/pinia-orm/issues/1865)) ([d6d3560](https://github.com/ctrllearning/pinia-orm/commit/d6d35609006d2d70554a48173ba7532b11b830bb)), closes [#1863](https://github.com/ctrllearning/pinia-orm/issues/1863)
* **pinia-orm:** `$isDirty()` in hooks on model had wrong state ([4ecf93f](https://github.com/ctrllearning/pinia-orm/commit/4ecf93f43b2dcfb98864f7c791a3d70c8be58a99))
* **pinia-orm:** `$refresh()` is not working ([#1125](https://github.com/ctrllearning/pinia-orm/issues/1125)) ([7cf0d6e](https://github.com/ctrllearning/pinia-orm/commit/7cf0d6ebffb21009192bde6e3b1b40a311700915)), closes [#1124](https://github.com/ctrllearning/pinia-orm/issues/1124)
* **pinia-orm:** `null` is casted in DateCast  ([#565](https://github.com/ctrllearning/pinia-orm/issues/565)) ([f101155](https://github.com/ctrllearning/pinia-orm/commit/f1011554877ec42f4715820e26c9ee9f375d3252))
* **pinia-orm:** `pivot` helper fields are not deleted or removed. ([#1911](https://github.com/ctrllearning/pinia-orm/issues/1911)) ([972d650](https://github.com/ctrllearning/pinia-orm/commit/972d65036e739995495fc930a919472845b56b78))
* **pinia-orm:** `saving`, `updating` hooks second param had wrong values ([#1826](https://github.com/ctrllearning/pinia-orm/issues/1826)) ([9c8ee0d](https://github.com/ctrllearning/pinia-orm/commit/9c8ee0d94702d3d558472e3b2ae7ff980d4e2133)), closes [#1707](https://github.com/ctrllearning/pinia-orm/issues/1707)
* **pinia-orm:** A few Query methods should have return type this instead of Query<M> ([#131](https://github.com/ctrllearning/pinia-orm/issues/131)) ([6eb0e87](https://github.com/ctrllearning/pinia-orm/commit/6eb0e878862c708b6a01da0f53211dac31cc6a1b))
* **pinia-orm:** Avoid attr default value modification by reference ([#1869](https://github.com/ctrllearning/pinia-orm/issues/1869)) ([2bfcb33](https://github.com/ctrllearning/pinia-orm/commit/2bfcb33527398b453a26a4d2d417a8db7bf42ce6)), closes [#1868](https://github.com/ctrllearning/pinia-orm/issues/1868)
* **pinia-orm:** belongsToMany not working correctly ([bc3e20a](https://github.com/ctrllearning/pinia-orm/commit/bc3e20ada9176cc87ed35911456d039230e51f4a))
* **pinia-orm:** BelongsToMany relation returns a toplevel 'pivot' reation ([#1909](https://github.com/ctrllearning/pinia-orm/issues/1909)) ([a86c2d9](https://github.com/ctrllearning/pinia-orm/commit/a86c2d9f0e403127ca778a07c1b88b5dc1fdced2))
* **pinia-orm:** belongsToMany was behaving incorrectly nested ([#118](https://github.com/ctrllearning/pinia-orm/issues/118)) ([5394b1d](https://github.com/ctrllearning/pinia-orm/commit/5394b1da9268a388d45a298d231cfbe4de64c6de))
* **pinia-orm:** Change compile target to fix loader errors with Nullish Coalescing operator ([0c810f8](https://github.com/ctrllearning/pinia-orm/commit/0c810f8be5daea3193ca6f0fa19e056ae33f5d10))
* **pinia-orm:** Change plugin registration to be still compatible with pinia types ([#1902](https://github.com/ctrllearning/pinia-orm/issues/1902)) ([12a9c52](https://github.com/ctrllearning/pinia-orm/commit/12a9c52b7db34527370b9ac37a4cda84ef3669e0))
* **pinia-orm:** clean up & update module build for better import ([c301807](https://github.com/ctrllearning/pinia-orm/commit/c301807e468dd2fa4c3052a32905896caf669eb3))
* **pinia-orm:** Data was wrong for `belongsTo` & `hasOne` with composite key ([#1904](https://github.com/ctrllearning/pinia-orm/issues/1904)) ([920f43b](https://github.com/ctrllearning/pinia-orm/commit/920f43bea2d4178eb888e72b1c1876fce25fc89b))
* **pinia-orm:** DateCast still causing unexpected result ([519681c](https://github.com/ctrllearning/pinia-orm/commit/519681c258885110478191e9bfd3a9dfb016d670))
* **pinia-orm:** DateCast with null causes type error with empty object ([2caa97a](https://github.com/ctrllearning/pinia-orm/commit/2caa97a63be98ecc1f0ce863a5ad529bda4e3cf3))
* **pinia-orm:** delete on cascade doesn't work with n:m relations ([#562](https://github.com/ctrllearning/pinia-orm/issues/562)) ([37b767c](https://github.com/ctrllearning/pinia-orm/commit/37b767c809ea6ea9c8e71d696353b2cfd994ca41))
* **pinia-orm:** Export missing composable `useSortBy` ([#1882](https://github.com/ctrllearning/pinia-orm/issues/1882)) ([3210918](https://github.com/ctrllearning/pinia-orm/commit/3210918d4e678c4a25f1c5acfffac02eb3daf746))
* **pinia-orm:** Failed to resolve import "vue-demi" ([#1965](https://github.com/ctrllearning/pinia-orm/issues/1965)) ([74e7fc5](https://github.com/ctrllearning/pinia-orm/commit/74e7fc5c4e40eb3d235dca75c1ada865680d249f))
* **pinia-orm:** fallback for "Buffer is not defined" & fix cache config ([#360](https://github.com/ctrllearning/pinia-orm/issues/360)) ([4c9a9f1](https://github.com/ctrllearning/pinia-orm/commit/4c9a9f1abedbdee50bf1873478dba593573c403a))
* **pinia-orm:** Fix eager load relations with complex foreign/local keys ([#1798](https://github.com/ctrllearning/pinia-orm/issues/1798)) ([f109405](https://github.com/ctrllearning/pinia-orm/commit/f1094057141595b2c4ee303a08076611a5e8a865))
* **pinia-orm:** Get mutator was called twice ([#1827](https://github.com/ctrllearning/pinia-orm/issues/1827)) ([70a2cd0](https://github.com/ctrllearning/pinia-orm/commit/70a2cd004475b81c144f241f8a8d4c55c22a5170)), closes [#1818](https://github.com/ctrllearning/pinia-orm/issues/1818)
* **pinia-orm:** Get mutators were wrong for updated models ([#1824](https://github.com/ctrllearning/pinia-orm/issues/1824)) ([64b3b57](https://github.com/ctrllearning/pinia-orm/commit/64b3b57e2b9a144c4cf043de90d320cb37c139d8)), closes [#1818](https://github.com/ctrllearning/pinia-orm/issues/1818)
* **pinia-orm:** Hooks should update cache & hydration ([#1113](https://github.com/ctrllearning/pinia-orm/issues/1113)) ([a9fd092](https://github.com/ctrllearning/pinia-orm/commit/a9fd09263d5e57cd5c549db8dbadc8503d866d3b))
* **pinia-orm:** Improve Date serialization in Model class ([#1121](https://github.com/ctrllearning/pinia-orm/issues/1121)) ([84aeb72](https://github.com/ctrllearning/pinia-orm/commit/84aeb72f9739f634aac8b71a2c80708526711825))
* **pinia-orm:** Model original data is overwritten by different namspace models with same ID ([#1954](https://github.com/ctrllearning/pinia-orm/issues/1954)) ([15f5c42](https://github.com/ctrllearning/pinia-orm/commit/15f5c4216b0e6d57e7b46b298028012b0027ecdd))
* **pinia-orm:** multiple belongsTo relationships between 2 entities lead to unintended outcome ([#369](https://github.com/ctrllearning/pinia-orm/issues/369)) ([809f234](https://github.com/ctrllearning/pinia-orm/commit/809f2340da08001f240f8196135b84834f333d8d)), closes [#363](https://github.com/ctrllearning/pinia-orm/issues/363)
* **pinia-orm:** multiple belongsToMany relations still wrong saved ([#373](https://github.com/ctrllearning/pinia-orm/issues/373)) ([6fd7348](https://github.com/ctrllearning/pinia-orm/commit/6fd73485afc283be72717b3d510f6ecfe6b3a5b7))
* **pinia-orm:** Mutators still don't apply on update consistently ([#1828](https://github.com/ctrllearning/pinia-orm/issues/1828)) ([9ed41d3](https://github.com/ctrllearning/pinia-orm/commit/9ed41d3f1e0cbeaa72bd6530a50e47bb2b1cd87f)), closes [#1818](https://github.com/ctrllearning/pinia-orm/issues/1818)
* **pinia-orm:** Mutators/Casts on related models with belongsToMany were wrong ([#1851](https://github.com/ctrllearning/pinia-orm/issues/1851)) ([e19175b](https://github.com/ctrllearning/pinia-orm/commit/e19175b901469eb55ca0e23feb74e93618379c93)), closes [#1849](https://github.com/ctrllearning/pinia-orm/issues/1849)
* **pinia-orm:** namespace + BelongsToMany throws error on query ([#1883](https://github.com/ctrllearning/pinia-orm/issues/1883)) ([9747a33](https://github.com/ctrllearning/pinia-orm/commit/9747a33e3bcedaa15f66a4187115c70319d1f34b))
* **pinia-orm:** Ordering sometimes wrong with Query.orderBy and UseCollect.sortBy ([#1957](https://github.com/ctrllearning/pinia-orm/issues/1957)) ([a5a2c93](https://github.com/ctrllearning/pinia-orm/commit/a5a2c935aee594ce1303ffd6234e8cb1939e7330))
* **pinia-orm:** pivot are not correctly loaded ([#438](https://github.com/ctrllearning/pinia-orm/issues/438)) ([589136a](https://github.com/ctrllearning/pinia-orm/commit/589136a1349adced1371a1b26d8a003768a69bcc))
* **pinia-orm:** proper exports for collection and uid helpers ([#1681](https://github.com/ctrllearning/pinia-orm/issues/1681)) ([ab5e245](https://github.com/ctrllearning/pinia-orm/commit/ab5e2451420f884ce11f56ce2b6fe1fd796fa168))
* **pinia-orm:** Relations don't use namespace to make/retrieve related model ([#1834](https://github.com/ctrllearning/pinia-orm/issues/1834)) ([807fa36](https://github.com/ctrllearning/pinia-orm/commit/807fa36d7a47dda922f501c1733c5f3d25560504)), closes [#1740](https://github.com/ctrllearning/pinia-orm/issues/1740)
* **pinia-orm:** Serialization was wrong with custom cast with custom serialization ([#1866](https://github.com/ctrllearning/pinia-orm/issues/1866)) ([608f3dd](https://github.com/ctrllearning/pinia-orm/commit/608f3dd959be4648f2194843e7d8b7622fa74136)), closes [#1864](https://github.com/ctrllearning/pinia-orm/issues/1864)
* **pinia-orm:** Two same `belongsToMany` with inverse keys on same model are causing wrong saved data ([#1860](https://github.com/ctrllearning/pinia-orm/issues/1860)) ([ed747cb](https://github.com/ctrllearning/pinia-orm/commit/ed747cbf9f567398d15f7a8b5256f11c4f87d4af)), closes [#1857](https://github.com/ctrllearning/pinia-orm/issues/1857)
* **pinia-orm:** Typings of `useRepo` with Repository are broken ([#1848](https://github.com/ctrllearning/pinia-orm/issues/1848)) ([0f09f09](https://github.com/ctrllearning/pinia-orm/commit/0f09f09b74968869923d9004035031fe681f5fa7)), closes [#1847](https://github.com/ctrllearning/pinia-orm/issues/1847)
* **pinia-orm:** UID Decorator: Setting Custom Alphabet Results in "undefined" Instead of Characters in UIDs ([#1956](https://github.com/ctrllearning/pinia-orm/issues/1956)) ([d400e21](https://github.com/ctrllearning/pinia-orm/commit/d400e21fc81667fc6680cb7a9c4375d18769bc33)), closes [#1928](https://github.com/ctrllearning/pinia-orm/issues/1928)
* **pinia-orm:** Updates were wrong for hydrated cache for casts & mutators ([#1823](https://github.com/ctrllearning/pinia-orm/issues/1823)) ([76eb4a5](https://github.com/ctrllearning/pinia-orm/commit/76eb4a5c5cbb76a8d62fe7af37bb32e9953fbb8f)), closes [#1818](https://github.com/ctrllearning/pinia-orm/issues/1818)
* tests falen, warning opgelost ([a4ad8f4](https://github.com/ctrllearning/pinia-orm/commit/a4ad8f4f469d4c964819a0af9e1b2712a96b350b))
* update vue 2 reactivity ([#1773](https://github.com/ctrllearning/pinia-orm/issues/1773)) ([676e9a0](https://github.com/ctrllearning/pinia-orm/commit/676e9a05601de0c7512b451cc008a4e0cd518500))

### chore

* **pinia-orm:** Reduce build size by 33% ([bcd2f58](https://github.com/ctrllearning/pinia-orm/commit/bcd2f5815714fcd2abc9227a22a2e6cec9753a7f))

### Code Refactoring

* **pinia-orm:** Code clean up ([7b7f198](https://github.com/ctrllearning/pinia-orm/commit/7b7f198a914d41b915e2684a66369205e4c1bf58))

### Features

* **#16:** Pass pinia options via model property ([9b50331](https://github.com/ctrllearning/pinia-orm/commit/9b5033184ee865cac58ea4e2cfdaf4ffeec3f4dc)), closes [#16](https://github.com/ctrllearning/pinia-orm/issues/16)
* added 182 tests & refactored code/tests ([eaa5a31](https://github.com/ctrllearning/pinia-orm/commit/eaa5a3166d128d4ba8f34bd52afc47527d866b36))
* Attribute autocompletion in where and with ([#816](https://github.com/ctrllearning/pinia-orm/issues/816)) ([676ad48](https://github.com/ctrllearning/pinia-orm/commit/676ad482e323fcc6183be0640e0a57531e0a1ae3)), closes [#1759](https://github.com/ctrllearning/pinia-orm/issues/1759)
* licenses and package-versions ([9cff6e2](https://github.com/ctrllearning/pinia-orm/commit/9cff6e2e804a253bd61e6c9bc0d718ff1bb5471e))
* **pinia-orm:** Add `morphedByMany` as relation ([#1897](https://github.com/ctrllearning/pinia-orm/issues/1897)) ([86bd359](https://github.com/ctrllearning/pinia-orm/commit/86bd359d10fc07a37559710f7b8307bc89a485b7))
* **pinia-orm:** add `record` to saving hooks ([#491](https://github.com/ctrllearning/pinia-orm/issues/491)) ([3153101](https://github.com/ctrllearning/pinia-orm/commit/315310133762e744d4901cb8de2d55f6f37277ad))
* **pinia-orm:** add `retrieved` life cycle hook ([#145](https://github.com/ctrllearning/pinia-orm/issues/145)) ([7499c93](https://github.com/ctrllearning/pinia-orm/commit/7499c93070388dfccda0af9cd41d59d92fbb06b4))
* **pinia-orm:** Add `where(Not)Null` and `(or)where(Not)In` ([#1831](https://github.com/ctrllearning/pinia-orm/issues/1831)) ([bbf7a93](https://github.com/ctrllearning/pinia-orm/commit/bbf7a935429f865e5b61bbcfc6170b1f6e97caa2)), closes [#1765](https://github.com/ctrllearning/pinia-orm/issues/1765)
* **pinia-orm:** add belongsToMany relation function ([#79](https://github.com/ctrllearning/pinia-orm/issues/79)) ([8c1b91e](https://github.com/ctrllearning/pinia-orm/commit/8c1b91e9a3f7114580363c8f976c20014894d92f))
* **pinia-orm:** add life-cycle-hooks ([#91](https://github.com/ctrllearning/pinia-orm/issues/91)) ([ca67576](https://github.com/ctrllearning/pinia-orm/commit/ca675768c662416cf053ad932ba4715f56275553))
* **pinia-orm:** add mutators ([#84](https://github.com/ctrllearning/pinia-orm/issues/84)) ([5757f97](https://github.com/ctrllearning/pinia-orm/commit/5757f97e974e9fcca0be773b56931001bbd46005))
* **pinia-orm:** add option for custom pivotKey for relations with pivot ([#1907](https://github.com/ctrllearning/pinia-orm/issues/1907)) ([aceb134](https://github.com/ctrllearning/pinia-orm/commit/aceb13461bcd3ea679a7a38a98722ea382c417ab))
* **pinia-orm:** add query method "has" ([87bff1e](https://github.com/ctrllearning/pinia-orm/commit/87bff1e3bae6fb7fcc16047fdc58e44312a1fab2))
* **pinia-orm:** add query methods ([#105](https://github.com/ctrllearning/pinia-orm/issues/105)) ([b28fbac](https://github.com/ctrllearning/pinia-orm/commit/b28fbac55b79af9c8784c458af7fb54b1de34074))
* **pinia-orm:** Add single table inheritance support ([#117](https://github.com/ctrllearning/pinia-orm/issues/117)) ([36a00aa](https://github.com/ctrllearning/pinia-orm/commit/36a00aa50eb4737af909a5180479a9813826994b)), closes [vuex-orm/#519](https://github.com/ctrllearning/pinia-orm/issues/519)
* **pinia-orm:** Add the option for new not to persist the model ([#1107](https://github.com/ctrllearning/pinia-orm/issues/1107)) ([dc3e13e](https://github.com/ctrllearning/pinia-orm/commit/dc3e13e53399c71ca1d77db1ea2ece5accc3a955))
* **pinia-orm:** add the possibility to create many models with "make" in repository ([#133](https://github.com/ctrllearning/pinia-orm/issues/133)) ([c7487cd](https://github.com/ctrllearning/pinia-orm/commit/c7487cd64159a7a78e426f5c7863eb33b23ce033))
* **pinia-orm:** Change orderBy execution ([#1809](https://github.com/ctrllearning/pinia-orm/issues/1809)) ([61d8fc3](https://github.com/ctrllearning/pinia-orm/commit/61d8fc3f1f707b112ce9ddb17ec783190dacfbb4)), closes [#1461](https://github.com/ctrllearning/pinia-orm/issues/1461)
* **pinia-orm:** Improve DateCast & orderBy for Dates ([#1825](https://github.com/ctrllearning/pinia-orm/issues/1825)) ([34348a5](https://github.com/ctrllearning/pinia-orm/commit/34348a51386068ffdeb6f562c074b875bc6c81fa)), closes [#1747](https://github.com/ctrllearning/pinia-orm/issues/1747)
* **pinia-orm:** Improve size & performance ([f6ceab5](https://github.com/ctrllearning/pinia-orm/commit/f6ceab5b0d8e9b9eea6eef7a8682adb42dd47040))
* **pinia-orm:** Pinia setup store syntax support ([#1905](https://github.com/ctrllearning/pinia-orm/issues/1905)) ([953826a](https://github.com/ctrllearning/pinia-orm/commit/953826a9859f054d9ae640d438d78ab7a916199e)), closes [#1888](https://github.com/ctrllearning/pinia-orm/issues/1888)
* **pinia-orm:** STI Models can only be retrieved through parent ([#1835](https://github.com/ctrllearning/pinia-orm/issues/1835)) ([6bbcf83](https://github.com/ctrllearning/pinia-orm/commit/6bbcf83dc9fa9ed64a3c50f2380668b2a3a677f9)), closes [#1735](https://github.com/ctrllearning/pinia-orm/issues/1735)

### Performance Improvements

* **pinia-orm:** Improve `find` speed for huge data ([1714d7a](https://github.com/ctrllearning/pinia-orm/commit/1714d7aeea16747ac13ac54c7d1d6445bd5b007f))

### BREAKING CHANGES

* **pinia-orm:** Dropping IE 11 support by removing last polyfill. Since pinia is also using "includes" i am dropping it. If needed please open a ticket to discuss
* **pinia-orm:** removed the options to pass a piniaStore or connetion to `useRepo`

# @ctrllearning/pinia-orm

## 3.1.0

### Minor Changes

- [#2](https://github.com/CtrlLearning/pinia-orm/pull/2) [`04d9428`](https://github.com/CtrlLearning/pinia-orm/commit/04d942835217675480be6df9f3d3c93c210509f4) Thanks [@markschuurmans](https://github.com/markschuurmans)! - test release

### Patch Changes

- [#1](https://github.com/CtrlLearning/pinia-orm/pull/1) [`b8b4520`](https://github.com/CtrlLearning/pinia-orm/commit/b8b4520e40492f6c660362c1ab71fb2df6ddd215) Thanks [@markschuurmans](https://github.com/markschuurmans)! - test

- Updated dependencies [[`b8b4520`](https://github.com/CtrlLearning/pinia-orm/commit/b8b4520e40492f6c660362c1ab71fb2df6ddd215), [`04d9428`](https://github.com/CtrlLearning/pinia-orm/commit/04d942835217675480be6df9f3d3c93c210509f4)]:
  - @ctrllearning/pinia-orm-normalizr@3.1.0
