// Define a class to represent quality and required bandwidth
class Quality {
    constructor(quality, required) {
        this.quality = quality;
        this.required = required;
    }
}

function selectStreamQuality(bandwidth, qualities) {
    // your code here
    if(bandwidth < qualities[0].required) {
        return "No Quality Available";
    }
    let maxQuality = qualities[0].quality;
    for(let i=1; i < qualities.length; i++) {
        if(bandwidth >= qualities[i].required) {
            maxQuality = qualities[i].quality;
        }   else {
            break;
        }
    }
    return maxQuality;
}

