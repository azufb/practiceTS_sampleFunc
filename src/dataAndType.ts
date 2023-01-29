// データ型と型注釈
// プリミティブ型とオブジェクト型がある。

// 型注釈
// 型注釈(型アノテーション)を加えることで、変数や関数に型を指定できる。「: 型名」のようにする。

// プリミティブ型
/*
以下7つがある。

文字列型(string)
数値型(number)
→IEEE754倍精度浮動小数点数であり、64ビットで表される小数点数。
53ビットの情報しか入れられない。つまり、扱える桁数に制限がある。

真偽値(boolean)→true/false
BigInt型
→任意精度の整数を表す。大きな数字を誤差なく表現できる。
数値型とは異なり、扱える情報量に制限がない。そのため、大きな数値でも誤差なく表現可能。

null型
undefined型
シンボル型(symbol)
*/

// string
const text: string = '文字列';

// number
const num: number = 100;

// boolean
const bool: boolean = true;

// null
const nullData: null = null;

// undefined
const undefinedData: undefined = undefined;

// オブジェクトとオブジェクト型
/*
オブジェクト
→オブジェクトリテラルで、複数の値をプロパティとしてまとめたデータ。オブジェクト型。
例）
const sampleObj = {
    name: 'hoge',
    age: 24
}

オブジェクト型
→プリミティブ型以外は全て、オブジェクト型に分類される。クラスや配列もオブジェクト型。
*/

// type文
/*
type文で型名を宣言。オブジェクトだけでなく、プリミティブの型に別名を与えることも可能。
type 型名 = 型で宣言。
*/

// type文を使うと...
type SampleObj1 = {
    name: string;
    age: number;
};

const sampleObj1: SampleObj1 = {
    name: 'hoge',
    age: 24
};

// プリミティブな値にも使える。
type SampleStr = string;
const sampleStr: SampleStr = 'サンプルStr';

// interface宣言
/*
interface宣言は。オブジェクト型のみで利用できる、型名宣言。
interface 型名 {
    プロパティ名: 型
}
*/

// interface宣言を使うと...
interface SampleObj2 {
    name: string;
    age: number;
}

const sampleObj2: SampleObj2 = {
    name: 'hoge',
    age: 24
};

// オプショナルなプロパティ
/*
オブジェクトのプロパティとして、あってもなくても良いプロパティ。
型宣言において、プロパティ名?: 型というように宣言。
*/
type SampleObj3 = {
    name: string;
    age: number;
    gender?: string;
};

const sampleObj3WithGender: SampleObj3 = {
    name: 'hoge',
    age: 24,
    gender: 'female'
};

// コンパイルエラーにならない！
const sampleObj3WithoutGender: SampleObj3 = {
    name: 'hoge',
    age: 24
}

// 読み取り専用(readonly)プロパティ
/*
readonly プロパティ名: 型とすることで、読み取り専用のプロパティにすることができる。
読み取り専用なので、変更できない。
*/
type SampleObj4 = {
    readonly name: string;
    age: number
};

const sampleObj4: SampleObj4 = {
    name: 'hoge',
    age: 24
};

// ageを変更してみる。
console.log('変更前: ', sampleObj4.age);
sampleObj4.age = 25;
console.log('変更後: ', sampleObj4.age);

/*
console.log('変更前: ', sampleObj4.name);
sampleObj4.name = 'fuga'; //読み取り専用プロパティであるため、'name' に代入することはできません。
console.log('変更後: ', sampleObj4.name);
*/

// 部分型とインデックスシグネチャはおいておく。めんどくさい。

// 型引数
/*
変数や関数を宣言する時に型指定を行うが、そのときに、任意の型を渡して、型の中で利用することができる。
型引数を持つ型は、ジェネリック型とも呼ぶ。
*/

type SampleObj5<T> = {
    name: string;
    age: T;
};

// number型を渡す
const sampleObj5_1: SampleObj5<number> = {
    name: 'hoge',
    age: 24
};

// string型を渡す
const sampleObj5_2: SampleObj5<string> = {
    name: 'hoge',
    age: '24'
};

/*
型引数って、自由に型を渡せてしまうから、自由度高くなりすぎじゃないか？折角型指定してるのに...
→extends構文で絞り込み！型引数が常にextendsで指定した型の部分型であるように指定できる。
一応、プリミティブ型を指定することも可能。

部分型
→AとB2つの型で、どちらも型Aを満たす場合、BはAの部分型であると言える。
*/

type Sample = {
    age: number;
};

type SampleObj5WithExtends<T extends Sample> = {
    name: string;
    data: T;
};

const sampleObj5withExtends: SampleObj5WithExtends<Sample> = {
    name: 'hoge',
    data: {
        age: 24
    }
};

// 配列の型
/*
配列名: 型 = 配列の値のように指定できる。
配列の型は、「配列の要素の型[]」で表す。
*/

// 要素がstring型の配列
const sampleStrArray: string[] = ['a', 'b', 'c'];

// 要素がnumber型の配列
const sampleNumArray: number[] = [1, 2, 3];

// オブジェクトを配列の要素とすることもできる。
type obj = {
    name: string;
    age: number;
};

const sampleObjArray: obj[] = [
    {
        name: 'hoge',
        age: 24
    },
    {
        name: 'fuga',
        age: 25
    }
]

// タプル型
/*
要素の数と要素それぞれの型を固定する型。
必要な数の要素の分だけ、型を順番に指定する。
: [インデックス番号0の要素の型, インデックス番号1の要素の型]のように指定する。
*/

const sampleTupleArray: [string, number, boolean] = ['hoge', 123, true];

/*
タプル型においても、readonlyを付けた読み取り専用のタプル型や、要素の型名の後に?を付けたオプショナルな要素を持つタプル型などがある。
*/
