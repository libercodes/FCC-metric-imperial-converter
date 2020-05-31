import { RequestHandler } from 'express'
export const convert:RequestHandler = ( req, res, next ) => {
    
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

    let number: string = value.match(regexNumber).join('')
    let unit: string = value.match(regexForChar).join('')
    if (units.indexOf(unit) === -1) invalidUnit = true
    if(number.length === 0) invalidNumber = true

    if (invalidUnit &&  invalidNumber) {
        res.json('invalid number and unit')
        return
    } else {
        if(invalidUnit)  return res.json('invalid unit')
        if(invalidNumber) return res.json('invalid number')
    }
    let returnNum: string
    let returnUnit: string
    
    switch(unit) {
        case 'gal':
            returnNum = (parseFloat(number) * 3.78541).toFixed(5)
            returnUnit = 'L'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        case 'L':
            returnNum = (parseFloat(number) / 3.78541).toFixed(5)    
            returnUnit = 'gal'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        case 'lbs':
            returnNum = (parseFloat(number) * 0.453592).toFixed(5)    
            returnUnit = 'kg'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        case 'kg':
            returnNum = (parseFloat(number) / 0.453592).toFixed(5)    
            returnUnit = 'lbs'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        case 'mi':
            returnNum = (parseFloat(number) * 1.60934 ).toFixed(5)    
            returnUnit = 'km'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        case 'km':
            returnNum = (parseFloat(number) / 1.60934).toFixed(5)     
            returnUnit = 'mi'
            res.json({
                initNum: number,
                initUnit: unit,
                returnNum: returnNum,
                returnUnit: returnUnit,
                message: `${number}${unit} converts to ${returnNum}${returnUnit}`
            })
            return
        default:
            return;
    }


}