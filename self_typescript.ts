 
type IKun = "sing" | "dance" | "rap"

type MyExclude<T, E> = T extends E ? never : T 

type IKunPick = MyExclude<IKun, "sing">

export {}