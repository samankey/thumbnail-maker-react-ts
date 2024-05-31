export class StyleHelper {
  private hexToNumber(n: string) {
    return parseInt(n, 16);
  }

  pxToRem(size: number, unit = 10) {
    return `${(size / unit).toFixed(1)}rem`;
  }

  hexToRgbSegment(str: string) {
    try {
      const body = str[0] === '#' ? str.slice(1) : str;
      if (body.length === 3) {
        return body.split('').map((s) => {
          return this.hexToNumber(s + s);
        });
      }
      if (body.length >= 6) {
        return [body.slice(0, 2), body.slice(2, 4), body.slice(4, 6)].map((s) => {
          return this.hexToNumber(s);
        });
      }
      throw new Error('wrong parameter');
    } catch (e) {
      return [0, 0, 0];
    }
  }

  hexToRgba(str: string, op: number) {
    return `rgba(${this.hexToRgbSegment(str).join(',')}, ${op})`;
  }

  ellipsis() {
    return `
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;`;
  }

  ellipsisMulti(n: number, maxHeight?: number) {
    if (n < 2) {
      console.error('n should be 2 or upper');
      return '';
    }
    return `
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      display: -webkit-box;
      -webkit-line-clamp: ${n};
      -webkit-box-orient: vertical;
      ${maxHeight ? ` max-height: ${maxHeight}px` : ''};`;
  }
}

export const styleHelper = new StyleHelper();
