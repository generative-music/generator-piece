'use strict';

const Generator = require('yeoman-generator');

const devDependencies = ['@generative-music/samples.generative.fm', 'tone'];

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
      main: 'dist/cjs.js',
      module: 'dist/esm.js',
      version: '0.0.0',
      generativeFmManifest: manifestName,
      repository: {
        type: 'git',
        url: 'git+https://github.com/generative-music/pieces-alex-bainter.git',
      },
      files: ['dist', 'image.png', `${manifestName}`],
      author:
        'Alex Bainter <alexbainter+github@gmail.com> (https://alexbainter.com)',
      license: 'MIT',
      bugs: {
        url: 'https://github.com/generative-music/pieces-alex-bainter/issues',
      },
      homepage:
        'https://github.com/generative-music/piece-s-alex-bainter#readme',
      peerDependencies: {
        '@generative-music/samples.generative.fm': '^1.6.0',
        tone: '^13.4.9',
      },
      publishConfig: {
        access: 'public',
      },
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
    this.fs.copy(this.templatePath('npmrc'), this.destinationPath('.npmrc'));
    this.fs.copyTpl(
      this.templatePath('piece.gfm.manifest.json'),
      this.destinationPath(manifestName),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
  }
  install() {
    this.npmInstall(devDependencies, { 'save-dev': true });
  }
}

module.exports = PieceGenerator;
