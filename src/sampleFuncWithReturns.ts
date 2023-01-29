// 返り値がある関数を作ってみる。

/*
関数型
(引数: 引数の型) => 返り値の型
*/

// 正規表現を使って、引数として渡された文字列に特定の文字列が含まれるかチェックする。
// 特定の文字列＝TypeScript
// 引数はstring型、返り値はboolean型。
type CheckArgStringType = (argStr: string) => boolean;
const checkArgString: CheckArgStringType = (argStr: string): boolean => {
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

// 配列を返す関数を作ってみる。
// ファストフード店を要素とする配列を作る。
type FastFoodRestaurant = {
    name: string;
    favorite: boolean;
};

type AddRestaurantFuncType = (restaurant: FastFoodRestaurant) => FastFoodRestaurant[];
type ReturnFavoFunctionType = (restaurants: FastFoodRestaurant[]) => FastFoodRestaurant[];

// 引数を使って配列を作る
let fastFoodRestaurants: FastFoodRestaurant[] = [];
const addRestaurantListFunc: AddRestaurantFuncType = (restaurant: FastFoodRestaurant): FastFoodRestaurant[] => {
    // スプレッド構文で要素を追加
    fastFoodRestaurants = [...fastFoodRestaurants, restaurant];
    return fastFoodRestaurants;
};

addRestaurantListFunc({ name: 'Shake Shack', favorite: true });
addRestaurantListFunc({ name: 'In-N-Out', favorite: false });
addRestaurantListFunc({ name: 'Chick Fil A', favorite: true });
addRestaurantListFunc({ name: 'The Habit Burger Grill', favorite: true });
addRestaurantListFunc({ name: 'Del Taco', favorite: false});

console.log(fastFoodRestaurants);

// お気に入りのファストフード店だけを要素として持つ配列を返す。
const returnFavoArrayFunc: ReturnFavoFunctionType = (restaurants: FastFoodRestaurant[]): FastFoodRestaurant[] => {
    const resultArray: FastFoodRestaurant[] = restaurants.filter((restaurant: FastFoodRestaurant) => {
        return restaurant.favorite === true
    });

    return resultArray;
};

console.log(returnFavoArrayFunc(fastFoodRestaurants));

export {};