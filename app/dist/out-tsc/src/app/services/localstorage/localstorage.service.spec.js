import { TestBed, inject } from '@angular/core/testing';
import { LocalstorageService } from './localstorage.service';
describe('LocalstorageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LocalstorageService]
        });
    });
    it('should be created', inject([LocalstorageService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=localstorage.service.spec.js.map