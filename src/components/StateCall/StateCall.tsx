import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'
import { countState } from '../RecoilStart/RecoilStart'

export const StateCall: React.FC = () => {
  const [callState, setCallState] = useRecoilState<number>(countState)

  return (
    <>
      <button onClick={() => setCallState((c) => c + 1)}>
        別コンポーネントで呼び出し
      </button>
      <p>call:{callState}</p>
    </>
  )
}
