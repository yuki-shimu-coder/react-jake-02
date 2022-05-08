import { useState } from "react";
import { ChildArea } from "./ChildArea";
import "./index.css";

export default function App() {
  console.log('App');

  // ========================================
  // stateを定義
  // ========================================
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)


  // ========================================
  // イベント関数を定義
  // ========================================
  const onClickCountUp = () => setCount(count + 1)
  const onChangeText = (e) => setText(e.target.value)
  const onClickOpen = () => setOpen(!open)

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <br />

      <input type="text" value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}
