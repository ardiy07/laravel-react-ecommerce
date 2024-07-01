// Initial State
export const initialState = {
    isOpen: false,
    isBack: true,
    isNext: false,
    oldSlide: 0,
    activeSlide: 0
};

// Action Types
export const actionTypes = {
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    UPDATE_SLIDE: 'UPDATE_SLIDE'
};

// Reducer Function
export function reducer(state, action) {
    switch (action.type) {
        case actionTypes.OPEN:
            return { ...state, isOpen: true };
        case actionTypes.CLOSE:
            return { ...state, isOpen: false };
        case actionTypes.UPDATE_SLIDE:
            const { current, next } = action.payload;
            const isBack = next === 0;
            const isNext = next === 15;
            return { ...state, isBack, isNext, oldSlide: current, activeSlide: next };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const openSlider = () => ({ type: actionTypes.OPEN });
export const closeSlider = () => ({ type: actionTypes.CLOSE });
export const updateSlide = (current, next) => ({
    type: actionTypes.UPDATE_SLIDE,
    payload: { current, next }
});