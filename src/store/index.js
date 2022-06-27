import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './reducer/contentReducer';

export default configureStore({
    reducer: {
        content: contentReducer,
    },
});
