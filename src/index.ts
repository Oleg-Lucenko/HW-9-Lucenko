

function filterArray<T>(arr: any[], condition: T): T[] {
    return arr.filter(element => typeof element === typeof condition);
};


class Stack<T> {

    stack: T[] = [];


    push(item: T): void {
        this.stack.push(item);
    };
    pop(): T | undefined {
        return this.stack.pop();
    };
    peek(): T {
        return this.stack[this.stack.length - 1];
    };
};


class Dictionary<K extends string | number | symbol, V> {
    dictionary = new Map();

    set(key: K, value: V) {
        this.dictionary.set(key, value);
    };

    get(key: K): K {
       return this.dictionary.get(key);
    };

    has(key: K): boolean {
       return this.dictionary.has(key);
    };
};






