// 返り値がある関数を作ってみる。

// 正規表現を使って、引数として渡された文字列に特定の文字列が含まれるかチェックする。
// 特定の文字列＝TypeScript
const checkArgString = (argStr: string): boolean => {
    // 正規表現オブジェクト。正規表現リテラルを使って作成。
    const expression: RegExp = /TypeScript/;

    // TypeScriptが含まれる文章か判定。
    // 正規表現オブジェクト.test(チェックしたい文字列)
    const result = expression.test(argStr);

    /*
    includesメソッドを使って実装することも可能。
    const result = argStr.includes('TypeScript');
    */

    return result;
}

// チェックしたい対象の文字列
const sampleArgStr1: string = 'TypeScript is one of the programming languages developed by Microsoft.';
const sampleArgStr2: string = 'When I was a university student, I took a course in Excel VBA and I got interested in programming.';
const samplArgStr3: string = "I'm interested in TypeScript.";

console.log(checkArgString(sampleArgStr1)); // true
console.log(checkArgString(sampleArgStr2)); // false
console.log(checkArgString(samplArgStr3)); // true