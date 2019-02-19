'use strict';

const Generator = require('yeoman-generator');

const devDependencies = [
  'eslint',
  'eslint-config-metalex9',
  'prettier',
  'rollup',
  'rollup-plugin-babel',
  '@babel/core',
  '@babel/preset-env',
];

class PieceGenerator extends Generator {
  prompting() {
    const prompts = [
      {
        name: 'title',
        message: 'Piece title',
        type: 'input',
      },
      {
        name: 'id',
        message: 'Piece id',
        type: 'input',
      },
    ];
    return this.prompt(prompts).then(props => {
      this.props = Object.assign({}, this.props, props);
    });
  }
  writing() {
    const manifestName = `${this.props.id}.gfm.manifest.json`;
    const pkgJson = {
      name: `@generative-music/piece-${this.props.id}`,
      main: 'dist/piece.js',
      module: 'dist/piece.js',
      generativeFmManifest: manifestName,
      scripts: {
        build: 'rollup -c',
        lint: 'eslint .',
        preversion: 'npm run lint',
        postversion: 'git push && git push --tags',
        prepublishOnly: 'npm run build',
      },
      repository: {
        type: 'git',
        url: `git+https://github.com/generative-music/piece-${
          this.props.id
        }.git`,
      },
      files: ['dist', 'image.png', `${manifestName}`],
      author:
        'Alex Bainter <alexbainter+github@gmail.com> (https://alexbainter.com)',
      license: 'MIT',
      bugs: {
        url: `https://github.com/generative-music/piece-${
          this.props.id
        }/issues`,
      },
      homepage: `https://github.com/generative-music/piece-${
        this.props.id
      }#readme`,
    };
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.fs.copy(
      this.templatePath('src/babelrc'),
      this.destinationPath('src/.babelrc')
    );
    this.fs.copy(
      this.templatePath('src/eslintrc'),
      this.destinationPath('src/.eslintrc')
    );
    this.fs.copy(
      this.templatePath('src/piece.js'),
      this.destinationPath('src/piece.js')
    );
    this.fs.copyTpl(
      this.templatePath('CHANGELOG.md'),
      this.destinationPath('CHANGELOG.md'),
      this.props
    );
    this.fs.copy(
      this.templatePath('eslintignore'),
      this.destinationPath('.eslintignore')
    );
    this.fs.copy(
      this.templatePath('eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(this.templatePath('npmrc'), this.destinationPath('.npmrc'));
    this.fs.copyTpl(
      this.templatePath('piece.gfm.manifest.json'),
      this.destinationPath(manifestName),
      this.props
    );
    this.fs.copy(
      this.templatePath('prettierrc'),
      this.destinationPath('.prettierrc')
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copy(
      this.templatePath('rollup.config.js'),
      this.destinationPath('rollup.config.js')
    );
  }
  install() {
    this.npmInstall(devDependencies, { 'save-dev': true });
  }
}

module.exports = PieceGenerator;
