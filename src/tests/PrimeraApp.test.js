// import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe mostrar el mensaje "Hola, Soy Antonio', () => {
  //   const saludo = 'Hola, Soy Antonio';
  //   // const wrapper = render(<PrimeraApp saludo = {saludo} />);
  //   const {getByText} = render(<PrimeraApp saludo = {saludo} />);
  //   // wrapper.getByText();
  //   expect(getByText(saludo)).toBeInTheDocument();
  // })

  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Antonio';
    const wrapper = shallow( <PrimeraApp saludo = {saludo} /> );

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy Antonio';
    const subTitulo = 'Soy firstmate'
    const wrapper = shallow( 
      <PrimeraApp 
        saludo = { saludo }
        subtitulo = {subTitulo}
      /> 
    );

    const textoParrafo = wrapper.find('p').text().trim();

    expect(textoParrafo).toBe(subTitulo);
  });
})
