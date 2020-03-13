import * as actionTypes from '../actions/actionTypes';
import * as content from '../../data/TherapistDetailsData';

const initState = {
  therapists: [
    {
      id: '1',
      title: 'Neurological Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/neuro.webp?alt=media&token=5031198c-b9bc-4a67-a373-25ae20f3e319',
      time: '45 min',
      price: '150',
      body: content.NEURO
    },
    {
      id: '2',
      title: 'Orthopedic Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/ortho.png?alt=media&token=86490781-6850-4ed9-8ba8-ae818e233cc6',
      time: '45 min',
      price: '150',
      body: content.ORTHO
    },
    {
      id: '3',
      title: 'Paediatric Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/paediatric.webp?alt=media&token=fba9d9db-d3ea-44f2-ba48-b2d21d035e22',
      time: '45 min',
      price: '150',
      body: content.PAEDIATRIC
    },
    {
      id: '4',
      title: 'Cardio Thoracic Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/cardio.webp?alt=media&token=de506178-eb59-448c-9ce6-345168462c59',
      time: '45 min',
      price: '150',
      body: content.CARDIO
    },
    {
      id: '5',
      title: 'Gynaecological Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/gynae.webp?alt=media&token=45cf5f19-4e44-4302-bc9f-e07609047ecf',
      time: '45 min',
      price: '150',
      body: content.GYNAE
    },
    {
      id: '6',
      title: 'Sports Physiotherapist',
      imgUrl:
        'https://firebasestorage.googleapis.com/v0/b/physionext-d454f.appspot.com/o/sports.webp?alt=media&token=7dbb17d4-4dc1-4218-9ee1-73ad69145120',
      time: '1 hr',
      price: '150',
      body: content.SPORTS
    }
  ],
  selectedTherapist: null,
  selectedImageUrl: null,
  selectedContent: null
};

const therapistReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_THERAPIST:
      return {
        ...state,
        selectedTherapist: action.value
      };
    case actionTypes.SET_IMAGE_URL:
      return {
        ...state,
        selectedImageUrl: action.value
      };
    case actionTypes.SET_CONTENT:
      return {
        ...state,
        selectedContent: action.value
      };
    default:
      return state;
  }
};

export default therapistReducer;
