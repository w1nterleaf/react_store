export function errorMessage (error:any, type?: string): string {
    
    let data = error.response.data
    let text = ''
    
    for(let key in data) {
        if(type == 'login') {
            text += data[key]
        }else {
            data[key].forEach((value: string) => {
                text += value
            })
        }
    }
    
    return text
}





