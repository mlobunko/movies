import { NAME } from './constants';

export const getPoster = state => state[NAME]['posterPath'];

export const getTrailer = state => state[NAME]['trailerPath'];
