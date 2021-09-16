import {createStore} from 'redux';
import reducer, {MainActions} from '../reducers';

describe('Redux', () => {
    let store = null;
    beforeEach(() => {
        store = createStore(reducer);
    })
    it("creates a store", () => {
        expect(store && typeof store === 'object').toBe(true)
    })
    it("increments", async () => {
        await store.dispatch({type: MainActions.ADD_ONE})
        const state = store.getState();
        expect(state && typeof state === 'object').toBe(true)
        expect(state.number).toEqual(1);
    })
});
