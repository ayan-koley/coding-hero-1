function mostInfluentialUser(influenceScore) {
    let n = influenceScore.length;
    if(n == 0) return -1;
    let best_influence = 0;
    let followers = influenceScore[0];
    for(let i=1; i < n; i++) {
        let current = influenceScore[i];
        if(current > followers ) {
            followers = current;
            best_influence = i;
        }
    }
    return best_influence;
}
