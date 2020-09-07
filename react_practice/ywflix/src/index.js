import React from 'react';
import ReactDOM from 'react-dom';
// .env에 src를 NODE_PATH 로 설정했기 때문에 root로 읽음
import App from 'Components/App';
import "./api";

ReactDOM.render(<App />, document.getElementById('root'));
