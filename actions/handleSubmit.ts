'use server'

import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export async function handleSubmit(formData : FormData) {
    const supabase = createClient();
    const imageId = uuidv4()
    const image = formData.get('image')
    console.log(image)
    if (image){
        const { data : uploadData , error : uploadError } = await supabase
            .storage
            .from('note_image')
            .upload(imageId, image, {
                cacheControl: '3600',
                upsert: false
            })
        if (uploadError){
            console.log(uploadError)

        } else {
            console.log('$$$$$$$$$업로드 성공$$$$$$$$$$')
            console.log(uploadData)
            const { data: urlData } = await supabase.storage
						.from('note_image')
						.getPublicUrl(uploadData.path);
            console.log(urlData)
        }
    }
    
    // const { data, error } = await supabase
    // .from('notes')
    // .insert([
    //     { 
    //         title: formData.get('title'), 
    //         content: formData.get('content'), 
    //         image: imageId, 
    //         created_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
    //     },
    // ])
    // .select()
    // console.log(formData)
    // console.log(imageId)
    // console.log(data)
}