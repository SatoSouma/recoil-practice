import React from 'react'
import { atomFamily, selector, useRecoilState, useRecoilValue } from 'recoil'

type child = {
  itemName: string
  numName: number
}

//atomを動的に生成
// atomFamily関数を使い関数を生成
const itemStateFamily = atomFamily({ key: 'atomfamily', default: 0 })

//atomと違う点としてdefaultを関数に出来る
const numStateFamily = atomFamily({
  key: 'atomfamily',
  default: (i: number) => i * 5,
})

export const Header: React.FC<child> = ({ itemName, numName }) => {
  //生成した関数に識別子を渡す
  const atom = itemStateFamily(itemName)
  const numAtom = numStateFamily(numName)
  //それを使って関数・変数を作成
  const [state, setState] = useRecoilState(atom)
  const [numState, setNumState] = useRecoilState(numAtom)
  // 一気に生成
  // const [state, setState] = useRecoilState(itemStateFamily(itemName))

  return (
    <>
      <button onClick={() => setState((c) => c + 1)}>atomFamily counter</button>
      <p>{state}</p>
      <button onClick={() => setNumState((c) => c + 1)}>
        atomFamily defaultFunction counter
      </button>
      <p>{numState}</p>
    </>
  )
}
