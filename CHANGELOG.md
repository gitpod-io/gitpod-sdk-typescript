# Changelog

## 0.9.0 (2026-01-09)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.8.0...v0.9.0)

### Features

* **agent:** add group-based SCM tools access control ([9f8d2f9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/9f8d2f902fc221a89e27ae74e47315d6300f2af2))
* **api:** add ImageInput to UserInputBlock proto ([103bf02](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/103bf02589912eb6d2d04626372edbfe4868d041))
* **api:** add recommended editors configuration to project settings ([57ae935](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/57ae9355b5e86430af037958dc529a942fbeb05b))
* **db:** add webhooks table with trigger reference ([2f87f2d](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/2f87f2da279d2727a3eb0288d2365f1c1b0aada3))
* **prebuild:** expose snapshot completion percentage in prebuild status ([778c94b](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/778c94b9b4e453853efd9b611bfeb8d9e9d81f39))
* **skills:** add organization-level skills support ([24cb9a2](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/24cb9a234c1deb8238e6f42dbed2ace01ff35d7e))


### Chores

* break long lines in snippets into multiline ([9fa685f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/9fa685ffc219966cd2480ae7250e646994a7331d))
* **internal:** codegen related update ([74962c9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/74962c94a845f1645dd6df17b8a7240894ff64c9))
* pin GitHub Actions to SHA ([d29f17d](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d29f17de8d5cb9632525387669978058c18ba0a7))

## 0.8.0 (2025-12-15)

Full Changelog: [v0.7.11...v0.8.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.11...v0.8.0)

### Features

* **api:** RBAC APIs ([5888854](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/588885414cc29e94ec512952822d30f2007cbbae))

## 0.7.11 (2025-12-15)

Full Changelog: [v0.7.10...v0.7.11](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.10...v0.7.11)

## 0.7.10 (2025-12-15)

Full Changelog: [v0.7.9...v0.7.10](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.9...v0.7.10)

## 0.7.9 (2025-12-15)

Full Changelog: [v0.7.8...v0.7.9](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.8...v0.7.9)

## 0.7.8 (2025-12-12)

Full Changelog: [v0.7.7...v0.7.8](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.7...v0.7.8)

## 0.7.7 (2025-12-09)

Full Changelog: [v0.7.6...v0.7.7](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.6...v0.7.7)

## 0.7.6 (2025-12-09)

Full Changelog: [v0.7.5...v0.7.6](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.5...v0.7.6)

## 0.7.5 (2025-12-09)

Full Changelog: [v0.7.4...v0.7.5](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.4...v0.7.5)

## 0.7.4 (2025-12-09)

Full Changelog: [v0.7.3...v0.7.4](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.3...v0.7.4)

## 0.7.3 (2025-12-09)

Full Changelog: [v0.7.2...v0.7.3](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.2...v0.7.3)

## 0.7.2 (2025-12-09)

Full Changelog: [v0.7.1...v0.7.2](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.1...v0.7.2)

## 0.7.1 (2025-12-09)

Full Changelog: [v0.7.0...v0.7.1](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.7.0...v0.7.1)

## 0.7.0 (2025-12-09)

Full Changelog: [v0.6.1...v0.7.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.6.1...v0.7.0)

### Features

* **api:** gitpod -&gt; ona ([7dd2c73](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/7dd2c736dca78fd6e3ae53f7e0f4c38c1d3e8d51))
* **client:** add support for endpoint-specific base URLs ([58af560](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/58af5608bf0d0d76c9dd265a490d783d030c8a1b))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([79e4102](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/79e410295dc2458cd03350be63599471fc824b9d))
* **client:** explicitly copy fetch in withOptions ([a1b72c1](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/a1b72c1c69aa05aa06e044a90a44d7916b680561))
* **client:** get fetchOptions type more reliably ([ba531a3](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/ba531a3e666c9d4537b81ec68de4075d12f13d01))
* coerce nullable values to undefined ([ffdccb0](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/ffdccb0e49830a82590c56a6d7f3a6bacbd8fa3f))
* **mcp:** correct code tool API endpoint ([3241e0a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/3241e0a1f56ba7df24cb526bd98351bf176c9b88))
* **mcp:** return correct lines on typescript errors ([4b60eca](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/4b60eca50967c00d9f338a11d692dc6ebffd6b01))


