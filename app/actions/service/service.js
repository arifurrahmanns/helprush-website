'use server'

const { default: axiosInstance } = require("@/lib/axiosinstance");

export const getCategories = async () => {
    try {
        const res = await axiosInstance.get('categories');
        return res.data;
    } catch (error) {
        console.log(error);
    }

}

export const getSubcategories = async (id) => {
    try {
        const res = await axiosInstance.get(`/subcategories?category_id=${id}`);
        return res.data;
    } catch (error) {
        // console.log(error);

    }
}

export const getServices = async (filter) => {
    const getURL  = ()=>{
        let url = "services"
        if(filter?.category_id){
            url+=`?category_id=${filter.category_id}`
        }
        if(filter?.sub_category_id){
            url+=`&sub_category_id=${filter.sub_category_id}`
        }
        if(filter?.segment_id){
            url+=`&segment_id=${filter.segment_id}`
        }

        return url;
    }

    try {
        const res = await axiosInstance.get(getURL());
        return res.data;
    } catch (error) {
        console.log(error);
    }
}