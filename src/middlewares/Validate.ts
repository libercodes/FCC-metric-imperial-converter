import { RequestHandler } from 'express'
export const validateInput: RequestHandler = ( req, res, next ) => {
    let invalidUnit: boolean
    let invalidNumber: boolean
    const units = [
        'gal',
        'L',
        'lbs',
        'kg',
        'mi',
        'km'
    ]
    
    const value: string = req.body.value
    
    const regexNumber = /[0-9]/g
    const regexForChar = /[a-zA-Z]/g

    let number: string = value.match(regexNumber)[0]
    let unit: string = value.match(regexForChar)[0]
    if (units.indexOf(unit) !== -1) invalidUnit = true
    if(number.length === 0) invalidNumber = true

    if (invalidUnit &&  invalidNumber) {
        res.json('invalid number and unit')
    } else {
        invalidUnit && res.json('invalid unit')
        invalidNumber && res.json('invalid number')
    }

    

}