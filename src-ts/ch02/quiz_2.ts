class Dictionary {
  private words: string[];

  constructor() {
    this.words = [];
  }

  add(word: string): void {
    if (word.length < 0) {
      return;
    }
    this.words.push(word);
  }

  display(): string {
    return this.words.reduce((acc, value) => acc + ', ' + value);
  }

  reverse(): string {
    return this.words.reduceRight((acc: string, value: string) => acc + ', ' + value);
  }
}

const dic: Dictionary = new Dictionary();
dic.add('Java');
dic.add('Smalltalk');
dic.add('Python');
dic.add('JavaScript');
dic.add('Swift');
dic.add('ActionScript');

console.log(dic.display());
console.log(dic.reverse());

export default Dictionary;
