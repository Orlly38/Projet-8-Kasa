import {calculatePageNumber} from '../Carrousel'


//TEST DU CARROUSEL - FLECHE GAUCHE
describe('The formatJobList function', () => {
    it('Test function prevSlide', () => {
        const result = calculatePageNumber(3,-1,5);
        expect(result).toBe(2)
    })

    it('Test function prevSlide zero', () => {
        const result = calculatePageNumber(0,-1,5);
        expect(result).toBe(4)
    })
 
//TEST DU CARROUSEL - FLECHE DROITE   
    it('Test function nextSlide', () => {
        const result = calculatePageNumber(3,1,5);
        expect(result).toBe(4)
    })

    it('Test function nextSlide max ', () => {
        const result = calculatePageNumber(4,1,5);
        expect(result).toBe(0)
    })
})