import * as React from "react";
import * as ReactDom from 'react-dom';

import {Hello} from './components/index';

ReactDom.render(
    <Hello name="typescript" enthusiasmLevel={7} />,
    document.getElementById('root')
)