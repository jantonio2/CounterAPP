import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

  let wrapper = shallow(<CounterApp />);;

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe de mostrar <CounterApp /> correctamente', () => {
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
  });

  test('debe de incrementar con el botón de +1', () => {
    wrapper.find('button').at(0).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('11');
  });

  test('debe de decrementar con el botón de -1', () => {
    wrapper.find('button').at(2).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect(counterText).toBe('9');
  });

  test('debe de colocar el valor por defecto con el botón reset', () => {
    const wrapper = shallow(
      <CounterApp
        value = {105}
      />
    );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const counterText = wrapper.find('h2').text().trim();

    console.log(counterText);

    expect(counterText).toBe('105');
  });
  
})
