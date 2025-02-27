import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

function SelectSegments(
    {
        value,
        onChnage,
        options = [],
        placeholder = "Slect option"
    }
) {
    return (

        <Select
            value={value}
            onValueChange={onChnage}
        >
            <SelectTrigger className="h-14  md:text-lg">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => {
                    return (<SelectItem key={index} value={option.value}>
                        {option.label}
                    </SelectItem>)
                }

                )}

            </SelectContent>
        </Select>
    )
}

export default SelectSegments