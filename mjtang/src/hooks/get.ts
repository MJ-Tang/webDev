import { ref } from 'vue'
import axios from 'axios'

function get (url: string) {
    const result = ref()
    
    axios.get(url).then((rawData) => {
        result.value = rawData.data
        console.log('rawData',rawData.data);
        console.log('resultData',result.value);
    })

    return {
        result
    }
}

export default get