import { LayoutDataProvider } from '@/app/providers/UseLayoutData';
import { notFound } from 'next/navigation';
import React, { cache } from 'react'



export async function generateMetadata({ params }) {

    
    const { type } = await params;
    if (type !== 'customer' && type !== 'provider') {
        notFound();
        return ;
    }

    return {
        title: type == "customer" ? "Customer SignUp" : 'Provider SignUp' || "Default Title",
        // description: category?.description || "Default Description",
        // // openGraph: {
        // //     title: post?.title || "Default Title",
        // //     description: post?.excerpt || "Default description",
        // //     images: post?.image ? [{ url: post.image, width: 1200, height: 630 }] : [],
        // // },
    };
}
async function layout({
    params,
    children
}) {
    const { type } = await params;
 
    return (
        <LayoutDataProvider value={type}>
            {children}
        </LayoutDataProvider>
    )
}

export default layout