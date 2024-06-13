'use server'

export async function handleSubmit(formData : FormData) {
    console.log(formData)
    console.log(formData.get('title'))
    console.log(formData.get('image'))
}