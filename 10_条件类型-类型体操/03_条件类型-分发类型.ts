type toArray<T> = T extends any ? T[] : never

type NumArray = toArray<number>

type NumStrArray = toArray<number|string>

export {}