import React from 'react'
import {
  atomFamily,
  selectorFamily,
  SerializableParam,
  useRecoilState,
} from 'recoil'

type child = {
  itemName: string
  numName: number
}

//atomを動的に生成
// atomFamily関数を使い関数を生成
// const itemStateFamily = atomFamily<number, SerializableParam>({
//   key: 'atomfamily',
//   default: 0,
// })

//selectorFamily関数で生成
// const LiarStateFamily = selectorFamily({
//   key: 'selector-family',
//   get:
//     (arg) =>
//     ({ get }) =>
//       get(itemStateFamily(arg)) * 3,
// })

export const SelectorFamily: React.FC<child> = ({ itemName }) => {
  // 一気に生成
  //   const selector = LiarStateFamily(itemName)
  //   const [state, setState] = useRecoilState(selector)

  return (
    <>
      {/* <button onClick={() => setState((c) => c + 1)}> */}
      {/* selectorFamily counter
      </button>
      <p>{state}</p> */}
    </>
  )
}
