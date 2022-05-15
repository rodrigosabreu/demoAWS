import { createReducer, createAction, on, props  } from '@ngrx/store';

export interface IAppState{
  nome: string;
}

export interface IAppStateTitulo{
  titulo: string;
}

export const appInitialState: IAppState = {
  nome:  "Usuário"
}

export const appInitialStateTitulo: IAppStateTitulo = {
  titulo:  "Plataforma"
}



export const setUsuario = createAction('[App] Nome do Usuario', props<{ nomeState: string }>())
export const setTitulo = createAction('[App] Titulo da Plataforma', props<{ tituloState: string }>())

export const nomeReducer = createReducer(
  appInitialState,
  /*on(setUsuario, (state) => {
    state = {
      ...state,
     nome: "Rafa"
    }
    return state
  }),*/

  on(setUsuario, (state, { nomeState }) => ({ nome: nomeState}))

);

export const tituloReducer = createReducer(
  appInitialStateTitulo,
  on(setTitulo, (state, { tituloState }) => ({ titulo: tituloState}))

);
