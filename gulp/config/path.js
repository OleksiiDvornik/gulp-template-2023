export const publicFolder = './public'
export const srcFolder = './src';
export const buildFolder = './dist';

const path = {
  public: {
    html: `${publicFolder}/*.html`,
  },
  src: {

  },
  dest: {
    html: buildFolder,
  },
  watch: {
    html: [`${publicFolder}/*.html`, `${srcFolder}/html/*.html`],
  }
}

export default path;
