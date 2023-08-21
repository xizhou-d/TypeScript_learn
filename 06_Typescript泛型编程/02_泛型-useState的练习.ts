// 元组：useState 函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
    let state = initialState
    function setState(newState) {
        state = newState
    }

    return [state, setState]
}

// 初始化 count
const [count, setCount] = useState(100)

const [message, setMessage] = useState('Hello Message')
const [banners, setBanners] = useState<any[]>([])

export  {}