import gql from 'graphql-tag';

const GET_CARDS = gql`
  query {
    cards {
      id
      name
      rarity
      price
      imgUrl
      kinds {
        name
      }
    }
  }
`;

const CARD_RARITIES = gql`
  query {
    __type(name: "Rarity") {
      enumValues {
        name
      }
    }
  }
`;

const CARD_KINDS = gql`
  query {
    kinds {
      id
      name
    }
  }
`;

export default {
  CARD_RARITIES: CARD_RARITIES,
  CARD_KINDS: CARD_KINDS,
  GET_CARDS: GET_CARDS,
}