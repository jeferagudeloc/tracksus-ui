export default (itemA, itemB, key) => {        
    if (key !== 'INICIO') {        
        return false
    } else {            
        let a = itemA["INICIO"]
        let b = itemB["INICIO"]     
        let search = a.includes('/');
        if(search){
            a = a.split('/')            
            b = b.split('/')
        }else{
            a = a.split('-')
            b = b.split('-')            
        }                
        a = (parseInt(a[2], 10) * 10000) + (parseInt(a[1], 10) * 100) + parseInt(a[0])
        b = (parseInt(b[2], 10) * 10000) + (parseInt(b[1], 10) * 100) + parseInt(b[0])            
        return a - b
    }
}