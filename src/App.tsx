import * as React from "react"
import { VStack, HStack, Text } from "@chakra-ui/react"
import { Header } from "./components/Header"
import {
  getDesireNumber,
  getResultAnswers,
  Value,
  Sign,
  config,
} from "./domain"
import { Input } from "./components/Input"
import { Cell } from "./components/Cell"

const desireValue = getDesireNumber()
const resultAnswers = getResultAnswers(desireValue)

const initialState = [...Array(config.rows)].map((_) =>
  [...Array(config.cols)].map((_) => null)
)

export const App = () => {
  const [state, setState] = React.useState<(Value | null)[][]>(initialState)
  const [currentRowIndex, setCurrentRowIndex] = React.useState(0)
  const [currentColIndex, setCurrentColIndex] = React.useState(0)

  const onClickInput = (v: Value) => () => {
    if (currentColIndex === config.cols) return
    setState((old) =>
      old.map((row, i) => {
        if (i !== currentRowIndex) return row
        return row.map((col, i) => {
          if (i !== currentColIndex) return col
          return v
        })
      })
    )
    setCurrentColIndex((old) => old + 1)
  }

  const onClickDelete = () => {
    if (currentColIndex === 0) return
    setState((old) =>
      old.map((row, i) => {
        if (i !== currentRowIndex) return row
        return row.map((col, i) => {
          if (i === currentColIndex - 1) return null
          return col
        })
      })
    )
    setCurrentColIndex((old) => old - 1)
  }
  const onClickEnter = () => {
    if (currentColIndex !== config.cols) return
    if (
      Function(`return ${state[currentRowIndex].join("")}`)() === desireValue
    ) {
      setCurrentRowIndex((old) => old + 1)
      setCurrentColIndex(0)
    }
  }

  const isAnswer = (rowIndex: number) => rowIndex < currentRowIndex

  const isMatchValue = (rowIndex: number, v: Value | null) => {
    if (v === null) return false
    if (!isAnswer(rowIndex)) return false
    return resultAnswers.some((col) => col === v)
  }

  const isMatchValueAndPosition = (
    rowIndex: number,
    colIndex: number,
    v: Value | null
  ) => {
    if (v === null) return false
    if (!isAnswer(rowIndex)) return false
    return resultAnswers[colIndex] === v
  }

  return (
    <VStack>
      <Header />
      <Text
        as="p"
        fontWeight="bold"
      >{`Find the hidden calculation that equals ${desireValue}`}</Text>
      <VStack>
        {state.map((row, rowIndex) => (
          <HStack key={rowIndex}>
            {row.map((v, colIndex) => (
              <Cell
                key={colIndex}
                isAnswer={isAnswer(rowIndex)}
                isMatchValue={isMatchValue(rowIndex, v)}
                isMatchValueAndPosition={isMatchValueAndPosition(
                  rowIndex,
                  colIndex,
                  v
                )}
              >
                {v}
              </Cell>
            ))}
          </HStack>
        ))}
      </VStack>

      <HStack>
        {[...Array(10).keys()].map((v) => (
          <Input key={v} onClick={onClickInput(v)}>
            {v}
          </Input>
        ))}
      </HStack>
      <HStack>
        <Input onClick={onClickEnter}>Enter</Input>
        {Object.values(Sign).map((v) => (
          <Input key={v} onClick={onClickInput(v)}>
            {v}
          </Input>
        ))}
        <Input onClick={onClickDelete}>Delete</Input>
      </HStack>
    </VStack>
  )
}
