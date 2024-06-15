'use server'

import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { revalidatePath } from "next/cache" 

export async function handleSubmit(formData : FormData) {
    const supabase = createClient();
    const imageId = uuidv4()
    const image = formData.get('image')
    let imageUrl = null

    // 이미지 스토리지 업로드
    if (image){
        const { data : uploadData , error : uploadError } = await supabase
            .storage
            .from('note_image')
            .upload(imageId, image, {
                cacheControl: '3600',
                upsert: false
            })
        // 성공시 업로드한 이미지 url 불러오기
        if (uploadError){
            console.log(uploadError)
        } else {
            const { data : { publicUrl } } = await supabase.storage
						.from('note_image')
						.getPublicUrl(uploadData.path);
            imageUrl = publicUrl
        }
    }
    // 디비에 이미지와 함께 게시글 저장
    const { data , error } = await supabase
        .from('notes')
        .insert([
            { 
                title: formData.get('title'), 
                content: formData.get('content'), 
                image: imageUrl, 
                created_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
            },
        ])
        .select()
    console.log(data)
    revalidatePath('/')
}