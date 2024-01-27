import { createContext} from "react";

// const [count,setCount] = useState(0);
var count = 0;
export const CountContext = createContext({count});