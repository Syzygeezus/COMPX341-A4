// Name: Ryan Monaghan  ID: 1514614
import React from 'react';
import {render, screen} from '@testing-library/react';
import BestSellers from '../modules/bestSellers/BestSellers';

test('Heading for best sellers component should show text correctly', function () {
    render(<BestSellers />);
    let heading = document.getElementById("best-sellers-heading");

    expect(heading.innerHTML).toBe("Top 20 best sellers");
});