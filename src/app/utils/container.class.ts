/**
 * @enum
 * Defines Loading and Loaded states
 */
export enum LoadingState {
    Loading,
    Loaded
}

export class Container {
    /**
     * @prop
     * Property that defines loading state.
     * This is broken out from other possible state to prevent mixing of prop defined UI state and Loading state
     */
    loadingStatus = LoadingState.Loading;

    /**
     * @prop
     * Defines the component state
     */
    state = {};

    /**
     * @prop
     * Returns if the loadingStatus prop is currently defined as Loading
     */
    get isLoading() {
        return this.loadingStatus === LoadingState.Loading;
    }

    constructor() {}

    /**
     * @function
     * Similar to reacts setState but is not 'batched'
     * @param updateState Function to update state (Needs to return an object)
     */
    setState(updateState: Function): void {
        const _prevState = { ...this.state }; // Immutable in case update fails
        Object.entries(updateState(_prevState)).forEach(([key, value]) => {
            _prevState[key] = value;
        });
        this.state = { ..._prevState };
    }

}
