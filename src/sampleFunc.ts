// 関数を作ってみる。

/*
関数宣言ver.
function 関数名(引数: 引数の型): 返り値の型 {
    処理
}

アロー関数ver.
const 変数名 = (引数: 引数の型): 返り値の型 => {
    処理
}
*/

// 返り値がない場合は、void型を使う。
// 引数string
const outputStrFunc = (str: string): void => {
    console.log(`引数は、文字列「${str}」。`);
};

outputStrFunc('Hello World!');

// 引数オブジェクト
type ObjType = {
    name: string;
    age: number;
};
const outputObjFunc = (obj: ObjType): void => {
    console.log(`名前は${obj.name}、年齢は${obj.age}歳。`);
};

const inputObj: ObjType = {
    name: 'hoge',
    age: 24
};

outputObjFunc(inputObj);

// 引数配列
const outputArrayFunc = (arr: number[]): void => {
    for (const item of arr) {
        console.log(`要素: ${item}`);
    };
};

const sampleNumArray: number[] = [1, 2, 3];
outputArrayFunc(sampleNumArray);

export {};