### Performance Improvements

* faster formatting ([0bcf5a5](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/0bcf5a56589d7394d44fd36616b3849f7d775404))


### Chores

* add docs to RequestOptions type ([8c480ed](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/8c480ede43e6e1a6cc37ab844e4934831478a5e0))
* ci build action ([f6572f1](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/f6572f1fc89db0e5e02d271e49cff571cf6b3c60))
* **ci:** enable for pull requests ([eac032a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/eac032a15b4c7a929096cea573bf3c8290021f84))
* **ci:** only run for pushes and fork pull requests ([94a8575](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/94a857551f39d1e2828c253e250b0fb95effa5bb))
* **client:** fix logger property type ([71b844a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/71b844a4b2b13df332b3e2ce9ddc6c825abeb22e))
* **client:** improve path param validation ([79ac088](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/79ac088c67fd2c9d476f0ce0f279985d6df25f4e))
* **client:** refactor imports ([44c7836](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/44c7836e0e2cd7f4ec4ae8ac9d34342c5c66a4bd))
* do not install brew dependencies in ./scripts/bootstrap by default ([d12db33](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d12db33eb3a4911c3bb45233590005b21efb7e1c))
* **internal:** codegen related update ([3f4e8d1](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/3f4e8d16cb0818903865e6d40605f6982110a20f))
* **internal:** codegen related update ([57886a7](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/57886a747a3af50684003d2e40184ffc0de3c65e))
* **internal:** codegen related update ([e888600](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e88860061aee55c5e978ace2556a36fd97ef0258))
* **internal:** fix incremental formatting in some cases ([0a51f9f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/0a51f9f3dba744cf5282eba4b188047b03b391f5))
* **internal:** ignore .eslintcache ([cf1696e](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/cf1696e737f8896647f8dd9fad70a78988958672))
* **internal:** move publish config ([f8c49d7](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/f8c49d7ed61411de581e4dba05eba8456eb72f6c))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([602b768](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/602b7681eaa94ea1672ebd58852478dab56f883c))
* **internal:** remove redundant imports config ([de89cb7](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/de89cb791929375079082c1bd13cc13620ed8aae))
* **internal:** update comment in script ([adcc1e0](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/adcc1e04378865df15272dcc788b96f2d8781a8a))
* **internal:** upgrade eslint ([878386a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/878386aebf1c8c9287f8362e0a3f697e16cd857a))
* **internal:** use npm pack for build uploads ([0febcc8](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/0febcc870974caef358d1b67c992a4fb408e692d))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([8ed65d8](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/8ed65d8b6ea2757ce26cdcc509be12c6a18fa37a))
* make some internal functions async ([ac410b3](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/ac410b310603548f18d46976224a69fb9eabf5a3))
* **readme:** update badges ([5a69575](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/5a695752d9af858bb04f9e774ddf76f8a22544bb))
* **readme:** use better example snippet for undocumented params ([75e8a63](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/75e8a63ec1307838671b24cda3bb3cbeb4ea9dbf))
* **ts:** reorder package.json imports ([a896a22](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/a896a228b3ab8950f9a7c016bc445bfe43a88240))
* update @stainless-api/prism-cli to v5.15.0 ([fe746f4](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/fe746f463f825425f80e70dca69edd18032872db))


### Refactors

* **types:** replace Record with mapped types ([2b43824](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/2b43824896e47429c4eeb102bae2fb0ca820528f))

## 0.6.1 (2025-06-14)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.6.0...v0.6.1)

### Bug Fixes

* publish script — handle NPM errors correctly ([be3283b](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/be3283b4cfb44646b33bf364fb5380d3a226f6a0))


