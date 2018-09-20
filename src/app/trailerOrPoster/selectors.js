import { NAME } from './constants';

export const getAll = state => state[NAME];

export const getPoster = state => state[NAME]['posterPath'];

export const getTrailer = state => state[NAME]['trailerPath'];
