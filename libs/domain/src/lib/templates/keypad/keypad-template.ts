export interface KeypadTemplate {

  readonly resetTime?: number;
  readonly keypadColumns?: number;
  readonly rangeStart?: number;
  readonly rangeEnd?: number;
}

export class KeypadTemplate implements KeypadTemplate {

  constructor(
    public readonly keypadTemplate?: KeypadTemplate
  ) {
    Object.assign(this, keypadTemplate)
  }

  static Builder = class Builder implements Partial<KeypadTemplate> {
    resetTime?: number;
    keypadColumns?: number;
    rangeStart?: number;
    rangeEnd?: number;

    withResetTime(resetTime: number): this & Pick<KeypadTemplate, 'resetTime'> {
      return Object.assign(this, {resetTime: resetTime});
    }

    withKeypadColumns(keypadColumns: number): this & Pick<KeypadTemplate, 'keypadColumns'> {
      return Object.assign(this, {keypadColumns: keypadColumns});
    }

    withRangeStart(rangeStart: number): this & Pick<KeypadTemplate, 'rangeStart'> {
      return Object.assign(this, {rangeStart: rangeStart});
    }

    withRangeEnd(rangeEnd: number): this & Pick<KeypadTemplate, 'rangeEnd'> {
      return Object.assign(this, {rangeEnd: rangeEnd});
    }

    build(this: KeypadTemplate) {
      return new KeypadTemplate(this);
    }
  };
}
