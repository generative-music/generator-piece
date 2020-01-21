# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

(none)

## [1.16.0] - 2020-01-20

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.23.0`

## [1.15.0] - 2019-11-24

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.22.0`

## [1.14.0] - 2019-11-10

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.21.0`

## [1.13.0] - 2019-10-27

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.20.0`

## [1.12.0] - 2019-09-15

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.18.0`

## [1.11.0] - 2019-09-15

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.17.0`

## [1.10.0] - 2019-08-08

### Added

- Prompt for visualization type and store the result in the generated gfm.manifest file

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.16.0`

## [1.9.0] - 2019-08-02

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.15.0`

## [1.8.0] - 2019-07-31

### Added

- Prompt for release date and store the result in the generated gfm.manifest file

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.14.0`

## [1.7.0] - 2019-07-13

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.13.0`

## [1.6.0] - 2019-06-09

### Added

- Prompt for piece tags and store the result in the generated gfm.manifest file

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.11.1`

## [1.5.0] - 2019-05-26

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.10.0`

## [1.4.0] - 2019-05-19

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.9.0`

## [1.3.0] - 2019-05-03

### Added

- Add `isRecordable` field to generated gfm.manifest file

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.8.0`

## [1.2.0] - 2019-04-26

### Changed

- Remove unnecessary `Promise.resolve()` wrap of default cleanup function

## [1.1.0] - 2019-03-31

### Fixed

- Generated \*.gfm.manifest.json files will point to `./dist/esm.js` as the `makePiece` property

### Added

- Generated package.json files will have a version field with a value of `0.0.0`
- Generated piece.js has `sampleSource = {}` as a parameter
- Generated piece.js fetches sample file and sets Tone's context if necessary

### Changed

- Update `@generative-music/samples.generative.fm` peer dependency in generated projects to `^1.7.0`

## [1.0.0] - 2019-03-24

### Added

- `tone` and `@generative-music/samples.generative.fm` are now both peer and dev dependencies in generated projects

### Changed

- Tons of other changes to coincide with [generative-music/pieces-alex-bainter](https://github.com/generative-music/pieces-alex-bainter) which now lints and builds at a top level rather than each package individually

## [0.4.0] - 2019-02-22

### Changed

- Rollback 0.3.0 changes

## [0.3.0] - 2019-02-22

### Added

- Add `tone` and `@generative-music/samples.generative.fm` as peer dependencies in generated projects

## [0.2.1] - 2019-02-18

### Fixed

- Create a .prettierrc file in the generated project

## [0.2.0] - 2019-02-18

### Added

- Generated packages have a `prepublishOnly` script which will run the build

## [0.1.1] - 2019-02-18

### Fixed

- Generated packages are automatically scoped in @generative-music

## [0.1.0] - 2019-02-17

### Fixed

- Generated READMEs have the links at the bottom filled out

### Changed

- Generated projects will automatically have their dependencies added to the rollup externals config

[unreleased]: https://github.com/generative-music/generator-piece/compare/v1.14.0...HEAD
[1.14.0]: https://github.com/generative-music/generator-piece/compare/v1.13.0...v1.14.0
[1.13.0]: https://github.com/generative-music/generator-piece/compare/v1.12.0...v1.13.0
[1.12.0]: https://github.com/generative-music/generator-piece/compare/v1.11.0...v1.12.0
[1.11.0]: https://github.com/generative-music/generator-piece/compare/v1.10.0...v1.11.0
[1.10.0]: https://github.com/generative-music/generator-piece/compare/v1.9.0...v1.10.0
[1.9.0]: https://github.com/generative-music/generator-piece/compare/v1.8.0...v1.9.0
[1.8.0]: https://github.com/generative-music/generator-piece/compare/v1.7.0...v1.8.0
[1.7.0]: https://github.com/generative-music/generator-piece/compare/v1.6.0...v1.7.0
[1.6.0]: https://github.com/generative-music/generator-piece/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/generative-music/generator-piece/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/generative-music/generator-piece/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/generative-music/generator-piece/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/generative-music/generator-piece/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/generative-music/generator-piece/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/generative-music/generator-piece/compare/v0.4.0...v1.0.0
[0.4.0]: https://github.com/generative-music/generator-piece/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/generative-music/generator-piece/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/generative-music/generator-piece/compare/v0.1.1...v0.2.1
[0.2.0]: https://github.com/generative-music/generator-piece/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/generative-music/generator-piece/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/generative-music/generator-piece/compare/v0.0.1...v0.1.0
