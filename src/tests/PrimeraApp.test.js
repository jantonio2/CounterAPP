import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('debe mostrar el mensaje "Hola, Soy Antonio', () => {
    const saludo = 'Hola, Soy Antonio';

    // const wrapper = render(<PrimeraApp saludo = {saludo} />);
    const {getByText} = render(<PrimeraApp saludo = {saludo} />);

    // wrapper.getByText();
    expect(getByText(saludo)).toBeInTheDocument();
  })
  
})
