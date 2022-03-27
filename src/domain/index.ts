export const config = {
  cols: 6,
  rows: 6,
  desireValue: 120,
} as const

export type Cols = Value[]

// export type Cols<
//   T extends Value[] = [Value],
//   U extends Value[] = Value[]
// > = T["length"] extends 1
//   ? T[0] extends Sign
//     ? never
//     : [...U, T[0]]
//   : T extends [infer F, ...infer R]
//   ? F extends number
//     ? R extends Value[]
//       ? [F, ...Cols<R, [...U, F]>]
//       : never
//     : F extends Sign
//     ? Last<U> extends number
//       ? R extends Value[]
//         ? [F, ...Cols<R, [...U, F]>]
//         : never
//       : never
//     : never
//   : never

// export type H = Cols<[2,"-"]>

// const v: Value = 2
// export const hoge: Cols = [1]

export type Value = number | Sign

export const Sign = {
  Plus: "+",
  Minus: "-",
  Multiple: "*",
  Divide: "/",
} as const

export type Sign = typeof Sign[keyof typeof Sign]

// type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never

export const getDesireNumber = (): number => Math.floor(Math.random() * 120)

export const getRandomSign = (): Sign =>
  Object.values(Sign)[Math.floor(Math.random() * Object.values(Sign).length)]

export const getRandomOneToNine = (): number => Math.floor(Math.random() * 10)

export const getRandomValue = (): Value => {
  if (Math.floor(Math.random() * 2) === 1) {
    return getRandomOneToNine()
  } else {
    return getRandomSign()
  }
}

export const getResultAnswers = (
  desireValue: number,
  options?: { length?: number }
): Cols => {
  const length = options?.length || 6

  let values = generateValues(length)

  while (Function(`return ${values.join("")}`)() !== desireValue) {
    values = generateValues(length)
  }
  return values
}

const isSign = (v: Value): v is Sign => typeof v !== "number"

const generateValues = (length: number): Cols => {
  const values: Cols = []
  for (let i = 0; i < length; i++) {
    switch (i) {
      case 0:
      case length - 1:
        values[i] = getRandomOneToNine()
        continue
      default:
        const prev = values[i - 1]
        if (isSign(prev)) {
          values[i] = getRandomOneToNine()
          continue
        }
        if (prev === 0) {
          values[i] = getRandomSign()
          continue
        }
        values[i] = getRandomValue()
    }
  }
  return values
}
