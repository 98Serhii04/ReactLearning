import React from 'react';

import {
    LoginPage,
    TaskPage,
    CreatePage
} from './pages';

export const viewMap = {
    login: <LoginPage />,
    tasks:<TaskPage/>,
    create: <CreatePage/>
};
