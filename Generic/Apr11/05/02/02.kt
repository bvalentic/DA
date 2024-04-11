package org.luxons.sevenwonders.ui.redux

import org.luxons.sevenwonders.ui.redux.sagas.SagaManager
import redux.Compose
import redux.RAction
import redux.Store
import redux.WrapperAction
import redux.applyMiddleware
import redux.createStore
import redux.rEnhancer
import kotlin.browser.window

val INITIAL_STATE = SwState()

private fun <A, T1, R> composeWithDevTools(function1: (T1) -> R, function2: (A) -> T1): (A) -> R =
        window.asDynamic().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(function1, function2) as Function1<A, R>

fun configureStore(
    sagaManager: SagaManager<SwState, RAction, WrapperAction>,
    initialState: SwState = INITIAL_STATE
): Store<SwState, RAction, WrapperAction> {
    val compose: Compose<RAction, WrapperAction> = if (window.asDynamic().__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != undefined) {
        composeWithDevTools(applyMiddleware(sagaManager.createMiddleware()), redux.rEnhancer())
    } else {
        redux.compose(applyMiddleware(sagaManager.createMiddleware()), redux.rEnhancer())
    }

    val sagaEnhancer = applyMiddleware(sagaManager.createMiddleware())
    return createStore(::rootReducer, initialState, compose)
}
