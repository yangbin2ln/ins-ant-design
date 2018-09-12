// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import dva from 'dva';
// import { WrappedHorizontalLoginForm } from './components/insform/HorizontalLoginForm';
import './index.css';
// import Index from './components/Index';

// ReactDOM.render(
//     (<Index />),
//     document.getElementById('root') as HTMLElement
// );

const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/form2').default);
app.model(require('./models/demo/formdemo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');