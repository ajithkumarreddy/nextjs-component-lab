import type { Toast, TypeReducerActionType } from "../Toast.types";

const ToastReducer = (state: Toast[], action: TypeReducerActionType): Toast[] => {
  switch (action.type) {
    case "ADD": {
      return [...state, action.payload];
    }
    case "REMOVE": {
      return state.filter((toast) => toast.id !== action.payload.id);
    }
    case "CLEAR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default ToastReducer;
