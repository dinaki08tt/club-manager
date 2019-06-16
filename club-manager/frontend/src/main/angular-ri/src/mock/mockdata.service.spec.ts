import { TestBed } from '@angular/core/testing';

import { MockdataService } from './mockdata.service';

describe( 'MockdataService', () => {
    beforeEach(() => TestBed.configureTestingModule( {} ) );

    it( 'should be created', () => {
        const service: MockdataService = TestBed.get( MockdataService );
        expect( service ).toBeTruthy();
    } );

    it( 'print mock data', () => {
        const service: MockdataService = TestBed.get( MockdataService );
        console.log( service.getMockStockData() );
        expect(service.getMockStockData()).toBeFalsy();
    } );

} );