import React from 'react'
import { atom, selector, useRecoilState } from 'recoil'

//stateに必要なパーツ(引数)atom関数を使用
const countState = atom({
  //ユニークキー
  key: 'simple/counter',
  //初期値
  default: 0,
})

//atomの値を加工するselector関数
const reCountState = selector({
  //ユニークキー
  key: 'simple/reCounter',
  //atomで作ったstateの加工
  get: ({ get }) => get(countState) * 3,
  //   set: ({ get, set }, newValue) => set(countState, newValue),
})

export const Footer: React.FC = () => {
  // useRecoilStateにぶち込む
  // 変数と関数を同時生成
  const [count, setCount] = useRecoilState(countState)
  //関数のみ生成
  // const setCount = useRecoilState(countState)
  //変数のみ生成
  // const count = useRecoilState(countState)

  //selectorで生成
  //   const setReCount = useRecoilState(reCountState)

  return (
    <>
      <p>Footer</p>
      <button onClick={() => setCount((c) => c + 1)} />
    </>
  )
}
