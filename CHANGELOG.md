# Changelog

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
