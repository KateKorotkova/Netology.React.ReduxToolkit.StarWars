import { createSlice } from '@reduxjs/toolkit';


const starWarsSlice = createSlice({
    name: 'facts',
    initialState : {
        allFacts: [
          "Прообразом Чубакки стал пес режиссера",
          "Актерам разрешили подобрать любимый цвет для своих световых мечей.",
          "В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.",
          "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.",
          "Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок",
        ],
        currentFacts: []
    },
    reducers: {
      showFacts(state, number) {
        state.currentFacts = state.allFacts.slice(0, Number(number.payload));
      }
    },
})


export const { showFacts } = starWarsSlice.actions;
export default starWarsSlice.reducer;