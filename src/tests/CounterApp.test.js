import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
  test('debe de mostrar <CounterApp /> correctamente', () => {
    const wrapper = shallow(<CounterApp />);

    expect(wrapper).toMatchSnapshot();
  });
  
  test('debe de mostrar el valor enviado', () => {
    const wrapper = shallow(
      <CounterApp
        value = {100}
      />
    );

    const textoH2 = parseFloat(wrapper.find('h2').text().trim());

    expect(textoH2).toBe(100);
  })
  
})
