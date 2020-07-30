import { createContext, useContext, useReducer } from 'react'

enum ActionTypes {
  setHoveredElement,
  resetHoveredElement
}

type PropsChildren = {
  children: React.ReactElement
}

type HoverState = {
  hoveredElement?: React.Ref<JSX.Element>
}

type HoverStateAction = {
  type: ActionTypes
  payload?: SetHoveredElementPayload
}

type SetHoveredElementPayload = React.Ref<JSX.Element>

type UseHoverState = [
  HoverState,
  {
    setHoveredElement: (payload: SetHoveredElementPayload) => void
    resetHoveredElement: () => void
  }
]

const initialState: HoverState = { hoveredElement: undefined }

function useHoverState(): UseHoverState {
  const reducer = (state: HoverState, action: HoverStateAction) => {
    switch (action.type) {
      case ActionTypes.setHoveredElement:
        return { ...state, hoveredElement: action.payload }
      case ActionTypes.resetHoveredElement:
        return { ...state, hoveredElement: undefined }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setHoveredElement = (payload: React.Ref<JSX.Element>): void =>
    dispatch({ type: ActionTypes.setHoveredElement, payload })
  const resetHoveredElement = (): void => dispatch({ type: ActionTypes.resetHoveredElement })

  return [state, { setHoveredElement, resetHoveredElement }]
}

export const HoverStateContext = createContext(undefined)

export function HoverStateProvider({ children }: PropsChildren) {
  return <HoverStateContext.Provider value={useHoverState()}>{children}</HoverStateContext.Provider>
}

export const useHoverStateValue = (): UseHoverState => useContext(HoverStateContext)
