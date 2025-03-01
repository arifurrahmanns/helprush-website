import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
function AccordionSegment({
    items
}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg">{item.title}</AccordionTrigger>
                    <AccordionContent className="text-base">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}

        </Accordion>
    )
}

export default AccordionSegment