### Chores

* **internal:** add pure annotations, make base APIResource abstract ([e489880](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e48988064ee76b254985960b3c8c7c649d47398e))
* **internal:** version bump ([94014af](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/94014af9bfcfcf6e676dcc7934687db8704b429f))

## 0.6.0 (2025-06-06)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** manual updates ([3c6b1d3](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/3c6b1d33ef500d073008f79a05a58efe8aae6eb2))
* **api:** manual updates ([078548f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/078548f4b1cd2101e258bd27c5c0fd5628566a88))
* **api:** manual updates ([77b6f44](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/77b6f44b695808f66ce955683f86965c3b8605fb))
* **api:** manual updates ([f0edc96](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/f0edc9696d24e0a4e4ed648b585883616cde251f))
* **api:** manual updates ([f50f5ad](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/f50f5adf1ea13bb39845ff8644e2f670bc01856d))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#66](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/66)) ([8aa007b](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/8aa007bc39d87e8b96861748a23d4faa5d084c8a))
* **client:** fix TypeError with undefined File ([#50](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/50)) ([1262a7b](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/1262a7bcd5e0619e1eaef399ee967b629c79ce09))
* **client:** send `X-Stainless-Timeout` in seconds ([#63](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/63)) ([dab2433](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/dab243394f6b0f60cedc65f3eabcf1bfe64ed640))
* **client:** send all configured auth headers ([#68](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/68)) ([3ced793](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/3ced7939c98da7bc8c42a457da3aee4510a778a7))
* **exports:** ensure resource imports don't require /index ([#57](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/57)) ([23166e6](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/23166e607ec2b8915a97e974e09cdc0abdbc6c23))
* **internal:** add mts file + crypto shim types ([#58](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/58)) ([716b94c](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/716b94c4be5a42cfaf9f59fcdb9332b912113869))
* **internal:** clean up undefined File test ([#51](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/51)) ([e1e0fb5](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e1e0fb509bfd526c9a8183480ad88330f0c7b240))
* **internal:** fix file uploads in node 18 jest ([702757c](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/702757cc250c54fa31731233f3b88841b42baa32))
* **internal:** return in castToError instead of throwing ([#43](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/43)) ([2f70ad9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/2f70ad9e95854605f9f38c401d49f8422d62af75))
* **mcp:** remove unused tools.ts ([#67](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/67)) ([65686bf](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/65686bf96f2a2147c620810605bc66876ec0c13e))
* **tests:** manually reset node:buffer File ([#52](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/52)) ([2eded46](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/2eded46344af89fbaef371ab685056b8952aa946))


### Chores

* **ci:** add timeout thresholds for CI jobs ([d78258c](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d78258ce7b00f01f7714c59bda0d12d3f70b7ec3))
* **ci:** only use depot for staging repos ([678516c](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/678516c59e2a0a39caa817aa847f9a3f197172b7))
* **client:** make jsonl methods consistent with other streaming methods ([#65](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/65)) ([62c4790](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/62c4790ed0515d7644fca6075b5d9304bd4b1642))
* **client:** minor internal fixes ([e3c6fb8](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e3c6fb879bc94b55e66f65a5238102ba390387a8))
* **client:** move misc public files to new `core/` directory, deprecate old paths ([#62](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/62)) ([e4008c3](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e4008c3ab36557410e2124287eb9ab861e5d81d2))
* **client:** only accept standard types for file uploads ([#47](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/47)) ([cd888bc](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/cd888bc3c16d0d2cbf3b3c96ab23dc7d46360598))
* **docs:** improve docs for withResponse/asResponse ([#54](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/54)) ([25092c5](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/25092c5070acc3602094bf34f304105cb7bd7157))
* **exports:** cleaner resource index imports ([#60](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/60)) ([0049aac](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/0049aac07585fb4a1536ef6ff191b4ba5d5b9720))
* **exports:** stop using path fallbacks ([#61](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/61)) ([a9df2c1](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/a9df2c166e44d19ff8b374e5225d29971c72bb3e))
* **internal:** add aliases for Record and Array ([#64](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/64)) ([38e00c9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/38e00c9995d8528c361bf709d3951a0f00238ada))
* **internal:** codegen related update ([e94c558](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e94c55895af8caf60720420c33c1e22c6e2d5bd4))
* **internal:** codegen related update ([c60c38f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/c60c38f7f805d86e56d6a2f96c742b1549d62e5c))
* **internal:** codegen related update ([#55](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/55)) ([71a1bef](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/71a1bef58884eb34434a3e590cf0942c8166d33b))
* **internal:** constrain synckit dev dependency ([#49](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/49)) ([41da630](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/41da630123709c225f8c173bbd2aace382d0e865))
* **internal:** fix tests failing on node v18 ([#48](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/48)) ([c1031bd](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/c1031bd67090cc27d55472a5a32ee70df9ee781e))
* **internal:** improve node 18 shims ([726127a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/726127ae7ad639fc5587724e20559893ea3c67eb))
* **internal:** minor client file refactoring ([#59](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/59)) ([51d47fd](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/51d47fd93e6be04336019ec05c60841a5d25195c))
* **internal:** reduce CI branch coverage ([e8cd029](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e8cd029655896872fa1ccd8b71807f8c0ac565c9))
* **internal:** refactor utils ([eafa310](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/eafa310bb3964addb8bbbf8c8811564f6985068e))
* **internal:** remove extra empty newlines ([#56](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/56)) ([6431dc9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/6431dc9927a315b9faf1e906c95930bcec65f3d5))
* **internal:** remove unnecessary todo ([#45](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/45)) ([bd9e536](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/bd9e5361115c7f9adc8c8d9798f38a04b55ab03c))
* **internal:** share typescript helpers ([b52aa07](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/b52aa0747ab51dbdf0eeb63e3fce2c255f47a06c))
* **internal:** upload builds and expand CI branch coverage ([dbd4446](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/dbd4446148041e01ec058c0a19568a17ad7384f7))
* **perf:** faster base64 decoding ([b3a1e96](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/b3a1e96efe94fd726a49c050eb1a6e0069171983))
* **tests:** improve enum examples ([#69](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/69)) ([af4a60a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/af4a60aa5f1bc957cdb96b0996f4ee02c0d7d469))
* **types:** improved go to definition on fetchOptions ([#53](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/53)) ([54a7db8](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/54a7db864f182bd872aeceae04747930a3e419a7))


### Documentation

* **readme:** fix typo ([fea4ecb](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/fea4ecb31efa7b73aec94c3aed1f574b80611110))
* update URLs from stainlessapi.com to stainless.com ([#46](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/46)) ([6450e47](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/6450e47a5f12103274528a67028b91a01b9c55b8))

## 0.5.0 (2025-02-21)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** manual updates ([#38](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/38)) ([56c63d2](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/56c63d2b9185af120ba39e37a9a5bb2516cf33d6))
* **client:** improve logging ([#40](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/40)) ([65d2c1f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/65d2c1f8660acb73bcf781ced4729f969cd31296))

## 0.4.0 (2025-02-21)

Full Changelog: [v0.3.1...v0.4.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.3.1...v0.4.0)

### Features

* add lib and examples ([#36](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/36)) ([1b0851c](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/1b0851cdf0944a6a784dd4cf370fa967aaf56a5f))
* **api:** manual updates ([#33](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/33)) ([6c0b9a6](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/6c0b9a6c1140068f2838f8451e375813f8181eb7))


### Bug Fixes

* optimize sse chunk reading off-by-one error ([#31](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/31)) ([ff08afe](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/ff08afe756856c253787602bc15f85557425ba01))

## 0.3.1 (2025-02-18)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.3.0...v0.3.1)

### Features

* **api:** manual updates ([#28](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/28)) ([fce5f5e](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/fce5f5ef736814ab37d5bb7de15d68a5a42d7ace))

## 0.3.0 (2025-02-18)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** manual updates ([#24](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/24)) ([66153db](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/66153dbf178520a0a52f26e0e10b4ef1421a9317))
* **api:** manual updates ([#26](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/26)) ([b6fb638](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/b6fb638e126b63f4563b789a6e1f91a9e11f9320))

## 0.2.0 (2025-02-18)

Full Changelog: [v0.1.2...v0.2.0](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.1.2...v0.2.0)

### Features

* **api:** manual updates ([#20](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/20)) ([e935d2b](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e935d2b37a8710c5f8d002b1c6f32529706a4693))
* **api:** manual updates ([#22](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/22)) ([8eea1c9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/8eea1c93c572b76e4317f58e8d5549c4b49387f3))
* **api:** Organizations Open API docs ([#18](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/18)) ([c6c8b20](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/c6c8b2098433a1246329f4dec7371e2ae2963b01))


### Chores

* **internal:** fix tests not always being type checked ([#21](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/21)) ([5b68e63](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/5b68e634ad747b78ee55b4d30920f010953422be))

## 0.1.2 (2025-02-14)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.1.1...v0.1.2)

### Features

* **api:** manual updates ([#14](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/14)) ([7c398fb](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/7c398fb2159022f99e478d87599da377bfb070db))
* **api:** manual updates ([#16](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/16)) ([75c7fca](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/75c7fcaecd06e9f190a9246f9c055168a9f3de11))

## 0.1.1 (2025-02-14)

Full Changelog: [v0.1.0-alpha.4...v0.1.1](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.1.0-alpha.4...v0.1.1)

### Features

* **api:** dummy change to cause a version PR ([#12](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/12)) ([394d363](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/394d36352fafe2331e4e554fdeaa4c002cf879ea))


### Bug Fixes

* **client:** fix export map for index exports, accept BunFile ([#11](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/11)) ([26ada5f](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/26ada5f30ba94e0fa0640b1e4645a7c37f30385a))


### Chores

* **internal:** update eslint config ([#9](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/9)) ([9729975](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/9729975380bd7890239e813c30df668b5a7ff63d))

## 0.1.0-alpha.4 (2025-02-13)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.4](https://github.com/gitpod-io/gitpod-sdk-typescript/compare/v0.0.1-alpha.0...v0.1.0-alpha.4)

### Features

* **api:** manual updates ([5c68c60](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/5c68c60a7762bd7b848859694b940cd5dd964d43))
* **api:** manual updates ([d849bff](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d849bff6aebcaf5f1a105e549aae1adb0a11edc5))
* **api:** manual updates ([56d5f57](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/56d5f57d2e1f7dea579ce9fe42b17ea62c6c65ad))
* **api:** manual updates ([d762a2d](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d762a2dc396245e439f934a76d027811326622c9))
* **api:** manual updates ([#6](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/6)) ([78dba3a](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/78dba3a84e0f7c8c1756f6409e29839b49139843))
* **api:** Overview page updates ([#7](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/7)) ([02120d9](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/02120d96844eeaa4e0de4c24d05eb79f2eef768e))
* **api:** switch to new typescript design ([d6254ed](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/d6254ed59ff136362bd409ec0700f655d8ac55cd))
* **api:** update with latest API spec ([#5](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/5)) ([a0e6a16](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/a0e6a16857ed8d1cb985303d27c58e8cfc8bfa47))


### Chores

* go live ([#1](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/1)) ([92314de](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/92314dea88f7a096397e0e15f0621e86eab33df4))
* **internal:** migrate to eslint v9 ([#4](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/4)) ([0bbb2de](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/0bbb2de50b0c2c8f8f8bfd084da763a2f4a94e1e))
* **internal:** remove unused method ([#3](https://github.com/gitpod-io/gitpod-sdk-typescript/issues/3)) ([e8497fb](https://github.com/gitpod-io/gitpod-sdk-typescript/commit/e8497fb8c7509cd376f8e8513f6b89c847776c2c))
