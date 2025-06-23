export const uploadToCloudinary = async (pics) => {
    if(pics){
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "twiter");
        data.append("cloud_name", "dkj5wract")

        const res = await fetch("https://api.cloudinary.com/v1_1/dkj5wract/image/upload", {
            method: "post",
            body: data
        })

        const file = await res.json();
        return file.url.toString();
    }
    else {
        console.log("error in uploading ")
    }
}