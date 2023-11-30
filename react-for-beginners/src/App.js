import Button from "./Button.js"
import styles from "./App.module.css"
import { useEffect, useState } from "react"


function Hello() {
  useEffect(() => {
    console.log("created")
    return () => console.log("destroyed : ")
  }, [])
  return (
    <h1>Hello</h1>
  )
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClickShow = () => {
    setShowing((prev) => !prev)
  }
  const onClick = () => {
    setValue((prev) => prev + 1)
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const iRunOnlyOnce = () => {
    console.log('I run only once.')
  }
  useEffect(iRunOnlyOnce, [])
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR ", keyword)
    }
  }, [keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click Me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
