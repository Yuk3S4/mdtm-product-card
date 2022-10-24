import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en el <ProductImage />', () => { 
    test('debe de mostrar el componente correctamente con la imagen', () => { 
        
        const wrapper = renderer.create(
            <ProductImage img="https://img1.png" />    
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
        

    });

    test('debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />    
                    )
                }
            </ProductCard>    
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
    })
})