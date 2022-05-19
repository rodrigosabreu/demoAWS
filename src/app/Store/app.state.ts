import { createReducer, createAction, on, props } from '@ngrx/store';

export interface IAppState {
  nome: string;
  titulo: string;
}

const INITIAL_STATE: IAppState = {
  nome: 'Rodrigo',
  titulo: 'Plataforma',
};

export const setUsuario = createAction(
  '[App] Nome do Usuario',
  props<{ nomeState: string }>()
);
export const setTitulo = createAction(
  '[App] Nome Titulo',
  props<{ tituloState: string }>()
);

export const reducer = createReducer(
  INITIAL_STATE,
  on(setUsuario, (state, { nomeState }) => ({ ...state, nome: nomeState })),
  on(setTitulo, (state, { tituloState }) => ({ ...state, titulo: tituloState }))
);
