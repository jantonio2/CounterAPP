// Agregando por en toBeInTheDocument
// import '@testing-library/jest-dom/extend-expect';

//npm install --save-dev enzyme poner esto a parte del install de git

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));