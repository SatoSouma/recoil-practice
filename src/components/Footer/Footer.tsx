import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

//state生成に必要なatom関数を使用
const countState = atom<number>({
  //ユニークキー
  key: 'simple/counter',
  //初期値
  default: 0,
})

//atomの値を加工するselector関数
const reCountState = selector<number>({
  //ユニークキー
  key: 'simple/reCounter',
  //atomで作ったstateを3倍に加工する
  get: ({ get }) => get(countState) * 3,
  set: ({ get, set }, newValue) => set(countState, newValue),
})

export const Footer: React.FC = () => {
  // useRecoilStateにぶち込む
  // 変数と関数を同時生成
  // const [count, setCount] = useRecoilState<number>(countState)
  //関数のみ生成
  // const [setCount] = useSetRecoilState(countState)
  //変数のみ生成
  const count = useRecoilValue<number>(countState)

  //selectorで変数と関数を生成
  const [reCount, setCount] = useRecoilState<number>(reCountState)

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>atom counter</button>
      <p>atom:{count}</p>
      <p>selector:{reCount}</p>
    </>
  )
}
