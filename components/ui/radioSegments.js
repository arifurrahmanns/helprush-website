import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { v4 as uuidv4 } from 'uuid';

function RadioSegments({
    options = [],
    value,
    onChange,
    name = null
}) {
    return (
        <RadioGroup
            value={value}
            name={name}
            onValueChange={onChange} >
            {options.map((option, index) => {
                const id = uuidv4()
                return (<div key={id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={id} />
                    <Label htmlFor={id} className="lg:text-lg">{
                        option.label
                    }</Label>
                </div>)
            })}
        </RadioGroup>
    )
}

export default RadioSegments